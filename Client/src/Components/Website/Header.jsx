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
                     <Link onClick={handleLogOut} to="/signIn" className='block rounded-md bg-teal-600 px-8 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700'>تسجيل الخروج</Link>
                     :
                     <Link to="/signIn" className='block rounded-md bg-teal-600 px-8 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700'>تسجيل الدخول</Link>
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
