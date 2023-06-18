import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import heroBg from "../../Images/donation7.webp";
import Loader from "../Website/Loader";
import useFetch from "../../CustomHooks/UseFetch";

const DonationsDetails = ({ }) => {
  const { donationId } = useParams();
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState();

  const { data, loading, error } = useFetch(
    `http://localhost:8000/one_order_by_Id/${donationId}`
  );

  async function getUser(id) {
    try {
      const res = await axios.get(`http://localhost:8000/charity/${id}`);

      return res.data;
    } catch (error) {
      console.log(error);
    }
  }

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
        return res.data;
      } catch (error) {
        console.log(error);
      }
    }
  }

  useEffect(() => {
    verifyToken();
    window.scrollTo(0, 0);
  }, []);

  const handleConfirmOrder = async () => {
    const userVerifyToken = await verifyToken();

    const user = await getUser(userVerifyToken.userId);

    const firstUser = user[0];
    try {
      const response = await axios.post(
        "http://localhost:8000/charity_movement",
        {
          email: firstUser.email, // Use the email property from the firstUser object
          destination: firstUser.username,
          order_id: donationId,
          donor_id: user.charity_id,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        navigate("/success");
      } else {
        console.log("Error confirming order");
      }
    } catch (error) {
      console.log("Error confirming order:", error);
    }
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Donation not found</div>;
  }

  if (!data) {
    return <div>Loading data...</div>;
  }

  const donation = data.find((item) => item._id === donationId);

  if (!donation) {
    return <div>Donation not found</div>;
  }

  return (
    <>
      <section className="flex flex-col items-center md:flex-row py-2 m-12 border-2 border-teal-500 px-16 shadow-xl rounded-xl">
        <div className="flex flex-col justify-center w-full md:w-1/2">
          <img
            className="w-92 h-96 rounded-2xl mx-auto md:ml-32 m-4"
            src={heroBg}
            alt="Image"
          />
        </div>
        <div className="flex flex-col justify-center w-full md:w-1/2 border-r-4 border-teal-500 md:mr-20 p-4">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4 text-right">
            {donation.description}
          </h1>
          <p className="text-base mb-4 text-right">{donation.order_status}</p>
          <p className="text-base text-right">{donation.number_pieces} قطعة</p>
          <p className="text-base text-right">{donation.address}</p>

          {userRole === 'charity' &&
            <button
              onClick={handleConfirmOrder}
              className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 mt-4 mr-2 rounded w-1/2 ml-auto"
            >
              تأكيد الطلب
            </button>
          }
        </div>
      </section>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0d9488"
          fillOpacity="1"
          d="M0,192L1440,160L1440,320L0,320Z"
        ></path>
      </svg>
    </>
  );
};

export default DonationsDetails;
