import React from "react";

function Topbar() {
  return (
    <div className="w-[1159px] h-[40px] mt-[15px] flex justify-evenly">
      <div>
        <h3 className="font-[700] text[24px] text-[#FFFFFF]">Startup 3</h3>
      </div>
      <div className="flex">
        <ul>
          <li className="font-[500px] text-[18px] text-[#FFFFFF] mr-[33px]">Subscribe</li>
          <li className="font-[500px] text-[18px] text-[#FFFFFF] mr-[33px]">Features</li>
          <li className="w-[100px] h-[40px] rounded-[100px] bg-[#482BE7]">
            <button className="font-[500px] text-[18px] text-[#FFFFFF] ">Sign Up</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Topbar;
