import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ScarfOfHope from '../../Images/ScarfOfHope.png'
import axios from "axios";

export default function Header({ isLog, updateIsLog }) {

   const [nav, setNav] = useState(false);
   const [userRole, setUserRole] = useState();

   async function verifyToken() {
      const token = localStorage.getItem("token") || false;

      if (token) {
         try {
            const res = await axios.get(`http://localhost:8000/Verify_token`, {
               headers: {
                  authorization: `Bearer ${token}`,
               },
            });

            setUserRole(res.data.role)
         } catch (error) {
            console.log(error);
         }
      }
   }

   useEffect(() => {
      verifyToken();
      window.scrollTo(0, 0);
   }, [isLog]);

   function handleLogOut() {
      localStorage.removeItem('token');
      updateIsLog(false)
      setUserRole('')
   }

   return (

      <header aria-label="Site Header" class="bg-white" id='Nav'>
         <div
            class="mx-auto flex h-24 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8"
         >
            <div class="sm:flex sm:gap-4">
               {
                  isLog ?
                     <>

                        <Link onClick={handleLogOut} to="/signIn" className='flex items-center rounded-md bg-teal-600 px-8 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700'>تسجيل الخروج</Link>
                        <Link
                           to="/profile"
                           className="rounded-md bg-teal-600 px-8 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700 flex items-center"
                        >
                           <span className="mr-1">الملف الشخصي</span>
                           <svg
                              viewBox="0 0 512 512"
                              width="30"
                              xmlns="http://www.w3.org/2000/svg"
                              className="fill-current text-gray-800"
                           >
                              <path
                                 d="M369.5 135.9c0 67.1-50.8 161.3-113.5 161.3S142.5 203 142.5 135.9 193.3 14.3 256 14.3s113.5 54.4 113.5 121.6z"
                                 fill="#e5e3e2"
                                 stroke="#2c3e50"
                                 stroke-linecap="round"
                                 stroke-linejoin="round"
                                 stroke-miterlimit="10"
                              ></path>
                              <path
                                 d="M193.2 188.5h125.5s-8.6 61.1-62.7 62c-54.2.8-62.8-62-62.8-62z"
                                 fill="#ffffff"
                                 stroke="#2c3e50"
                                 stroke-width="11"
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
                        </Link>
                     </>
                     :
                     <Link to="/signIn" className='rounded-md bg-teal-600 px-8 py-4 text-sm font-medium text-white transition hover:bg-teal-700 flex items-center'>تسجيل الدخول</Link>
               }
            </div>
            <div class="flex flex-1 items-center justify-end">

               <button onClick={() => setNav(!nav)} class="block ml-4 rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-teal-600 md:hidden">
                  <span class="sr-only">Toggle menu</span>
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     class="h-5 w-5"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                     stroke-width="2">
                     <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
               </button>

               <nav className={`md:hidden fixed top-[0px] rounded-md  w-60 border-teal-600	border-2	 bg-gray-100 z-40 duration-700 ${nav ? "right-[53px] top-[53px]" : "right-[-100vw]"
                  } `}>
                  <ul class="flex flex-col items-center" dir="rtl">
                     {
                        userRole === 'charity' &&
                        <li>
                           <Link to="/donations" className='text-gray-500 font-bold transition hover:text-teal-600'>التبرعات</Link>
                        </li>
                     }
                     <li>
                        <Link to="/aboutUs" className='text-gray-500 font-bold transition hover:text-teal-600'>عنا</Link>
                     </li>
                     <li>
                        <Link to="/contactUs" className='text-gray-500 font-bold transition  hover:text-teal-600'>تواصل معنا</Link>
                     </li>

                     <li>
                        <Link to="/idea" className='text-gray-500 font-bold transition  hover:text-teal-600'>الفكرة</Link>
                     </li>

                     <li>
                        <Link to="/our_services" className='text-gray-500 font-bold transition  hover:text-teal-600'>خدماتنا</Link>
                     </li>
                     <li>
                        <Link to="/" className='text-gray-500 font-bold transition hover:text-teal-600'>الرئيسية</Link>
                     </li>
                  </ul>
               </nav>

               <nav aria-label="Site Nav" class="hidden md:block">
                  <ul class="flex items-center gap-6 text-sm ">
                     {
                        userRole === 'charity' &&
                        <li>
                           <Link to="/donations" className='text-gray-500 font-bold transition hover:text-teal-600'>التبرعات</Link>
                        </li>
                     }
                     <li>
                        <Link to="/aboutUs" className='text-gray-500 font-bold transition hover:text-teal-600'>عنا</Link>
                     </li>
                     <li>
                        <Link to="/contactUs" className='text-gray-500 font-bold transition  hover:text-teal-600'>تواصل معنا</Link>
                     </li>

                     <li>
                        <Link to="/idea" className='text-gray-500 font-bold transition  hover:text-teal-600'>الفكرة</Link>
                     </li>

                     <li>
                        <Link to="/our_services" className='text-gray-500 font-bold transition  hover:text-teal-600'>خدماتنا</Link>
                     </li>
                     <li>
                        <Link to="/" className='text-gray-500 font-bold transition hover:text-teal-600'>الرئيسية</Link>
                     </li>
                  </ul>
               </nav>
            </div>

            <div class="flex items-center gap-4">

               <Link to="/" className='block text-teal-600'>
                  <a class="block text-teal-600" href="/">
                     <span class="sr-only">Home</span>
                     <div class="flex-shrink-0 justify-center">
                        <img src={ScarfOfHope} alt="Workflow logo" width={150} />
                     </div>
                  </a>
               </Link>

            </div>
         </div>
      </header>
   )
}
