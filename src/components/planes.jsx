import { AiOutlineGift } from "react-icons/ai";
import React from "react";
import {FaGem} from "react-icons/fa"
import { IoGameController } from "react-icons/io5";
import { RiGameFill } from "react-icons/ri";

function Plans() {
  const pricePlan = [
    {
      moto: "",
      title: "اشتراک ماهیانه",
      desc: [""],
      price: "193",
      prefix: "هزارتومان",
      discount: 0,
      discountedPrice: "",
      actionBtn: "خرید اشتراک",
      url: `/pay`,
    },
    {
      moto: "",
      title: "اشتراک ۳ ماهه",
      desc: ["+۷ روز اشتراک هدیه"],
      price: "547",
      prefix: "هزارتومان",
      discount: 0,
      discountedPrice: "",
      actionBtn: "خرید اشتراک",
      url: "/pay",
    },
    {
      moto: "",
      title: "اشتراک نامحدود",
      desc: [""],

      price: "1,930",
      prefix: "میلیون تومان",
      discount: 0,
      discountedPrice: "",
      actionBtn: "خرید اشتراک",
      url: "/pay",
    },
  ];
  return (
    <div>
      
      <div className="grid grid-cols-3 items-stretch mt-16 justify-center gap-5 text-primary">
        {pricePlan.map((plan, index) => (
          <div
            id={`plan${index}`}
            data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
            data-aos-duration="1000"
            key={index}
            className={`rounded-xl bg-primary p-5 border-[1px] shadow-lg max-w-sm `}
          >
            <div
              className={`${index % 2 === 0 ? "text-accent2" : "text-accent1"}`}
            >
              <div className="my-3 text-center text-xs">   
                {plan.moto}
              </div>
              <h1 className={`text-center flex items-center justify-center gap-2 text-4xl font-black`}>
              {index === 0 && <RiGameFill/>}
              {index === 1 && <IoGameController />}
              {index === 2 && <FaGem />}
                {plan.title}
              </h1>
            </div>
            {plan.desc.map((d, j) => (
              <p key={j} className="my-5 text-center">
                {d}
              </p>
            ))}
            <div className="my-10 flex flex-col items-center justify-center">
              <p
                className={`${
                  plan.discount === 0
                    ? "text-3xl font-black"
                    : "text-sm line-through"
                } text-[#524e6f]`}
              >
                {plan.price}
                {plan.prefix}
              </p>
              <p className="text-3xl font-black text-[#3F3A64]">
                {plan.discountedPrice}
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <a
                id={index == 0 ? "cpSubmit3" : "buyPrimume"}
                href={plan.url}
                onClick={() => {
                  if (index === 1) {
                    setShowModal(true);
                  }
                }}
                className={`mx-auto rounded-lg px-4 py-2 text-contPrimary 
                    ${index % 2 === 0 ? "bg-[#ffb042]" : "bg-[#1f8686]"}`}
              >
                {plan.actionBtn}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plans;
