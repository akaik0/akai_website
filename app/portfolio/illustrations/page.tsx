"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import Image from "next/image";
import akai from "../../public/akai-lg.svg";
import Artbar from "../../components/artbar";
import { Sketch1, Sketch4 } from "../../../public";

function Illustrations() {
  useEffect(() => {
    document.title = "Akaiko - Illustrations";
  });

  return (
    <div className="grid grid-cols-3 grid-rows-5 gap-2 place-items-stretch  h-full">
      <div className=" col-start-1 col-end-2 ">
        <Image
          className="h-full w-full object-cover"
          src={Sketch1}
          alt="sketch"
        ></Image>
      </div>
      <div className=" col-start-2 col-end-3">
        <Image
          className="h-full w-full object-cover"
          src={Sketch1}
          alt="sketch"
        ></Image>
      </div>
      <div className=" col-start-3 col-end-4">
        <Image
          className="h-full w-full object-cover"
          src={Sketch1}
          alt="sketch"
        ></Image>
      </div>
      <div className=" col-start-1 col-end-4">
        <Image
          className="h-full w-full object-cover"
          src={Sketch4}
          alt="sketch"
        ></Image>
      </div>
      <div className=" col-start-1 col-end-2">
        <Image
          className="h-full w-full object-cover"
          src={Sketch1}
          alt="sketch"
        ></Image>
      </div>
      <div className=" col-start-2 col-end-3">
        <Image
          className="h-full w-full object-cover"
          src={Sketch1}
          alt="sketch"
        ></Image>
      </div>
      <div className=" col-start-3 col-end-4">
        <Image
          className="h-full w-full object-cover"
          src={Sketch1}
          alt="sketch"
        ></Image>
      </div>
      <div className=" col-start-1 col-end-4">
        <Image
          className="h-full w-full object-cover"
          src={Sketch4}
          alt="sketch"
        ></Image>
      </div>
      <div className=" col-start-1 col-end-2">
        <Image
          className="h-full w-full object-cover"
          src={Sketch1}
          alt="sketch"
        ></Image>
      </div>
      <div className=" col-start-2 col-end-3">
        <Image
          className="h-full w-full object-cover"
          src={Sketch1}
          alt="sketch"
        ></Image>
      </div>
      <div className=" col-start-3 col-end-4">
        <Image
          className="h-full w-full object-cover"
          src={Sketch1}
          alt="sketch"
        ></Image>
      </div>
    </div>
  );
}
export default Illustrations;
