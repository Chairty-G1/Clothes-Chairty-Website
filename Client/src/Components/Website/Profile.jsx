import React from 'react'
import { useState, useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import axios from "axios";

function Profile() {
  const [choise, setChoise] = useState("الصفحة الشخصية");
  const [user, setUser] = useState([]);
  const [edit, setEdit] = useState("hidden");

  async function verifyToken() {
    const token = localStorage.getItem("token") || false;
    if (token) {
      try {
        const res = await axios.get(`http://localhost:8000/Verify_token`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        return res;
      } catch (error) {
        console.log(error);
      }
    }
  }

  async function getUser(id, role) {
    try {
      const res = await axios.get(`http://localhost:8000/${role === "donor" ? "donor" : "charity"}/${id}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {

    const get = async () => {
      const userVerifyToken = await verifyToken();
      const user = await getUser(userVerifyToken.data.userId, userVerifyToken.data.role);
      setUser(user);
    }
    get();
  }, []);


  function handelEdit() {
    setEdit("flex")
  }

  function handelChange() {
    setChoise("السجل");
    setEdit("hidden");
  }

  function handelsubmit() {
    setEdit("hidden");
  }


  return (
    <>
      {/* Menu */}

      <div className='flex justify-center mt-10'>

        <button
          onClick={handelChange}
          className="flex items-center p-2 text-white rounded-md bg-teal-600 transition hover:bg-teal-700">
          <span className="flex-1 mr-3 whitespace-nowrap">السجل</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-ui-checks"
            viewBox="0 0 16 16">
            <path d="M7 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zM2 1a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm0 8a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H2zm.854-3.646a.5.5 0 0 1-.708 0l-1-1a.5.5 0 1 1 .708-.708l.646.647 1.646-1.647a.5.5 0 1 1 .708.708l-2 2zm0 8a.5.5 0 0 1-.708 0l-1-1a.5.5 0 0 1 .708-.708l.646.647 1.646-1.647a.5.5 0 0 1 .708.708l-2 2zM7 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zm0-5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
          </svg>
        </button>

        <button
          onClick={() => {
            setChoise("الصفحة الشخصية");
          }}
          className="flex items-center p-2 text-white rounded-md bg-teal-600 transition hover:bg-teal-700 ml-3">
          <span className="flex-1 mr-3 whitespace-nowrap">
            صفحتي الشخصية
          </span>
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
        </button>

      </div>


      <div className="p-4 m-5">
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
                    {user.map((info) => (
                      <tbody className="text-gray-600 divide-y">
                        <tr>
                          <td className="text-right px-6 whitespace-nowrap">
                            <FiEdit onClick={handelEdit} className="w-6 h-6 text-[#0d9488] cursor-pointer" />
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">{info.phone}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{info.email}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{info.username}</td>
                        </tr>
                      </tbody>
                    ))}
                  </table>
                </div>
              </div>

              <main className={`w-full mt-10 ${edit} flex-col items-center justify-center px-4`}>
                <h1 class="flex justify-center text-2xl md:text-3xl pl-2 mb-10 text-black mt-10 font-bold">
                  التعديلات
                </h1>
                <div className="max-w-sm w-full text-gray-600">
                  <form onSubmit={handelsubmit} className="mt-8 space-y-5" dir="rtl">
                    <div>
                      <label className="font-medium">الاسم الجديد</label>
                      <input
                        type="text"
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-teal-600 shadow-sm rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="font-medium">الرقم الجديد</label>
                      <input
                        type="text"
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-teal-600 shadow-sm rounded-lg"
                      />
                    </div>
                    <button className="w-full px-4 py-2 text-white font-medium rounded-md bg-teal-600 transition hover:bg-teal-700">
                      حفظ التعديلات
                    </button>
                  </form>
                </div>
              </main>

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