import React, { useState } from "react";
import { GoHome } from "react-icons/go";
import { LiaUserSolid } from "react-icons/lia";
import { PiNotebookBold } from "react-icons/pi";
import Table from "../components/Table";
import ManajemenUser from "../components/ManajemenUser";

function Admin() {
  const [mainboard, setMainBoard] = useState();

  return (
    <div className="bg-[#f8f8f8]">
      {/* topbar */}
      <div className="w-[1400px] h-[70px] mt-[20px] flex justify-between pl-[91px] pr-[35px] bg-[#FFFFFF]">
        {/* logo */}
        <img className="w-[110px] h-[45px]" alt="logo kompany" />
        {/* admin kanan*/}
        <div className="flex text-right">
          <div className="mt-[16px] mr-[16px]">
            {/* hello admin */}
            <h5 className="font-[400] text-[10px] text-[#41A0E4]">Hallo Admin</h5>
            <h3 className="font-[400] text-[14px] ">Aden S Putra</h3>
          </div>
          {/* gambar */}
          <img className="w-[40px] h-[40px] rounded-[100px] mt-[16px]" alt="logo company" />
        </div>
      </div>
      <div className="flex ">
        {/* sidebar */}
        <div>
          <div className="w-[245px] h-[696px] bg-[#FFFFFF] py-[10px]">
            <ul>
              <li className=" mt-[8px] flex font-[600] text-[14px] pl-[20px]">
                <GoHome className="h-[24px] mr-[12px]" />
                Dashboard
              </li>
              <li className=" mt-[8px] flex font-[600] text-[14px] pl-[20px]">
                <LiaUserSolid className="h-[24px] mr-[12px]" onClick={setMainBoard(<ManajemenUser />)} />
                Manajemen User
              </li>
              <li className="mt-[8px] flex font-[600] text-[14px] pl-[20px]">
                <PiNotebookBold className="h-[24px] mr-[12px]" />
                Manajemen produk
              </li>
            </ul>
          </div>
        </div>
        {/* mainboard */}
        <div>
          <h3 className="mt-[24px] ml-[33px]">Dashboard</h3>
          {/*list dashboard per item */}
          <div className="flex">
            <div className="ml-[33px] mt-[34px]">
              <div className="w-[259px] h-[117px] rounded-[16px] bg-gradient-to-r from-[#C2D6FF] to-[#ADC9FF] pt-[31px] pl-[28px]">
                <h5 className="font-[400] text-[14px] text-[#597393]">jumlah user</h5>
                <h5 className="font-[400] text-[16px]">150 user</h5>
              </div>
            </div>
            {/*list dashboard per item */}
            <div className="ml-[33px] mt-[34px]">
              <div className="w-[259px] h-[117px] rounded-[16px] bg-gradient-to-r from-[#C2D6FF] to-[#ADC9FF] pt-[31px] pl-[28px]">
                <h5 className="font-[400] text-[14px] text-[#597393]">jumlah user</h5>
                <h5 className="font-[400] text-[16px]">150 user</h5>
              </div>
            </div>
            {/*list dashboard per item */}
            <div className="ml-[33px] mt-[34px]">
              <div className="w-[259px] h-[117px] rounded-[16px] bg-gradient-to-r from-[#C2D6FF] to-[#ADC9FF] pt-[31px] pl-[28px]">
                <h5 className="font-[400] text-[14px] text-[#597393]">jumlah user</h5>
                <h5 className="font-[400] text-[16px]">150 user</h5>
              </div>
            </div>
            {/* endlist */}
          </div>
          {mainboard}
        </div>
      </div>
    </div>
  );
}

export default Admin;
