"use client";
import Plans from "@/components/planes";
import Transactions from "@/components/transactions";
import pb from "@/libs/pocketbase";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function Page() {
  const { name, phone, email, subscribeDate, unlimite, role } = useSelector(
    (store) => store.user
  );
  useEffect(() => {
    if (phone !== "") return;
    if (!pb.authStore.isValid) window.location.href = "/auth/login";
  }, []);

  return (
    <div className="my-24 text-primary">
      <h6 className="text-2xl font-black">سلام {name} عزیز!</h6>
      <div className="flex mt-5 items-center border-2 border-accent2 w-fit rounded-md">
        <div className="bg-[#ff882dab] text-lg font-bold py-2 px-4">
          تاریخ اعتبار اشتراک حساب:
        </div>
        <div className="bg-[#ff882d48] text-lg font-bold py-2 px-4">
          {subscribeDate.toString()?.slice(0, 4)}/
          {subscribeDate.toString()?.slice(4, 6)}/
          {subscribeDate.toString()?.slice(6, 8)}
        </div>
      </div>
      <h6 className="text-xl font-black mt-16 mb-4  text-secondary flex items-center gap-4">
        گزارش خرید‌ها
      </h6>
      <Transactions />
      <Plans />
    </div>
  );
}

export default Page;
