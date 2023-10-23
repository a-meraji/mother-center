import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";

function Suitables() {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="mt-[10vh] text-center lg:text-right aos-init aos-animate"
    >
      <h2 className="mt-4 text-xl font-black lg:text-3xl">
        مناسب برای گیم‌سنترها، گیم‌نت‌ها، کلوب‌های بازی و سالن‌های بیلیارد،
      </h2>

      {/* row 1 */}
      <div className="mt-[15vh] flex flex-col-reverse overflow-hidden lg:mt-[25vh] lg:flex-row lg:items-start lg:justify-center lg:gap-x-[9vw]">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="relative flex flex-col-reverse gap-x-5 lg:flex-row"
        >
          <div className="">
            <img className="rounded-md w-[35vw]" src={"/mainpage.png"} />
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="lg:w-[30vw] lg:min-w-[30vw]"
        >
          <h3 className="text-lg font-semibold lg:text-2xl">امکانات میز کار</h3>
          <p className="my-6 text-sm lg:text-base">
            تعریف سیستمها و ایستگاه های بازی
            <br />
            محاسبه ی زمان بازی شده و مبلغ کارکرد
            <br />
            ارائه صورت حساب
          </p>
          <Link
            href={"/"}
            className="flex items-center gap-x-2 text-sm font-semibold text-accent1 lg:text-base"
          >
            دانلود<BsArrowLeft className="h-7 w-7" />
          </Link>
        </div>
      </div>
      {/* row 2 */}
      <div className="mt-[15vh] flex flex-col-reverse overflow-hidden lg:mt-[25vh] lg:flex-row lg:items-start lg:justify-center lg:gap-x-[9vw]">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="lg:w-[30vw] lg:min-w-[30vw]"
        >
          <h3 className="text-lg font-semibold lg:text-2xl">مدیریت بوفه</h3>
          <p className="my-6 text-sm lg:text-base">
            ثبت موجودی اقلام بوفه و گزارشگیری لحظه‌ای از موجودی بوفه
            <br />
            مدیریت برداشت از بوفه و ثبت در آمار حسابداری مجموعه
            <br />
            ارائه صورت حساب در هنگام خرید و یا فروش از بوفه
          </p>
          <Link
            href={"/"}
            className="flex items-center gap-x-2 text-sm font-semibold text-accent1 lg:text-base"
          >
            دانلود<BsArrowLeft className="h-7 w-7" />
          </Link>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="relative flex flex-col-reverse gap-x-5 lg:flex-row"
        >
        <div className="">
            <img className="rounded-md w-[35vw]" src={"/foods.png"} />
        </div>
          </div>
      </div>
      {/* row 3 */}
      <div className="mt-[15vh] flex flex-col-reverse overflow-hidden lg:mt-[25vh] lg:flex-row lg:items-start lg:justify-center lg:gap-x-[9vw]">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="relative flex flex-col-reverse gap-x-5 lg:flex-row"
        >
          <div className="">
            <img className="rounded-md w-[35vw]" src={"/mainpage.png"} />
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="lg:w-[30vw] lg:min-w-[30vw]"
        >
          <h3 className="text-lg font-semibold lg:text-2xl">حسابداری و گزارش کارکرد</h3>
          <p className="my-6 text-sm lg:text-base">
            گزارشگیری کارکرد به صورت روزانه، ماهانه و سالانه
            <br />
            مدیریت سود و هزینه
            <br />
           آنالیز و مقایسه درامد و هزینه ها در سال
          </p>
          <Link
            href={"/"}
            className="flex items-center gap-x-2 text-sm font-semibold text-accent1 lg:text-base"
          >
            دانلود<BsArrowLeft className="h-7 w-7" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Suitables;
