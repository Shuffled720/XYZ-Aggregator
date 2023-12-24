import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";

const MenuBar = () => {
  return (
    <div className="bg-accent p-4">
      <div className="grid grid-cols-4 gap-4  justify-items-center	">
        <div>
          <Button>News</Button>
        </div>
        <div>
          <Button>Music</Button>
        </div>
        <div>
          <Button>Reddit</Button>
        </div>
        <div>
          <Button>arcXiv</Button>
        </div>
      </div>
      <div className="w-1/2 m-auto py-2 flex justify-between">
        <Input type="text" placeholder="Search..." />
        <Button>Submit</Button>
      </div>
    </div>
  );
};

export default MenuBar;
