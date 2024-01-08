import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Countries = ({ data }: { data: any }) => {

  return (
    <div className="container py-4">
      {data?.map((item: any) => (
        <>
          <Card className="">
            <CardHeader>
              <CardTitle>{item.name.common}</CardTitle>
              <CardDescription>
                Capital: {item.capital[0]} <br />
              </CardDescription>
              <CardDescription>
                Continents: {item?.continents[0]} <br />
              </CardDescription>
              <CardDescription>
                Languages: <br />
                {Object.keys(item.languages).map((lang: any) => (
                  <>{item.languages[lang]}, </>
                ))}
              </CardDescription>
            </CardHeader>
            <CardContent></CardContent>
          </Card>
        </>
      ))}
    </div>
  );
};

export default Countries;
