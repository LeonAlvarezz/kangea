import React from "react";
import "@/app/globals.css";
import Image from "next/image";
import NavBarItem from "./navbarItem";
import Footer from "./footer";

export default function Navbar() {
  return (
    <>
      <div className="w-full bg-primary-color">
        <div className="w-[90%] m-auto flex items-center justify-between h-[100px] text-white">
          <div className="w-[141px]">
            <Image
              src="/img/kanhea-logo.png"
              width={141}
              height={79}
              alt="kanhea-logo"
            />
          </div>
          <div className="flex justify-center items-center gap-24">
            <NavBarItem></NavBarItem>
            <li className="grid place-items-center">
              <div className="w-[60px]">
                <Image
                  src="/img/job-posting.png"
                  width={0}
                  height={0}
                  layout="responsive"
                  alt="kanhea-logo"
                />
              </div>
              <h1 className="text-xl font-bold">Post Job</h1>
            </li>
          </div>
        </div>
      </div>
    </>
  );
}