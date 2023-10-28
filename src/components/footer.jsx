import Link from "next/link";
import React from "react";
import { AiTwotoneHeart } from "react-icons/ai";
import { BsFillTelephoneFill, BsInstagram, BsTelegram } from "react-icons/bs";

function Footer() {
  return (
    <>
      <div className="flex min-h-[14rem] justify-between">
      <a referrerpolicy='origin' target='_blank' href='https://trustseal.enamad.ir/?id=410565&Code=rIdf9WaFWCSPq6HQgBqwbI72plWvgsu9'><img referrerpolicy='origin' src='https://trustseal.enamad.ir/logo.aspx?id=410565&Code=rIdf9WaFWCSPq6HQgBqwbI72plWvgsu9' alt='' style={{'cursor':'pointer'}} Code='rIdf9WaFWCSPq6HQgBqwbI72plWvgsu9'/></a>
      </div>
      <footer className="flex w-full lg:text-base text-[12px] justify-between bg-accent1 text-contPrimary p-2">
        <div className="flex items-center gap-4">
          <Link href="/">tel:0930-890-3361</Link>
          <Link href="/">
            <BsInstagram className="w-5 h-5" />
          </Link>
          <Link href="/">
            <BsTelegram className="w-5 h-5" />
          </Link>
        </div>
        <div>Copyright 2023 - {new Date().getFullYear()}</div>
        <div dir="ltr">
          <div>Designed & programmed by Amin Meraji</div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
