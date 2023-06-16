import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';

export default function Payment() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const price = JSON.parse(localStorage.getItem("price")) || [];
  const products = JSON.parse(localStorage.getItem("products")) || [];
  const name = JSON.parse(localStorage.getItem("user")) || ["Bashar"];

  let listProduct = " ";
  products.products.map((e) => listProduct += e.title + " ,");
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8ec2oyw', 'template_u7utsah', e.target, '_2a7PeEdTMBVIsD39')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <>
      <div className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 pb-10 pt-16">
        <div
          className="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700"
          style={{ maxWidth: 600 }}
        >
          <div className="w-full pt-1 pb-5">
              <img className='rounded-full w-20 h-20 -mt-16 mx-auto' alt="Payment image"  />
          </div>
          <div className="mb-10">
            <h1 className="text-center font-bold text-xl uppercase">
              Secure payment info
            </h1>
          </div>
          <div className="mb-3 flex -mx-2">
            <div className="px-2">
              <label htmlFor="type1" className=" flex items-center cursor-pointer ">
                <input style={{
                  accentColor: "#0d9488",
                  mixBlendMode: "multiply"
                }} type="radio"
                  className="form-radio h-5 w-5 teal-600"
                  name="type"
                  id="type1"
                  defaultChecked=""
                />
                <img
                  src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
                  className="h-8 ml-3"
                />
              </label>
            </div>
            <div className="px-2">
              <label htmlFor="type2" className="flex items-center cursor-pointer teal-600">
                <input
                  style={{
                    accentColor: "#0d9488",
                    mixBlendMode: "multiply"
                  }}
                  type="radio"
                  className="form-radio h-5 w-5 text-teal-600"
                  name="type"
                  id="type2"
                />
                <img
                  src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png"
                  className="h-8 ml-3"
                />
              </label>
            </div>
          </div>
          <div className="mb-3">
            <label className="font-bold text-sm mb-2 ml-1">Name on card</label>
            <div>
              <input
                className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-teal-600 transition-colors"
                placeholder="John Smith"
                type="text"
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="font-bold text-sm mb-2 ml-1">Card number</label>
            <div>
              <input
                className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-teal-600 transition-colors"
                placeholder="0000 0000 0000 0000"
                type="text"
              />
            </div>
          </div>
          <div className="mb-3 -mx-2 flex items-end">
            <div className="px-2 w-1/2">
              <label className="font-bold text-sm mb-2 ml-1">Expiration date</label>
              <div>
                <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-teal-600 transition-colors cursor-pointer">
                  <option >01 - January</option>
                  <option >02 - February</option>
                  <option >03 - March</option>
                  <option >04 - April</option>
                  <option >05 - May</option>
                  <option >06 - June</option>
                  <option >07 - July</option>
                  <option >08 - August</option>
                  <option >09 - September</option>
                  <option >10 - October</option>
                  <option >11 - November</option>
                  <option>12 - December</option>
                </select>
              </div>
            </div>
            <div className="px-2 w-1/2">
              <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-teal-600 transition-colors cursor-pointer">
                <option >2023</option>
                <option >2024</option>
                <option >2025</option>
                <option >2026</option>
                <option >2027</option>
                <option >2028</option>
                <option >2029</option>
                <option >2030</option>
              </select>
            </div>
          </div>
          <div className="mb-10">
            <label className="font-bold text-sm mb-2 ml-1">Security code</label>
            <div>
              <input
                className="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-teal-600 transition-colors"
                placeholder={" "}
                type="text"

              />
            </div>

          </div>
          <div>  <h1 className='mb-5'> Total Price: ${price} </h1>
            <form onSubmit={sendEmail} class="">
              <div class="hidden">
                <label>Subject:</label>
                <input type="text" name="subject" value={price} />
                <label>Subject:</label>
                <input type="text" name="listprouct" value={listProduct} />
                <input type="text" name="name" value={name} />
              </div>

              <Link to="/Confirmation"><button type='submit' className="block w-full max-w-xs mx-auto bg-teal-600 hover:bg-teal-800 text-white rounded-lg px-3 py-3 font-semibold">
                PAY NOW
              </button>
              </Link>
            </form>
          </div>
        </div>
      </div>



    </>

  )
}

