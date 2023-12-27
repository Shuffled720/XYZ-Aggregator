import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const Countries = ({ data }: { data: any }) => {
  console.log(data);

  return (
    <div className="container">
      <div>
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
              {/* <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Deploy</Button>
              </CardFooter> */}
            </Card>
          </>
        ))}
      </div>
    </div>
  );
};

export default Countries;
