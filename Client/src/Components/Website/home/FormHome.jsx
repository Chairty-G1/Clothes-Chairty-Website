import React from "react";

const FormHome = () => {
  return (
    <>
    <div className="block">
      <div className="border border-[#e6e6e6] rounded-2xl bg-[#e6e6e6] p-7 z-40">
        <h1 className="text-center text-[#059669] font-black text-2xl  mb-2">
        #وشاحك_واصل
        </h1>
        <form action="#" className="space-y-1">
          <div>
            <input
              type="text"
              id="full-name"
              className=" bg-white border border-[#059669] text-gray-900 text-sm rounded-lg focus:ring-[#059669] focus:border-[#059669] block w-full p-2.5  placeholder-black  shadow-sm-light"
              placeholder="الإسم بالكامل"
              name="full-name"
              required
              style={{direction: 'rtl' }}
            />
          </div>
          <div>
            <input
              type="email"
              id="contact_subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-[#059669] shadow-sm focus:ring-[#059669] focus:border-[#059669]   placeholder-black  "
              placeholder="البريد الإلكتروني"
              name="email"
              required
              style={{direction: 'rtl' }}
            />

          </div>
          <input
            type="text"
            id="mobile"
            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-[#059669] shadow-sm focus:ring-[#059669] focus:border-[#059669]   placeholder-black  "
            placeholder="رقم الهاتف"
            name="mobile"
            required
            style={{direction: 'rtl' }}
          />
          <div>
            <input
              type="text"
              id="address"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-[#059669] shadow-sm focus:ring-[#059669] focus:border-[#059669]   placeholder-black  "
              placeholder="العنوان"
              name="address"
              required
              style={{direction: 'rtl' }}
            />
          </div>
          <div>
            <select
              labelId="status"
              id="status"
              label="status"
              dir="rtl"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-[#059669] shadow-sm focus:ring-[#059669] focus:border-[#059669]   placeholder-black  "
            >
              <option>حالة التبرع</option>
              <option>جديد</option>
              <option>مستعمل بحالة جيدة</option>
              <option>مستعمل بحالة متوسطة</option>
              
            </select>
          </div>

          <div>
            <input
              type="number"
              id="numbers"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-[#059669] shadow-sm focus:ring-[#059669] focus:border-[#059669]   placeholder-black  "
              placeholder="عدد القطع"
              name="numbers"
              required
              style={{direction: 'rtl' }}
            />
          </div>
          <div className="sm:col-span-2">
            <textarea
              id="details"
              rows="6"
              className=" text-right block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-[#059669] focus:ring-[#059669] focus:border-[#059669]   placeholder-black "
              placeholder="تفاصيل إضافية"
              name="details"
              style={{direction: 'rtl' }}
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 lg:w-full px-5 text-sm font-medium text-center text-white bg-[#388175] hover: rounded-lg hover:bg-[#0c1e1b] sm:w-fit  border-2 border-[#388175] focus:ring-4 focus:outline-none focus:ring-[#4f7a87]"
          >
            إنشاء طلب
          </button>
        </form>
      </div></div>
    </>
  );
};

export default FormHome;
