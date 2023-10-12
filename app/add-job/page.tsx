"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";


export default function AddJob() {
    return (
        <>
            <Navbar></Navbar>
            <form className="
            flex 
            flex-col 
            gap-3 
            items-center 
            mt-10">
            <div className="flex items-center text-3xl font-bold text-[#176B87]">Describe Your Company</div>
            <div className="flex justify-end flex-col sm:flex-col md:flex-row items-center text-xl mt-5">
                <label className="md:mr-20 md:w-32 text-right items-center mb-3 text-lg">Job Title</label>
                <input className="
                    border
                    md:w-[700px]
                    border-gray-500
                    rounded-[15px]
                    w-[300px]
                    py-2
                    px-4
                " type="text" placeholder="Enter your job title"/>
            </div>
            <div className="flex justify-end flex-col sm:flex-col md:flex-row items-center text-xl mt-5">
                <label className="md:mr-20 md:w-32 text-right items-center mb-3 text-lg">Company</label>
                <input className="
                    border
                    md:w-[700px]
                    border-gray-500
                    rounded-[15px]
                    w-[300px]
                    py-2
                    px-4
                " type="text" placeholder="Enter the name of your company"/>
            </div>
            <div className="flex justify-end flex-col sm:flex-col md:flex-row items-center text-xl mt-5">
                <label className="md:mr-20 md:w-32 text-right items-center mb-3 text-lg">Job Location</label>
                <input className="
                    border
                    md:w-[700px]
                    border-gray-500
                    rounded-[15px]
                    w-[300px]
                    py-2
                    px-4
                " type="text" placeholder="Enter where your job located"/>
            </div>
            <div className="flex justify-end flex-col sm:flex-col md:flex-row items-center text-xl mt-5">
                <label className="md:mr-20 md:w-32 text-right items-center mb-3 text-lg">Job Description</label>
                <input className="
                    border
                    md:w-[700px]
                    border-gray-500
                    rounded-[15px]
                    w-[300px]
                    py-2
                    px-4
                " type="text" placeholder="Enter your job description"/>
            </div>
            <div className="flex justify-end flex-col sm:flex-col md:flex-row items-center text-xl mt-5">
                <label className="md:mr-20 md:w-32 text-right items-center mb-3 text-lg">Job Requirement</label>
                <input className="
                    border
                    md:w-[700px]
                    border-gray-500
                    rounded-[15px]
                    w-[300px]
                    py-2
                    px-4
                " type="text" placeholder="Enter job requirement"/>
            </div>
            <div className="flex justify-end flex-col sm:flex-col md:flex-row items-center text-xl mt-5 md:mr-[400px]">
                <label className="md:mr-20 md:w-32 text-right items-center mb-3 text-lg">Salary</label>
                <input className="
                    border
                    md:w-[300px]
                    border-gray-500
                    rounded-[15px]
                    w-[175px]
                    py-2
                    px-4
                " type="text" placeholder="Salary Range"/>
            </div>
            <div className="flex justify-end flex-col sm:flex-col md:flex-row items-center text-xl mt-5 md:mr-[400px]">
                <label className="md:mr-20 md:w-32 text-right items-center mb-3 text-lg">Company Logo</label>
                <div className="
                    flex-row
                    md:border
                    md:border-gray-500
                    rounded-[15px]
                    md:w-[300px]
                    w-[300px]
                    py-2
                    px-4
                ">
                <input type="file" className="
                    block 
                    w-full 
                    text-sm 
                    text-slate-800
                    file:mr-4 
                    file:py-2 
                    file:px-4
                    file:rounded-full 
                    file:border-0
                    file:text-sm 
                    file:font-semibold
                    file:bg-[#176B87] 
                    file:text-white
                    hover:file:bg-[#023444]
                     "/>
                </div>
            </div>
            <div className="flex justify-end flex-col sm:flex-col md:flex-row items-center text-xl mt-5 md:mr-[400px]">
                <label className="md:mr-20 md:w-32 text-right items-center mb-3 text-lg">Contact Detail</label>
                <input className="
                    border
                    md:w-[300px]
                    border-gray-500
                    rounded-[15px]
                    w-[175px]
                    py-2
                    px-4
                " type="text" placeholder="Enter your contact detail"/>
            </div>
            <button className="
                text-white
                font-bold
                text-[20px]
                mt-5
                bg-[#104f64]
                border
                border-gray-500
                rounded-[15px]
                py-2
                px-[50px]
                mb-[50px]
                hover:bg-[#023444]
                hover:border-none
            ">Upload</button>
        </form>
        </>
        
    );
}
