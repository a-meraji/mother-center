"use client";

import React from "react";
import { useForm } from "react-hook-form";
import useLogin from "@/hooks/useLogin";
import pb from "@/libs/pocketbase";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { p2e } from "@/libs/converters";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/ducks/userSlice";
import { userFetched } from "@/redux/ducks/transactions";

export default function Login() {
  const { register, handleSubmit, reset, getValues } = useForm();
  const { login } = useLogin();

  const router = useRouter();
  const dispatch = useDispatch()

  async function onSubmit(data) {
    const authData = await login({
      email: `${parseInt(p2e(data.phone))}@mail.com`,
      password: p2e(data.password),
    });
    if (authData?.record) {
      reset(); //to reset form
      const isLogedIn = pb.authStore.isValid;
      if (isLogedIn) {
        const { id, name, phone, email, subscribeDate, unlimite, role } =
          pb.authStore.model;
        dispatch(setUser({ id, name, phone, email, subscribeDate, unlimite, role }));
        dispatch(userFetched({id}))
        router.push("/dashboard");
      }
    }
  }
  const [visible,setVisible] = useState(false)
  
  return (
    <div className="relative bg-[#f6ac45c5] -m-5 p-5 flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-primary text-primary rounded-md shadow-xl lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-accent2 uppercase">
          ورود به حساب کاربری
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block mb-1 text-sm font-semibold text-primary"
            >
              شماره همراه
            </label>
            <input
              type={"tel"}
              name="phone"
              id="phone"
              {...register("phone")}
              className="block w-full px-4 py-2 mt-2 text-accent1 bg-primary border-[1px] rounded-md focus:border-accent1sh1 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block mb-1 text-sm font-semibold text-primary"
            >
              گذرواژه
            </label>
            <div className="flex items-center border-[1px]  rounded-md ">
            <div className="relative">
            <input
              type={"checkbox"}
              className="opacity-0 cursor-pointer absolute top-0 bottom-0 left-0 right-0"
              onChange={(e) =>
                setVisible(e.target.checked)
              }
              />
              {visible?<AiOutlineEyeInvisible className="w-6 h-6 text-secondary"/>:<AiOutlineEye className="w-6 h-6 text-secondary"/>}
              </div>
            <input
              type={visible?"text":"password"}
              name="password"
              id="password"
              {...register("password")}
              className="block w-full px-4 py-2 mt-2 text-accent1 bg-primary focus:outline-none"
              />
              </div>
          </div>
          {/* <a href="#" className="text-xs text-accent1 hover:underline">
            رمزتان را فراموش کرده اید؟
          </a> */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full text-lg font-black px-4 py-2 tracking-wide text-contPrimary transition-colors duration-200 transform bg-accent2 rounded-md hover:bg-accent1sh1 focus:outline-none focus:bg-accent1sh1"
            >
              ورود
            </button>
          </div>
        </form>

        <p className="mt-8 text-sm font-black text-center text-secondary">
          {" "}
          حساب ندارید?{" "}
          <Link
            href="/auth/signup"
            className="text-accent2 hover:underline"
          >
            ثبت نام کنید
          </Link>
        </p>
      </div>
    </div>
  );
}
