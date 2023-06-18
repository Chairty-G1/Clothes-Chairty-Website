import React from 'react'
import { useState, useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import axios from "axios";
import { Link } from 'react-router-dom';
import Loader from './Loader';

function Profile() {
  const [choise, setChoise] = useState("الصفحة الشخصية");
  const [user, setUser] = useState([]);
  const [username, setUsername] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();
  const [edit, setEdit] = useState("hidden");
  const [massage, setMassage] = useState();
  const [userLog, setUserLog] = useState();

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

  const getUserLog = async (email, role) => {
    try {
      const res = await axios.post(`http://localhost:8000/${role === "donor" ? "donor_movement_by_email" : "charity_movement_by_email"}`, { email: email });
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }

  const startGetUserData = async () => {
    const userVerifyToken = await verifyToken();
    const user = await getUser(userVerifyToken.data.userId, userVerifyToken.data.role);
    const Log = await getUserLog(userVerifyToken.data.email, userVerifyToken.data.role)
    setUserLog(Log);
    setUser(user);
    console.log(Log)
  }



  useEffect(() => {
    startGetUserData();
  }, []);

  function handelEdit() {
    setEdit("flex")
  }

  function handelChange() {
    setChoise("السجل");
    setEdit("hidden");
  }

  async function handelsubmit(event) {
    event.preventDefault();

    console.log({ ...user[0], username: username, phone: phone, password: password })

    try {
      const res = await axios.put(`http://localhost:8000/${user[0].role === "donor" ? "donor" : "charity"}/${user[0]._id}`, { ...user[0], username: username, phone: phone, password: password });
      setUser(res.data);
      event.target.reset();
      setEdit("hidden");
      startGetUserData();
    } catch (error) {
      console.log(error);
      setMassage('كلمة المرور غير صالحة')
    }
  }

  if (!userLog || !user[0]) {
    return <Loader />
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
            viewBox="0 0 512 512"
            width="30"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-current text-gray-800"
          >
            <path
              d="M369.5 135.9c0 67.1-50.8 161.3-113.5 161.3S142.5 203 142.5 135.9 193.3 14.3 256 14.3s113.5 54.4 113.5 121.6z"
              fill="#fff"
              stroke="#2c3e50"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M464.1 365.8c-19-18-131.7-51.2-131.7-51.2l-76.3 85.3h0l-76.3-85.3S67.1 347.8 48.1 365.8c-29.3 27.7-31.6 132-31.6 132h479.2c-.1-.1-2.3-104.3-31.6-132z"
              fill="#0d9488"
              stroke="#fff"
              stroke-width="20"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
            ></path>
          </svg>
        </button>
      </div>

      <div className="p-4 m-5">
        <div className="p-4 bg-white rounded-lg">
          {choise === "الصفحة الشخصية" && (
            <>
              <h1 className="flex justify-center text-2xl md:text-3xl pl-2 my-10 text-black mt-10 font-bold">
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

                    <tbody className="text-gray-600 divide-y">
                      <tr>
                        <td className="text-right px-6 whitespace-nowrap">
                          <FiEdit onClick={handelEdit} className="w-6 h-6 text-[#0d9488] cursor-pointer" />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">{user[0]?.phone}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{user[0]?.email}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{user[0]?.username}</td>
                      </tr>
                    </tbody>

                  </table>
                </div>
              </div>
              <main className={`w-full mt-10 ${edit} flex-col items-center justify-center px-4`}>

                <button type="button" onClick={() => setEdit("hidden")} className="bg-teal-600 rounded-md p-2 inline-flex items-center justify-center text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-inset">
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <h1 className="flex justify-center text-2xl md:text-3xl pl-2 mb-10 text-black mt-10 font-bold">
                  تعديل البيانات
                </h1>
                <div className="max-w-sm w-full text-gray-600">
                  <form onSubmit={handelsubmit} className="mt-8 space-y-5" dir="rtl">
                    <div>
                      <label className="font-medium">الاسم الجديد</label>
                      <input
                        type="text"
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-teal-600 shadow-sm rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="font-medium">الرقم الجديد</label>
                      <input
                        type="text"
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-teal-600 shadow-sm rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="font-medium">كلمة المرور</label>
                      <input
                        type="text"
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-teal-600 shadow-sm rounded-lg"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full px-4 py-2 text-white font-medium rounded-md bg-teal-600 transition hover:bg-teal-700"
                    >
                      حفظ التعديلات
                    </button>
                    <p className={`mt-2 text-sm text-red-600 dark:text-red-500`}><span className="font-medium">{massage}</span></p>
                  </form>
                </div>
              </main>
            </>

          )}

          {choise === "السجل" && (
            <>
              <h1 className="flex justify-center text-2xl md:text-3xl pl-2 my-10 text-black mt-10 font-bold">
                سجل التبرعات
              </h1>
              <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                  <table className="w-full table-auto text-sm text-right">
                    <thead className="bg-gray-50 text-black text-lg font-medium border-b">
                      <tr>
                        <th className="py-3 px-6">حالة التبرع</th>
                        <th className="py-3 px-6">التاريخ</th>
                        <th className="py-3 px-6">الجهة التي تلقت الطلب</th>
                        <th className="py-3 px-6">رقم المعرف للطلب</th>
                        <th className="py-3 px-6">عرض الطلب</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                      {userLog.map((movement) => {
                        return (
                          <>
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className={`bg-${movement.status ? 'green' : 'red'}-100 text-${movement.status ? 'green' : 'red'}-800 text-lg font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-${movement.status ? 'green' : 'red'}-400 border border-${movement.status ? 'green' : 'red'}-400`}>{movement.status ? 'مسلم' : "غير مسلم"}</span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">{movement.date}</td>
                              <td className="px-6 py-4 whitespace-nowrap">{movement.destination === '' ? 'لا يوجد' : movement.destination} </td>
                              <td className="px-6 py-4 whitespace-nowrap">{movement.order_id}</td>
                              <td className="px-6 py-4 whitespace-nowrap">

                                <Link to={`/donations_details/${movement.order_id}`} className="flex items-center p-3 text-white rounded-md bg-teal-600 transition hover:bg-teal-700">
                                  <span className="flex-1 mr-5 whitespace-nowrap ">عرض</span>
                                  <svg viewBox="0 0 576 512" fill='currentColor' width={20} xmlns="http://www.w3.org/2000/svg"><path d="M572.6 270.3l-96 192C471.2 473.2 460.1 480 447.1 480H64c-35.35 0-64-28.66-64-64V96c0-35.34 28.65-64 64-64h117.5c16.97 0 33.25 6.742 45.26 18.75L275.9 96H416c35.35 0 64 28.66 64 64v32h-48V160c0-8.824-7.178-16-16-16H256L192.8 84.69C189.8 81.66 185.8 80 181.5 80H64C55.18 80 48 87.18 48 96v288l71.16-142.3C124.6 230.8 135.7 224 147.8 224h396.2C567.7 224 583.2 249 572.6 270.3z" /></svg>
                                </Link>
                              </td>
                            </tr>
                          </>
                        )
                      })}
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