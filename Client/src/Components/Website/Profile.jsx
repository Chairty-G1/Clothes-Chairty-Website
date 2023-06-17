import React from 'react'
import { useState, useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import { HiOutlineTrash } from "react-icons/hi";
import axios from "axios";

function Profile() {
  const [choise, setChoise] = useState("الصفحة الشخصية");
  const [donorDetails, setDonorDetails] = useState([]);


  useEffect(() => {
    axios
      .get(`http://localhost:8000/donor`)
      .then((response) => {
        setDonorDetails(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <>
        {/* Menu */}
        <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-[#5aa1c2] rounded-lg sm:hidden hover:bg-black transition">
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
          </path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar">
        <div
          className="h-full px-3 py-4 overflow-y-auto  bg-[#0d9488]">
          {/* style={{ backgroundColor: "black" }} > */}
          <ul className="space-y-2 font-medium">
            <li>
              <span className="flex-1 ml-3 whitespace-nowrap text-white font-bold uppercase">
                الصفحة الشخصية
              </span>
            </li>
            <li className=" cursor-pointer">
              <a
                onClick={() => {
                  setChoise("الصفحة الشخصية");
                }}
                className="flex items-center p-2 text-white rounded-lg hover:bg-white hover:text-black transition">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd">
                  </path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">
                  صفحتي الشخصية
                </span>
              </a>
            </li>

            <li className=" cursor-pointer">
              <a
                onClick={() => {
                  setChoise("السجل");
                }}
                className="flex items-center p-2 text-white rounded-lg hover:bg-white hover:text-black transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-ui-checks"
                  viewBox="0 0 16 16">
                  <path d="M7 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zM2 1a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm0 8a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H2zm.854-3.646a.5.5 0 0 1-.708 0l-1-1a.5.5 0 1 1 .708-.708l.646.647 1.646-1.647a.5.5 0 1 1 .708.708l-2 2zm0 8a.5.5 0 0 1-.708 0l-1-1a.5.5 0 0 1 .708-.708l.646.647 1.646-1.647a.5.5 0 0 1 .708.708l-2 2zM7 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zm0-5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">السجل</span>
              </a>
            </li>

            {/* <li>
              <a
                onClick={() => {
                  setChoise("sitings");
                }}
                className="flex items-center p-2 text-white rounded-lg hover:bg-[#5aa1c2]"
              >
                <Icon path={mdiCog} size={1} />
                <span className="flex-1 ml-3 whitespace-nowrap">sitings</span>
              </a>
            </li> */}




            <li className=" cursor-pointer">
              <a
                smooth="true"
                className="flex items-center p-2 text-white rounded-lg hover:bg-white hover:text-black transition">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                    clipRule="evenodd">
                  </path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">تسجيل خروج</span>
              </a>
            </li>

          </ul>
        </div>
      </aside>























      <div className="p-4 m-5 sm:ml-64">
        <div className="p-4 bg-white rounded-lg">
          {choise === "الصفحة الشخصية" && (
            <>
              <h1 class="flex justify-center text-2xl md:text-3xl pl-2 my-10 text-black mt-10 font-bold">
                صفحتي الشخصية
              </h1>
              <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                  <table className="w-full table-auto text-sm text-right">
                    <thead className="bg-gray-50 text-black font-medium text-lg border-b">
                      <tr>
                        <th className="py-3 px-6"></th>
                        <th className="py-3 px-6">رقم الهاتف</th>
                        <th className="py-3 px-6">البريد الالكتروني</th>
                        <th className="py-3 px-6">الاسم</th>
                      </tr>
                    </thead>
                    {donorDetails.map((donorDetail) =>(
                    <tbody className="text-gray-600 divide-y">
                      <tr>
                        <td className="text-right px-6 whitespace-nowrap">
                          <a href="#" className="py-2 px-3 font-medium rounded-lg text-[#0d9488]">
                            <FiEdit className="w-6 h-6" />
                          </a>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">{donorDetail.phone}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{donorDetail.email}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{donorDetail.username}</td>
                      </tr>
                    </tbody>
                    ))}
                  </table>
                </div>
              </div>
            </>
          )}





































          {choise === "السجل" && (
            <>
              <h1 class="flex justify-center text-2xl md:text-3xl pl-2 my-10 text-black mt-10 font-bold">
                سجل التبرعات
              </h1>
              <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                  <table className="w-full table-auto text-sm text-right">
                    <thead className="bg-gray-50 text-black text-lg font-medium border-b">
                      <tr>
                        <th className="py-3 px-6"></th>
                        <th className="py-3 px-6">تفاصيل اضافية</th>
                        <th className="py-3 px-6">عدد القطع</th>
                        <th className="py-3 px-6">حالة التبرع</th>
                        <th className="py-3 px-6">العنوان</th>
                        <th className="py-3 px-6">رقم الهاتف</th>
                        <th className="py-3 px-6">البريد الالكتروني</th>
                        <th className="py-3 px-6">الاسم</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                      <tr>
                        <td className="text-right px-6 whitespace-nowrap">
                          <a href="" className="py-2 px-3 font-medium rounded-lg text-red-500 hover:text-red-700">
                            <HiOutlineTrash className="w-6 h-6" />
                          </a>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap"></td>
                        <td className="px-6 py-4 whitespace-nowrap"></td>
                        <td className="px-6 py-4 whitespace-nowrap"></td>
                        <td className="px-6 py-4 whitespace-nowrap"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}

        </div>
      </div>
    </>

  )
}

export default Profile;