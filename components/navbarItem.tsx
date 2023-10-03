import React from "react";
import Image from "next/image";

export default function NavBarItem() {
  return (
    <div>
      <ul className="flex gap-12">
        <li className="grid place-items-center">
          <div className="h-[40px] grid place-items-center">
            <div className="w-[40px]">
              <Image
                src="/img/about-us.png"
                width={0}
                height={0}
                layout="responsive"
                alt="kanhea-logo"
              />
            </div>
          </div>
          <h1 className="text-lg font-bold">About Us</h1>
        </li>
        <li className="grid place-items-center">
          <div className="h-[40px] grid place-items-center">
            <div className="w-[40px]">
              <Image
                src="/img/contact-us.png"
                width={0}
                height={0}
                layout="responsive"
                alt="kanhea-logo"
              />
            </div>
          </div>
          <h1 className="text-lg font-bold">About Us</h1>
        </li>
        <div className="w-[1px] h-[80px] bg-gray-400"></div>
        <li className="grid place-items-center">
          <div className="h-[40px] grid place-items-center">
            <div className="w-[40px]">
              <Image
                src="/img/job.png"
                width={0}
                height={0}
                layout="responsive"
                alt="kanhea-logo"
              />
            </div>
          </div>
          <h1 className="text-lg font-bold">Jobs</h1>
        </li>
      </ul>
    </div>
  );
}