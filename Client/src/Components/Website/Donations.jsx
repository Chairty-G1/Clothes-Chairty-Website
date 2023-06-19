import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import Loader from "../Website/Loader";
import heroBg from "../../Images/donate.jpg";
import boxImage from "../../Images/box.png";
import useFetch from "../../CustomHooks/UseFetch";
import NotFound from "./NotFound";

const Donations = () => {
  const navigate = useNavigate();

  const verifyToken = async (role) => {
    const token = localStorage.getItem("token") || "";

    try {
      const res = await axios.get("http://localhost:8000/Verify_token", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      if (res.data.role !== role) {
        navigate("*");
      }
    } catch (err) {
      console.log(err);
      navigate("*");
    }
  };

  useEffect(() => {
    verifyToken("charity");
    window.scrollTo(0, 0);
  }, []);

  const [selectedType, setSelectedType] = useState("");
  const [search, setSearch] = useState("");
  const [maxPieces, setMaxPieces] = useState("");
  const [minPieces, setMinPieces] = useState("");
  const { data, loading, error } = useFetch("http://localhost:8000/all_order");

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <NotFound />;
  }

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handlemaxPiecesChange = (event) => {
    setMaxPieces(Number(event.target.value));
  };
  const handleminPiecesChange = (event) => {
    setMinPieces(Number(event.target.value));
  };
  const filteredDonations = data?.filter((donation) => {
    if (selectedType && donation.type !== selectedType) {
      return false;
    }
    if (search && !donation.name.toLowerCase().includes(search.toLowerCase())) {
      return false;
    }
    if (maxPieces && donation.number_pieces > maxPieces) {
      return false;
    }
    if (minPieces && donation.number_pieces < minPieces) {
      return false;
    }
    return true;
  });

  return (
    <>
      {/* Header section */}
      <div
        className="relative"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundPosition: "50%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "16rem",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 overflow-hidden bg-gray-600 opacity-60"></div>
      </div>

      {/* Filter */}
      <section className="py-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="flex justify-center mb-4">
                <div className="relative w-1/2">
                  <input
                    className="rounded-lg border border-transparent shadow-md w-full py-2 px-4 bg-gray-200 focus:outline-teal-700 focus:shadow-outline"
                    type="text"
                    placeholder="بحث"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <span className="absolute top-1/2 right-2 transform -translate-y-1/2">
                    <i className="ri-search-line"></i>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="flex items-center gap-3 mb-5 flex-wrap justify-center flex-col sm:flex-row">
                <select
                  onChange={handleTypeChange}
                  value={selectedType}
                  className="select__group mb-3 sm:mb-0"
                >
                  <option value="">النوع</option>
                  {[
                    ...new Set(filteredDonations?.map((item) => item.type)),
                  ].map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                <div className="flex items-center">
                  <input
                    placeholder="أقل عدد قطع"
                    name="Max"
                    type="number"
                    min="0"
                    value={minPieces}
                    onChange={handleminPiecesChange}
                    className="shadow appearance-none border rounded w-40 py-2 px-3 text-teal-700 leading-tight focus:outline-teal-700 focus:shadow-outline"
                  />
                </div>
                <div className="flex items-center">
                  <input
                    placeholder="أكثر عدد قطع"
                    name="Min"
                    type="number"
                    min={minPieces}
                    value={maxPieces}
                    onChange={handlemaxPiecesChange}
                    className="shadow appearance-none border rounded w-40 py-2 px-3 text-teal-700 leading-tight focus:outline-teal-700 focus:shadow-outline"
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="flex items-center gap-3 mb-5 flex-wrap justify-center"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Donations list section */}
      <section className="container mx-auto my-4 p-10 md:p-10 transform duration-500">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredDonations?.map((item, index) => (
            <div
              key={index}
              className="border-2 border-teal-100 flex flex-wrap md:flex-nowrap shadow-lg mx-auto mt-4 w-full md:w-84 hover:scale-95 transition-transform duration-300"
            >
              <img className="w-40 h-40 p-4" src={boxImage} alt="" />
              <div className="p-10 my-auto text-right">
                <h1 className="text-2xl font-semibold text-gray-800">
                  {item.name}
                </h1>
                <p className="text-base text-gray-600 mt-2">
                  {item.description}
                </p>
                <p className="text-base text-gray-600 mt-2 mb-3">
                  {item.order_status}
                </p>
                <span>قطعة {item.number_pieces} </span>
                <Link
                  to={`/donations_details/${item._id}`}
                  className="mt-4 rounded-md bg-white border-2 border-teal-700 px-4 py-2.5 text-sm font-medium text-teal-700 hover:text-white transition hover:bg-teal-700 flex justify-center"
                >
                  عرض
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Donations;
