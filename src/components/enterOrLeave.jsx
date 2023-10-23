"use client";
import pb from "@/libs/pocketbase";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function EnterOrLeave() {
    const [isLogedIn, setIsLogedIn] = useState(pb.authStore.isValid);
    useEffect(()=>{
      setIsLogedIn(pb.authStore.isValid)
    },[pb.authStore.isValid])
  return (
   <>
   {isLogedIn ? (
          <>
            {/* <div className="flex items-cemter">
              <div>سلام</div>
              <div className="mr-1">{pb.authStore.model.name}!</div>
            </div> */}
            <button
              className="bg-accent2 px-4 py-2 rounded-md text-contPrimary font-bold"
              onClick={() => {
                pb.authStore.clear();
                location.href="/auth/login";
              }}
            >
              خروج
            </button>
          </>
        ) : (
          <Link
            className="bg-accent1 px-4 py-2 rounded-md text-contPrimary font-bold"
            href={"auth/signup"}
          >
            ورود / ثبت نام
          </Link>
        )}
   </>
  )
}

export default EnterOrLeave