import React from "react";

function Login() {
  const handleSubmit = "";

  return (
    <div className="w-[1400px] h-[766px] flex">
      {/* sisi kiri */}
      <div className="w-[700px] h-[766px]  bg-gradient-to-r from-[#C2D6FF] to-[#ADC9FF]">
        <div className="mx-auto text-center mt-[279px]">
          <h1 className="font-[600] text-[48px]">NAMA APLIKASI</h1>
          <p className="mx-auto text-center w-[430px] h-[121px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
            type specimen book.
          </p>
        </div>
      </div>
      {/* sisi kanan */}
      <div className="w-[285px] h-[36px] mt-[181px] mx-auto">
        <h3 className="font-[500] text-[24px] text-[#3E3E3E]">Selamat Datang admin</h3>
        <p className="w-[367px] h-[36px] mt-[8px] font-[400] text-[12px] text-[#9B9B9B] text-left">Silahkan masukkan email atau nomor telepon dan password Anda untuk mulai menggunakan aplikasi</p>
        <form onSubmit={handleSubmit}>
          <div className="mt-[32px]">
            <label className="font-[400] text-[12px] text-[#757575]">Email / Nomor Telepon</label>
            <input type="text" className="w-[382px] h-[44px] border-[1px] border-[#676C73]" />
          </div>
          <div className="mt-[16px]">
            <label className="font-[400] text-[12px] text-[#757575]">password</label>
            <input type="text" className="w-[382px] h-[44px] border-[1px] border-[#676C73]" />
          </div>
          <input type="submit" className="w-[382px] h-[44px] mt-[32px] bg-[#41A0E4]" />
        </form>
      </div>
    </div>
  );
}

export default Login;
