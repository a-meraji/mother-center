"use client";

import React from "react";
import { useForm } from "react-hook-form";
import pb from "@/libs/pocketbase";
import { useRouter } from "next/navigation";
import Link from "next/link";
import useSignup from "@/hooks/useSignup";
import useLogin from "@/hooks/useLogin";
import { useDispatch } from "react-redux";
import { notifeColors, setNotife } from "@/redux/ducks/layoutSlice";
import {
  p2e,
  persianDateDigitall,
   persianDateNextTwoWeeks,
} from "@/libs/converters";

export default function Signup() {
  const { register, handleSubmit, reset, getValues } = useForm();
  const { signup } = useSignup();
  const { login } = useLogin();
  const dispatch = useDispatch();
  const router = useRouter();

  async function onSubmit(data) {
    const { phone, password, passwordConfirm, name, lastName, introducer } = data;
    if (password.length < 8) {
      dispatch(
        setNotife({
          message: "گذرواژه‌ باید حداقل ۸ کاراکتر داشته باشد!",
          color: notifeColors.error,
        })
      );
      return;
    }
    if (password !== passwordConfirm) {
      dispatch(
        setNotife({
          message: "گذرواژه‌ها یکسان نمیباشند",
          color: notifeColors.error,
        })
      );
      return;
    }

    const createdUser = await signup({
      email: `${parseInt(p2e(phone))}@mail.com`,
      password: p2e(password),
      passwordConfirm: p2e(passwordConfirm),
      name,
      lastName,
      phone: parseInt(p2e(phone)),
      role: "admin",
      subscribeDate: persianDateNextTwoWeeks(new Date()),
      introducer : parseInt(p2e(introducer))
    });
    if (createdUser?.id) {
      reset(); //to reset form
      const authData = await login({
        email: `${parseInt(p2e(phone))}@mail.com`,
        password: p2e(password),
      });
      if (authData?.record) {
        reset(); //to reset form
        const isLogedIn = pb.authStore.isValid;
        if (isLogedIn) {
          router.push("/dashboard");
        }
      }
    }
  }
  return (
    <div className="relative bg-[#439588c7] -m-5 mt-12 py-12 p-5 flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-primary rounded-md shadow-xl lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-accent1 uppercase">
          ایجاد حساب کاربری
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block mb-1 text-sm font-semibold text-primary"
            >
              نام
            </label>
            <input
              type="text"
              placeholder="اسم‌تان را وارد کنید"
              name="name"
              id="name"
              {...register("name")}
              className="block w-full px-4 py-2 mt-2 text-accent1 bg-primary border rounded-md focus:border-accent1sh1 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block mb-1 text-sm font-semibold text-primary"
            >
              نام خانوادگی
            </label>
            <input
              type="text"
              placeholder="فامیل‌تان را وارد کنید"
              name="lastName"
              id="lastName"
              {...register("lastName")}
              className="block w-full px-4 py-2 mt-2 text-accent1 bg-primary border rounded-md focus:border-accent1sh1 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block mb-1 text-sm font-semibold text-primary"
            >
              شماره همراه
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              {...register("phone")}
              className="block w-full px-4 py-2 mt-2 text-accent1 bg-primary border rounded-md focus:border-accent1sh1 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block mb-1 text-sm font-semibold text-primary"
            >
              گذرواژه
            </label>
            <input
              type="password"
              name="password"
              placeholder="******"
              id="password"
              {...register("password")}
              className="block w-full px-4 py-2 mt-2 text-accent1 bg-primary border rounded-md focus:border-accent1sh1 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block mb-1 text-sm font-semibold text-primary"
            >
              تکرار گذرواژه
            </label>
            <input
              type="password"
              name="passwordConfirm"
              placeholder="******"
              id="passwordConfirm"
              {...register("passwordConfirm")}
              className="block w-full px-4 py-2 mt-2 text-accent1 bg-primary border rounded-md focus:border-accent1sh1 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="introducer"
              className="block mb-1 text-sm font-semibold text-primary"
            >
              کد معرف
            </label>
            <input
              type="tel"
              name="introducer"
              id="introducer"
              {...register("introducer")}
              className="block w-full px-4 py-2 mt-2 text-accent1 bg-primary border rounded-md focus:border-accent1sh1 focus:outline-none"
            />
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 tracking-wide text-contPrimary transition-colors duration-200 transform bg-accent1 rounded-md hover:bg-accent1sh1 focus:outline-none focus:bg-accent1sh1"
            >
              ثبت نام
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-secondary">
          {" "}
          قبلا حساب ایجاد کرده‌اید؟{" "}
          <Link
            href="/auth/login"
            className="font-medium text-accent1 hover:underline"
          >
            وارد شوید
          </Link>
        </p>
      </div>
    </div>
  );
}
