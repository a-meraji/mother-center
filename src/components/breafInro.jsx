import React from "react";

function BreafInro() {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="mt-[10vh] text-center lg:text-right aos-init aos-animate"
    >
      <h2 className="text-md text-secondary font-black lg:text-xl">
        همه چیز تحت کنترل شما
      </h2>

      <h2 className="mt-4 text-xl font-black lg:text-3xl">
        همزمان مجموعه‌تان را مدیریت کنید و در اتمام روز/ماه گزارش کارکرد
        گیم‌سنترتان را دریافت کنید.
      </h2>
      <h6 className="mt-6 text-sm lg:text-base font-bold">
        با استفاده از نرم‌افزار مای‌سنتر:
      </h6>
      <ul className="mt-4 text-base lg:text-lg font-bold list-disc">
        <li>
          مشکل زمان‌بندی و محاسبه قیمت برای سیستم‌های مختلف با تعرفه قیمت‌های
          متفاوت را به راحتی حل کنید.
        </li>
        <li className="my-2">
          برای کارمندان خود حساب کاربری ایجاد کنید و از دخل و کارکرد آن‌ها گزارش
          بگیرید
        </li>
        <li className="my-2">
          آمار خرید و فروش بوفه مجموعه‌تان را همیشه به روز داشته باشید.
        </li>
        <li>از میزان دقیق دخل و خرجتان بی‌خبر نمانید .</li>
      </ul>
    </div>
  );
}

export default BreafInro;
