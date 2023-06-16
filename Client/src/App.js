import React, { createContext, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './Components/Website/Footer'
import Header from './Components/Website/Header'
import AboutUs from './Components/Website/AboutUs'
import ContactUs from './Components/Website/ContactUs'
import Confirmation from './Components/Website/Confirmation'
import SignIn from './Components/Users/SignIn'
import SignUp from './Components/Users/SignUp'
import Loader from './Components/Website/Loader';
import Payment from './Components/Website/Payment';

export const ProductsData = createContext();

function App() {
  const [isLog, setIsLog] = useState(false)

  return (
    <BrowserRouter>
        <Header isLog={isLog} updateIsLog={setIsLog}/>
        <Routes>
          <Route index element={ <Loader />} />
          <Route path="/signIn" element={<SignIn updateIsLog={setIsLog}/>} />
          <Route path="/signUp" element={<SignUp updateIsLog={setIsLog}/>} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
        <Footer />
    </BrowserRouter> 
  );
}

export default App;


