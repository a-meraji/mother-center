"use client";
import pb from "@/libs/pocketbase";
import { search } from "@/libs/search";
import { addLoading, reduceLoading } from "@/redux/ducks/layoutSlice";
import React, { useState } from "react";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

export default function Salesman() {
  const { name, phone } = useSelector(
    (store) => store.user
  );
  const [clients, setClients] = useState([]);
  const [transactions, setTransaction] = useState([]);
  const [paychecks, setpaychecks] = useState([]);
  const [onlyRemain,setOnlyRemain] = useState(false)

  const dispatch = useDispatch();
  async function getClients() {
    try {
      dispatch(addLoading());
      const filter = `introducer = "${phone}"`;
      const { items } = await search({
        collectionName: "users",
        filter,
        dispatch,
      });
      
      const { items: transactionItems } = await search({
        collectionName: "transactions",
        filter,
        dispatch,
      });
      console.log(transactionItems, phone, items)
      const { items: paychecksItems } = await search({
        collectionName: "paychecks",
        filter: `phone = "${phone}"`,
        dispatch,
      });
      setClients(
        items.map((item) => {
          const { name, lastName, phone, subscribeDate } = item;
          return { name, lastName, phone, subscribeDate };
        })
      );
      setTransaction(
        transactionItems.map((item) => {
          const {
            name,
            lastName,
            phone,
            persianDate,
            cost,
            details,
            subscribeDate,
          } = item;
          return {
            name,
            lastName,
            phone,
            persianDate,
            cost,
            details,
            subscribeDate,
          };
        })
      );
      setpaychecks(
        paychecksItems.map((item) => {
          const { name, phone, persianDate, cost } = item;
          return {
            name,
            phone,
            persianDate,
            cost,
          };
        })
      );
      dispatch(reduceLoading());
    } catch (err) {
      console.log(err);
      dispatch(reduceLoading());
    }
  }

  useEffect(() => {
    console.log(process.env.NEXT_PUBLIC_WITHE_LIST, phone, "ASDASD")
    if(!phone)return
    const whites = "9033018426|9923385774|9300293418"
    if (
      !whites.split("|").find(
        (number) => number == phone
      )
    ) {
      location.href = "/auth/login";
    } else {
      getClients();
    }
  }, [phone]);

  return (
    <div className="mt-24 mb-[100vh] text-primary">
      <div className="flex items-center justify-between mb-10">
        <h6 className="text-3xl font-bold">سلام {name} عزیز</h6>
        <div>
          مانده قابل برداشت:{" "}
          {transactions.reduce((sum, curr) => {
            return (parseInt(curr.cost) * 40) / 100 + sum;
          }, 0) -
            paychecks.reduce((sum, curr) => {
              return parseInt(curr.cost) + sum;
            }, 0)}{" "}
          ﷼
        </div>
      </div>

      {clients.length === 0 ? (
        <div className="text-xl text-center font-bold">
          تا به حال هیچی نفروختی! :/
        </div>
      ) : (
        <>
          <h6 className="text-xl font-bold mb-6">لیست مشتریان</h6>
          <table className="w-full text-center">
            <thead>
              <tr className="py-1 rounded-t-lg text-sm bg-accent1sh1 text-contPrimary border-y-2  border-accent1sh1">
                <th>نام</th>
                <th>نام خانوادگی</th>
                <th>تاریخ اعتبار</th>
                <th>شماره همراه</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client, i) => (
                <tr
                  key={i}
                  className="bg-teal-50 even:bg-teal-100 border-b-teal-200 py-1"
                >
                  <td>{client.name}</td>
                  <td>{client.lastName}</td>
                  <td>{client.subscribeDate}</td>
                  <td>{client.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex items-center mt-16 mb-6 justify-between">
          <h6 className="text-xl font-bold">لیست تراکنش ها</h6>
          <button onClick={()=>setOnlyRemain(pre=>!pre)} className="rounded-md px-6 py-3 text-contPrimary bg-accent2 font-bold">{onlyRemain?"همه تراکنش‌ها":"فقط تراکنش‌های تسویه نشده"}</button>
          </div>
          <table className="w-full text-center">
            <thead>
              <tr className="py-1 rounded-t-lg text-sm bg-accent1sh1 text-contPrimary border-y-2  border-accent1sh1">
                <th>تاریخ تراکنش</th>
                <th>مبلغ تراکنش</th>
                <th>جزییات</th>
                <th>نام</th>
                <th>نام خانوادگی</th>
                <th>شماره همراه</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, i) => (
                <tr
                  key={i}
                  className={`bg-teal-50 even:bg-teal-100 border-b-teal-200 py-1 ${onlyRemain&&transaction.persianDate<=paychecks[paychecks.length-1].persianDate&&"hidden"}`}
                >
                  <td>{transaction.persianDate}</td>
                  <td>{parseInt(transaction.cost)*40/100}</td>
                  <td>{transaction.details}</td>
                  <td>{transaction.name}</td>
                  <td>{transaction.lastName}</td>
                  <td>{transaction.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h6 className="text-xl font-bold mt-16 mb-6">لیست برداشت از حساب</h6>
          <table className="w-full text-center">
            <thead>
              <tr className="py-1 rounded-t-lg text-sm bg-accent1sh1 text-contPrimary border-y-2  border-accent1sh1">
                <th>تاریخ برداشت</th>
                <th>مبلغ برداشت‌شده</th>
              </tr>
            </thead>
            <tbody>
              {paychecks.map((paycheck, i) => (
                <tr
                  key={i}
                  className="bg-teal-50 even:bg-teal-100 border-b-teal-200 py-1"
                >
                  <td>{paycheck.persianDate}</td>
                  <td>{paycheck.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}
