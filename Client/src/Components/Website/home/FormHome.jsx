import React, { useRef, useState } from 'react';
import axios from 'axios';

const FormHome = () => {
  const formRef = useRef(null);
  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name: event.target.elements['full-name'].value,
      email: event.target.elements.email.value,
      phone: event.target.elements.mobile.value,
      address: event.target.elements.address.value,
      order_status: event.target.elements.status.value,
      number_pieces: event.target.elements.numbers.value,
      description: event.target.elements.details.value,
      type: event.target.elements.type.value,
    };

    const formErrors = validateForm(formData);

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});

      try {
        await axios.post('http://localhost:8000/new_order', formData);
        console.log('Form data sent successfully');
        formRef.current.reset();
      } catch (error) {
        console.log('Error sending form data:', error);
      }
    }
  };

  const validateForm = (formData) => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = 'الإسم بالكامل مطلوب';
    }

    if (!formData.email.trim()) {
      errors.email = 'البريد الإلكتروني مطلوب';
    } else if (!isValidEmail(formData.email)) {
      errors.email = 'البريد الإلكتروني غير صحيح';
    }

    if (!formData.phone.trim()) {
      errors.phone = 'رقم الهاتف مطلوب';
    } else if (!isValidPhone(formData.phone)) {
      errors.phone = ' 07XXXXXXXX  رقم الهاتف يجب أن يتكون من 10 أرقام و يبدأ ';
    }

    if (!formData.address.trim()) {
      errors.address = 'العنوان مطلوب';
    } else if (formData.address.trim().length > 50) {
      errors.address = 'العنوان يجب أن يكون أقل من 50 حرفًا';
    }

    if (!formData.order_status.trim()) {
      errors.order_status = 'حالة التبرع مطلوبة';
    }else if (!formData.order_status || formData.order_status === 'حالة التبرع') {
      errors.order_status = 'رجاء اختار حالة التبرع';
    }
    if (!formData.type.trim()) {
      errors.type = 'نوع التبرع مطلوب';
    }else if (!formData.type || formData.type === 'نوع التبرع') {
      errors.type = 'رجاء اختار نوع التبرع';
    }

    if (!formData.number_pieces.trim()) {
      errors.number_pieces = 'عدد القطع مطلوب';
    } else if (!isValidNumber(formData.number_pieces)) {
      errors.number_pieces = 'عدد القطع يجب أن يكون رقمًا صحيحًا وبحد أقصى 100';
    }

    if (!formData.description) {
      errors.description = 'التفاصيل الإضافية مطلوبة';
    } else if (formData.description.length > 150) {
      errors.description = 'يجب أن لا تقل التفاصيل عن 150 حرف';
    }

    return errors;
  };
  const isValidDes = (email) => {
    return /^[^\s@]+@[^\s@]+\.(net|com)$/.test(email);
  };

  const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.(net|com)$/.test(email);
};

  const isValidPhone = (phone) => {
    const phoneRegex = /^07\d{8}$/;
    return phoneRegex.test(phone);
  };

  const isValidNumber = (number) => {
    return /^\d+$/.test(number) && number >= 0 && number <= 100;
  };

  return (
    <>
      <div className="block">
        <div className="border border-[#e6e6e6] rounded-2xl bg-[#e6e6e6] p-7 z-40">
          <h1 className="text-center text-[#059669] font-black text-2xl  mb-2">
            #وشاحك_واصل
          </h1>
          <form
            action="#"
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-1"
          >
            <div>
            {errors.name && (
                <p className="text-red-500 text-xs mt-1 text-right">{errors.name}</p>
              )}
              <input
                type="text"
                id="full-name"
                className={`bg-white border border-[#059669] text-gray-900 text-sm rounded-lg focus:ring-[#059669] focus:border-[#059669] block w-full p-2.5  placeholder-black  shadow-sm-light ${
                  errors.name ? 'border-red-500' : ''
                }`}
                placeholder="الإسم بالكامل"
                name="full-name"
                required
                style={{ direction: 'rtl' }}
              />
              
            </div>
            <div>
            {errors.email && (
                <p className="text-red-500 text-xs mt-1 text-right">{errors.email}</p>
              )}
              <input
                type="email"
                id="contact_subject"
                className={`block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-[#059669] shadow-sm focus:ring-[#059669] focus:border-[#059669]   placeholder-black  ${
                  errors.email ? 'border-red-500' : ''
                }`}
                placeholder="البريد الإلكتروني"
                name="email"
                required
                style={{ direction: 'rtl' }}
              />
              
            </div>
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1 text-right ">{errors.phone}</p>
            )}
            <input
              type="text"
              id="mobile"
              className={`block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-[#059669] shadow-sm focus:ring-[#059669] focus:border-[#059669]   placeholder-black  ${
                errors.phone ? 'border-red-500' : ''
              }`}
              placeholder="رقم الهاتف"
              name="mobile"
              required
              style={{ direction: 'rtl' }}
            />
            
            <div>
            {errors.address && (
                <p className="text-red-500 text-xs mt-1 text-right">{errors.address}</p>
              )}
              <input
                type="text"
                id="address"
                className={`block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-[#059669] shadow-sm focus:ring-[#059669] focus:border-[#059669]   placeholder-black  ${
                  errors.address ? 'border-red-500' : ''
                }`}
                placeholder="العنوان"
                name="address"
                required
                style={{ direction: 'rtl' }}
              />
              
            </div>
            <div>
            {errors.order_status && (
                <p className="text-red-500 text-xs mt-1 text-right">
                  {errors.order_status}
                </p>
              )}
              <select
                labelId="status"
                id="status"
                label="status"
                dir="rtl"
                className={`block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-[#059669] shadow-sm focus:ring-[#059669] focus:border-[#059669]   placeholder-black  ${
                  errors.order_status ? 'border-red-500' : ''
                }`}
              >
                <option>حالة التبرع</option>
                <option>جديد</option>
                <option>مستعمل بحالة جيدة</option>
                <option>مستعمل بحالة متوسطة</option>
              </select>
              
            </div>
            <div>
            {errors.type && (
                <p className="text-red-500 text-xs mt-1 text-right">{errors.type}</p>
              )}
              <select
                labelId="type"
                id="type"
                label="type"
                dir="rtl"
                className={`block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-[#059669] shadow-sm focus:ring-[#059669] focus:border-[#059669]   placeholder-black  ${
                  errors.type ? 'border-red-500' : ''
                }`}
              >
                <option>نوع التبرع</option>
                <option>رجالي</option>
                <option>نسائي</option>
                <option>أطفال</option>
                <option>منوع</option>
              </select>
              
            </div>

            <div>
            {errors.number_pieces && (
                <p className="text-red-500 text-xs mt-1 text-right">
                  {errors.number_pieces}
                </p>
              )}
              <input
                type="number"
                id="numbers"
                className={`block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-[#059669] shadow-sm focus:ring-[#059669] focus:border-[#059669]   placeholder-black  ${
                  errors.number_pieces ? 'border-red-500' : ''
                }`}
                placeholder="عدد القطع"
                name="numbers"
                required
                style={{ direction: 'rtl' }}
              />
              
            </div>
            <div className="sm:col-span-2">
            {errors.description && (
                <p className="text-red-500 text-xs mt-1 text-right">
                  {errors.description}
                </p>
              )}
              <textarea
                id="details"
                rows="6"
                className={`text-right block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-[#059669] focus:ring-[#059669] focus:border-[#059669]   placeholder-black  ${
                  errors.description ? 'border-red-500' : ''
                }`}
                placeholder="تفاصيل إضافية"
                name="details"
                style={{ direction: 'rtl' }}
              ></textarea>
              
            </div>
            <button
              type="submit"
              className="py-3 lg:w-full px-5 text-sm font-medium text-center text-white bg-[#388175] hover: rounded-lg hover:bg-[#0c1e1b] sm:w-fit  border-2 border-[#388175] focus:ring-4 focus:outline-none focus:ring-[#4f7a87]"
            >
              إنشاء طلب
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormHome;
