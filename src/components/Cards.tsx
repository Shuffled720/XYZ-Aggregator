"use client";

import { useEffect, useState } from "react";
import { CardWithForm } from "./Card";
import { apiURL } from "@/lib/urls";
import { Skeleton } from "@/components/ui/skeleton";
import { Loader2 } from "lucide-react";
import { useGlobalContext } from "@/context/store";
import News from "./sections/News/News";

const Cards = () => {
  const { search, apiType } = useGlobalContext();

  return (
    <>
      {apiType === "news" ? (
        <>
          <News />
        </>
      ) : (
        <></>
      )}
      {apiType === "music" ? (
        <>
          <Music />
        </>
      ) : (
        <></>
      )}
      {apiType === "reddit" ? (
        <>
          <Music />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Cards;
