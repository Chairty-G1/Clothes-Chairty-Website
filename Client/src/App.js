import React, { createContext, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './Components/Website/Footer'
import Header from './Components/Website/Header'
import ContactUs from './Components/Website/ContactUs'
import SignIn from './Components/Users/SignIn'
import SignUp from './Components/Users/SignUp'
import Loader from './Components/Website/Loader';
import Donations from './Components/Website/Donations'
import DonationsDetails from './Components/Website/DonationsDetails';
import AboutUs from './Components/Website/AboutUs';
import Idea from './Components/Website/Idea';
import Profile from './Components/Website/Profile';
import CharityProfile from './Components/Website/CharityProfile';
import Admin from './Components/Website/Admin';
import Home from './Components/Website/Home';
import OurServices from './Components/Website/OurServices';
import NotFound from './Components/Website/NotFound';

import useFetch from './CustomHooks/UseFetch';


export const ProductsData = createContext();

function App() {

  const [isLog, setIsLog] = useState(false);
  const {data, loader, error} = useFetch('')

  return (
    <BrowserRouter>
        <Header isLog={isLog} updateIsLog={setIsLog}/>
        <Routes>
          <Route index element={ loader ? <Loader /> : <Home />} />
          <Route path="/signIn" element={<SignIn updateIsLog={setIsLog}/>} />
          <Route path="/signUp" element={<SignUp updateIsLog={setIsLog}/>} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/donations_details" element={<DonationsDetails />} />
          <Route path="/idea" element={<Idea />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/charityprofile" element={<CharityProfile />} />
          <Route path="/our_services" element={<OurServices />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
    </BrowserRouter> 
  );
}

export default App;


