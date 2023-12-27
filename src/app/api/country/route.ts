const fetchCountry = async (key:string, value:string) => {
    var api = 'https://restcountries.com/v3.1/'+`${key}/${value}`;
    const response=await fetch(api)
    console.log(api)
    const json=await response.json();
    return json;
}

export async function GET(request :Request){
    const {searchParams}=new URL(request.url);
    const key=searchParams.get('key');
    const value=searchParams.get('value');    
    const response=await fetchCountry(key? key:'', value? value:'');
    return Response.json({response});
}