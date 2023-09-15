import React from "react";

function ManajemenUser() {
  return (
    <div className="ml-[33px] mt-[24px] ">
      {/* manajemen user & tombol tambah user */}
      <div className="w-[1087px] h-[40px] flex justify-between">
        <h3 className="font-[400] text-[18px]">Manajemen User</h3>
        <button className="w-[160px] h-[40px] bg-[#41A0E4]">Tambah User</button>
      </div>
      {/* akihir manajemen user & tombol tambah user */}
      {/* tabel */}

      <div class="mt-[24px] relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">Our products</caption>
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                No
              </th>
              <th scope="col" class="px-6 py-3">
                Nama Lengkap
              </th>
              <th scope="col" class="px-6 py-3">
                Email
              </th>
              <th scope="col" class="px-6 py-3">
                No Telepon
              </th>
              <th scope="col" class="px-6 py-3">
                Status
              </th>
              <th scope="col" class="px-6 py-3">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                1
              </th>
              <td class="px-6 py-4">blackmamba</td>
              <td class="px-6 py-4">mambahitam@gmail.com</td>
              <td class="px-6 py-4">2999</td>
              <td class="px-6 py-4 text-right">
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                  Aktif
                </a>
              </td>
              <td>
                <button></button>
                <button></button>
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                1
              </th>
              <td class="px-6 py-4">blackmamba</td>
              <td class="px-6 py-4">mambahitam@gmail.com</td>
              <td class="px-6 py-4">2999</td>
              <td class="px-6 py-4 text-right">
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                  Aktif
                </a>
              </td>
              <td>
                <button></button>
                <button></button>
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                1
              </th>
              <td class="px-6 py-4">blackmamba</td>
              <td class="px-6 py-4">mambahitam@gmail.com</td>
              <td class="px-6 py-4">2999</td>
              <td class="px-6 py-4 text-right">
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                  Aktif
                </a>
              </td>
              <td>
                <button></button>
                <button></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* akhir table */}
    </div>
  );
}

export default ManajemenUser;
