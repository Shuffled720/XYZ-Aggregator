"use client";

import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";
import { useGlobalContext } from "@/context/store";

const MenuBar = () => {
  const { search, setSearch, apiType, setApiType } = useGlobalContext();
  return (
    <div className="bg-accent p-4">
      <div className="grid grid-cols-4 gap-4  justify-items-center	">
        <div>
          <Button onClick={() => setApiType("news")}>News</Button>
        </div>
        <div>
          <Button onClick={() => setApiType("music")}>Music</Button>
        </div>
        <div>
          <Button onClick={() => setApiType("reddit")}>Reddit</Button>
        </div>
        <div>
          <Button onClick={() => setApiType("arcXiv")}>arcXiv</Button>
        </div>
      </div>
      <div className="w-1/2 m-auto py-2 flex justify-between">
        <Input
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
          type="text"
          placeholder="Search..."
        />
        <Button>Submit</Button>
      </div>
    </div>
  );
};

export default MenuBar;
