"use client";

import { useEffect, useState } from "react";
import { CardWithForm } from "./Card";

const Cards = () => {
  const [data, setData] = useState([]);
  const callAPI = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/newsapi`, {
        method: "GET",
      });
      const data = await res.json();
      //   console.log(data);
      setData(data.response.articles);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    callAPI();
  }, []);
  return (
    <div className="grid grid-cols-3 gap-3 justify-items-center">
      {data.map((item: any) => (
        <>
          {/* <div>{item?.title}</div> */}
          <CardWithForm data={item} />
        </>
      ))}
    </div>
  );
};

export default Cards;
