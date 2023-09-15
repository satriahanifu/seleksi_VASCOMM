import React from "react";

function Table() {
  return (
    <div className="ml-[33px] mt-[34px]">
      <h3 className="ml-[30px] mt-[22px] font-[500] text-[16px]">produk terbaru</h3>
      {/* sajian tabel */}
      <table className="mt-[16px] w-[724px] h-[205px] ">
        <tr className="w-[724px] h-[40px] rounded-lg bg-[#41A0E4]">
          <th>Produk</th>
          <th>Tanggal dibuat</th>
          <th>Harga </th>
        </tr>
        <tr>
          <td>Michaelsoft Bimbows</td>
          <td>12 mei 2023</td>
          <td>Rp.satujuta</td>
        </tr>
        <tr>
          <td>Michaelsoft Bimbows</td>
          <td>12 mei 2023</td>
          <td>Rp.satujuta</td>
        </tr>
        <tr>
          <td>Michaelsoft Bimbows</td>
          <td>12 mei 2023</td>
          <td>Rp.satujuta</td>
        </tr>
      </table>
    </div>
  );
}

export default Table;
