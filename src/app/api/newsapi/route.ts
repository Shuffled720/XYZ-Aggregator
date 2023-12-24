const fetchNews = async (req: Request) => {
    
    const response=await fetch('https://newsapi.org/v2/everything?' +
    'q=Rupal&' +
   
    'sortBy=popularity&' +
    'apiKey=7724e979730840768bbb83000d63dbd1')

    const json=await response.json();
    return json;
}

export async function GET(request :Request){
    const response=await fetchNews(request);
    return Response.json({response});

}