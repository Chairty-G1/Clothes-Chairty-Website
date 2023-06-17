import React from "react";
import SS1 from "../../../Images/SS1.png";
import SS2 from "../../../Images/SS2.png";
import SS3 from "../../../Images/SS3.png";
import SS4 from "../../../Images/SS4.png";

const StatisticsHome = () => {
  return (
    <>
      <div className="bg-Statistics">
        <div className="mx-auto max-w-screen-xl">
          <h2 className="text-white text-3xl text-center font-bold my-5 py-9">
            احصائيات وأرقــــام
          </h2>
          <div className="grid max-[900px]:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center pb-10">
            <div className="services-card">
              <div className="img-card">
                <img src={SS1} alt="S1" />
              </div>
              <p className=" text-center text-6xl font-bold text-white">10 </p>
              <p className=" text-center text-white mt-3"> طرود من الملابس</p>
            </div>
            <div className="services-card">
              <div className="img-card">
                <img src={SS2} alt="S1" />
              </div>
              <p className=" text-center text-6xl font-bold text-white">500 </p>
              <p className=" text-center text-white mt-3">متبرع</p>
            </div>
            <div className="services-card">
              <div className="img-card">
                <img src={SS3} alt="S1" />
              </div>
              <p className=" text-center text-6xl font-bold text-white">99 </p>
              <p className=" text-center text-white mt-3">مستفيد</p>
            </div>
            <div className="services-card">
              <div className="img-card">
                <img src={SS4} alt="S1" />
              </div>
              <p className=" text-center text-6xl font-bold text-white">12 </p>
              <p className=" text-center text-white mt-3">عدد المحافظات المتواجدين بها   </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatisticsHome;
