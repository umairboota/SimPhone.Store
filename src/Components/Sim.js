import React, { useState } from "react";
// import { Link } from "react-router-dom";

import image from "../images/simbanner.png"

export default function Sim() {
  const [sim, setSim] = useState("");
  const [sNumber, setSNumber] = useState();
  // const modal = () => {};
  let style = {
    height : 650,
    width : 1400
  }
  return (
    <div className="mb-11">
      <section className=" mb-11">
        <img src={image} alt="Loading" style={style} />
        <div className="flex items-center justify-center mt-5 border border-white shadow-none rounded-lg ml-52 py-2 mr-28 text-white bg-gradient-to-br from-green-400 to-blue-800">
          {/* <p className="flex justify-between mr-96"></p> */}
          <label className="text-lg mr-3" htmlFor="Serial Number">
            Select Company:
          </label>
          <select
            className="text-black mr-6 border rounded-xl cursor-pointer"
            id=""
            value={sim}
            onChange={(e) => setSim(e.target.value)}
          >
            <option value="jazz">Jazz</option>
            <option value="ufone">UFone</option>
            <option value="zong">Zong</option>
            <option value="tele">Telenor</option>
          </select>
          <label className="text-lg mr-3" htmlFor="Serial Number">
            Choose a Serial Number:
          </label>
          <select
            className="text-black mr-6 inline-flex border rounded-xl cursor-pointer"
            id=""
            value={sNumber}
            onChange={(e) => setSNumber(e.target.value)}
          >
            <option value="0300">0300</option>
            <option value="0301">0301</option>
            <option value="0302">0302</option>
            <option value="0321">0321</option>
          </select>
          <div className="flex items-center justify-center  ">
            <div className="flex items-center max-w-md mx-auto rounded-lg ">
              <div>
                <input
                  type="search"
                  className="w-full px-4 py-1 text-gray-800 rounded-full focus:outline-none"
                  placeholder="Search Number"
                  x-model="search"
                />
              </div>
              <div>
                <button className="flex items-center justify-center w-12 h-12 mr-4 ml-2 text-white rounded-r-lg bg-green-500 ">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="container mb-2 flex mx-auto w-full items-center justify-center">
            <ul className="flex flex-col p-4">
              <li className="border-gray-400 flex flex-row">
                <div className="select-none flex flex-1 items-center duration-500 ease-in-out transition-shadow Form hover:-translate-y-2 rounded-2xl border-2 p-6 hover:shadow-2xl border-green-500">
                  <div className=" pl-1 mr-16">
                    <div className="font-medium">
                      <h2>
                        {sNumber}-0000000{" "}
                        <i className="text-green-600 font-serif"> 25% OFF </i>{" "}
                      </h2>
                      <h3 className="text-sm text-gray-500 font-serif ">
                        RS.1000
                      </h3>
                      <div class="mt-8 font-serif ">
                        <h2>1000 on-net mints </h2>
                        <h2>300 offnet mints </h2>
                        <h2>5GB MB's </h2>
                        <h2>1000 SMS </h2>
                      </div>
                    </div>
                  </div>
                  <button
                    className="hover:text-white font-[Poppins] py-1 px-4 rounded-lg border-2 text-xl border-green-600 md:ml-8  hover:bg-green-400 duration-500"
                    onClick={""}
                  >
                    Buy Now
                  </button>
                </div>
              </li>
            </ul>
          </div>
          
        </div>
      </section>
    </div>
  );
}
