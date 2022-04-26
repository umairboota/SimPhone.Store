import React from "react";
import call from "../images/calling.png";
import call1 from "../images/calling1.png";
import phone from "../images/phone.png";
import Chart from "./Chart";
import app from "../images/app.png";
import cart from "../images/cart.png";
import chat from "../images/chat.png";
import sim from "../images/sim.png";
import recharge from "../images/recharge.png";
import post from "../images/postpaid.png";

export default function Home() {
  let style = {
    float: "right",
    height: 400,
  };
  return (
    <section class="text-gray-600 body-font">
      <div class=" py-24 mx-auto">
        <div class="flex flex-wrap w-full mb-20">
          <div class="lg:w-1/2 w-full px-10 mb-6 lg:mb-0">
            <h1 class="sm:text-3xl text-2x font-bold title-font mb-2 text-gray-900">
              Pitchfork Kickstarter Taxidermy
            </h1>
            <h4>Lorem ipsum dolor sit amet</h4>
            {/* Line code  */}
            <div class="h-1 w-20 bg-green-500 mt-4 rounded"></div>
            <p className="mt-4  text-black text-lg">
              I am text block. Click edit button to change this text. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div className="">
            <img className="img" style={style} src={call} alt="" />
          </div>
        </div>
        <div class="container1">
          <img src={call1} alt="Loading..." />
          <div class="top-left  text-black text-4xl mt-9">
            You’ve got questions, we’ve got <br /> answers.
          </div>
          <div class="h-0.5 w-20  top-left-2 bg-green-500 mt-8 rounded">
            <h2 className="text-xl text-green-800">Accodion</h2>
          </div>
        </div>
        
        <table>
          <tr >
            <th className="inline-flex py-7 px-5">
              <Chart image={sim} title="Cash on Delivery" />
            </th>
            <th className="inline-flex py-7 px-5">
              <Chart image={cart} title="24/7 Service" />
            </th>
            <th className="inline-flex py-7 px-5" >
              <Chart image={app} title="Apps" />
            </th>
          </tr>
          <tr >
            <th className="inline-flex py-7 px-5">
              <Chart image={chat} title="Customized Products" />
            </th>
            <th className="inline-flex py-7 px-5">
              <Chart image={recharge} title="Your Tech Solution" />
            </th>
            <th className="inline-flex py-7 px-5">
              <Chart image={post} title="Customer Services" />
            </th>
          </tr>
        </table>
        <div className=" color-1">
          <div className="">
            <h2 className="text-white text-4xl text-right text-1 ">
              Our SIMS, MOBILES, DEVICES <br /> anywhere!
            </h2>
            <p className="text-right text-white mt-5 text-2">
              Lorem ipsum dolor sit amet
            </p>
            {/* <div class="h-1 w-20 bg-red-500 mt-4 text-2 rounded"></div> */}
            <img className="mx-11" src={phone} alt="" />
          </div>
        </div>
        <div className="">
          <h1 className="text-3xl text-black text-center mt-6">
            Flexible pricing structure
          </h1>
          <p className="text-black text-center ">Lorem ipsum dolor sit amet</p>
          {/* <div class="h-0.5 w-20 bg-red-500 flex  justify-items-center mt-4 text-2 rounded"></div> */}

          <div className="mt-9 bg-gradient-to-r from-green-500 to-blue-500">
            <div class="w-full mt-25  pt-8">
              <div class="flex flex-col sm:flex-row justify-center mb-6 sm:mb-0">
                <div class="sm:flex-1 text-white lg:flex-initial lg:w-1/4 rounded-t-lg rounded-tr-none mt-4 flex flex-col">
                  <div class="p-8 text-3xl  font-bold text-center">Sim</div>
                  <div class="border-0 border-grey-light border-t border-solid text-sm">
                    <div class="text-center border-0 border-grey-light border-b border-solid py-4">
                      1 Ice Cream
                    </div>
                    <div class="text-center border-0 border-grey-light border-b border-solid py-4">
                      Unlimited toppings
                    </div>
                    <div class="text-center border-0 border-grey-light border-b border-solid py-4">
                      Analytics
                    </div>
                  </div>
                  <div class="text-center  mb-8 mt-auto">
                    <button
                      className="color-2 hover:text-white font-[Poppins] py-1 px-4 rounded-lg border-2 text-xl border-green-600 md:ml-8  hover:bg-green-400  
    duration-500"
                    >
                      Buy now
                    </button>
                  </div>
                </div>
                <div class="flex-1 lg:flex-initial text-white lg:w-1/4 rounded-t-lg mt-4 sm:-mt-4 shadow-lg z-30 flex flex-col">
                  <div class="w-full p-8 text-3xl font-bold text-center">
                    SIM
                  </div>
                  <div class="w-full border-0 border-grey-light border-t border-solid text-sm">
                    <div class="text-center border-0 border-grey-light border-b border-solid py-4">
                      2 Ice Creams
                    </div>
                    <div class="text-center border-0 border-grey-light border-b border-solid py-4">
                      25 Cones
                    </div>
                    <div class="text-center border-0 border-grey-light border-b border-solid py-4">
                      Unlimited toppings
                    </div>
                    <div class="text-center border-0 border-grey-light border-b border-solid py-4">
                      Analytics
                    </div>
                  </div>
                  <div class="w-full text-center px-8 pt-8 text-xl mt-auto">
                    $2.99
                    <span class="text-grey-light italic line-through">
                      $4.99
                    </span>
                  </div>
                  <div class="w-full text-center mb-8 mt-auto">
                    <button
                      className="color-2 hover:text-white font-[Poppins] py-1 px-4 rounded-lg border-2 text-xl border-green-600 md:ml-8  hover:bg-green-400  
    duration-500"
                    >
                      Buy now
                    </button>
                  </div>
                </div>
                <div class="flex-1 lg:flex-initial lg:w-1/4 text-white rounded-t-lg rounded-tl-none mt-4 flex flex-col">
                  <div class="p-8 text-3xl font-bold text-center">Sim</div>
                  <div class="border-0 border-grey-light border-t border-solid text-sm">
                    <div class="text-center border-0 border-grey-light border-b border-solid py-4">
                      Unlimited Ice Creams
                    </div>
                    <div class="text-center border-0 border-grey-light border-b border-solid py-4">
                      Unlimited Cones
                    </div>
                    <div class="text-center border-0 border-grey-light border-b border-solid py-4">
                      Unlimited toppings
                    </div>
                    <div class="text-center border-0 border-grey-light border-b border-solid py-4">
                      Analytics
                    </div>
                  </div>
                  <div class="text-center px-8 pt-8 text-xl mt-auto">
                    $5.99
                    <span class="text-grey-light italic line-through">
                      $9.99
                    </span>
                  </div>
                  <div class="text-center pt-8 mb-8 mt-auto">
                    <button
                      className="color-2 hover:text-white font-[Poppins] py-1 px-4 rounded-lg border-2 text-xl border-green-600 md:ml-8  hover:bg-green-400  
    duration-500"
                    >
                      Buy now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-3xl text-black text-center mt-6">
            Products News
          </h1>
          <p className="text-black text-center ">Lorem ipsum dolor sit amet</p>
        </div>
        {/* cards */}
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap -m-4">
              <div class="p-4 md:w-1/3">
                <div class="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-green-50 to-blue-50 overflow-hidden">
                  <img
                    class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                    src=""
                    alt="blog"
                  />
                  <div class="p-6">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      CATEGORY-1
                    </h2>
                    <h1 class="title-font text-lg font-medium text-gray-600 mb-3">
                      The Catalyzer
                    </h1>
                    <p class="leading-relaxed mb-3">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                    <div class="flex items-center flex-wrap ">
                      <button class="bg-gradient-to-r from-green-200 to-blue-400 hover:scale-105 drop-shadow-md cursor-pointer shadow-cla-blue px-4 py-1 rounded-lg">
                        Read more
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-4 md:w-1/3">
                <div class="h-full rounded-xl shadow-cla-violate bg-gradient-to-r from-pink-50 to-red-50 overflow-hidden">
                  <img
                    class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                    src=""
                    alt="blog"
                  />
                  <div class="p-6">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      CATEGORY-1
                    </h2>
                    <h1 class="title-font text-lg font-medium text-gray-600 mb-3">
                      The Catalyzer
                    </h1>
                    <p class="leading-relaxed mb-3">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                    <div class="flex items-center flex-wrap ">
                      <button class="bg-gradient-to-r from-orange-300 to-green-100 hover:scale-105 drop-shadow-md shadow-cla-violate px-4 py-1 rounded-lg">
                        Read more
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-4 md:w-1/3">
                <div class="h-full rounded-xl shadow-cla-pink bg-gradient-to-r from-yellow-50 to-pink-50 overflow-hidden">
                  <img
                    class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                    src=""
                    alt="blog"
                  />
                  <div class="p-6">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      CATEGORY-3
                    </h2>
                    <h1 class="title-font text-lg font-medium text-gray-600 mb-3">
                      The Catalyzer
                    </h1>
                    <p class="leading-relaxed mb-3">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                    <div class="flex items-center flex-wrap ">
                      <button class="bg-gradient-to-r from-blue-100 to-pink-100 hover:scale-105  shadow-cla-blue px-4 py-1 rounded-lg">
                        Read more
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </section>
      </div>
    </section>
  );
}
