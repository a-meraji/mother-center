import pb from "@/libs/pocketbase";
import { notifeColors, setNotife } from "@/redux/ducks/layoutSlice";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const { phone, role } = useSelector(
    (store) => store.user
  );
  const dispatch = useDispatch();

  return (
    <header className="fixed bg-primary border-b-[1px]   z-10 top-0 left-0 right-0 py-4 text-secondary flex px-28 justify-between items-center text-sm">
      <div className="flex items-center gap-x-6 ">
          {phone===""?<Link
            className="bg-accent1 px-4 py-2 rounded-md text-contPrimary font-bold"
            href={"auth/signup"}
          >
            ورود / ثبت نام
          </Link>:<><button onClick={()=>{pb.authStore.clear();window.location.href="/"}} className="bg-accent2 px-4 py-2 rounded-md text-contPrimary font-bold">خروج</button></>}
        <Link href={"/dashboard"}>داشبورد</Link>
        <Link href={"/blogs"}>وبلاگ</Link>
        <div className="-ml-5 hidden lg:flex">
          <button className="group relative">
            <div>تماس</div>
            <div className="zabaneh bg-accent1  text-contPrimary fade-anim absolute bottom-0 left-1/2 z-10 hidden min-w-max translate-y-full -translate-x-1/2 gap-x-3 rounded-lg p-2 text-sm text-shade1 group-focus:flex">
              <div
                onMouseDown={() => {
                  window.open(`tel:+989033018426`);
                }}
              >
                تماس
              </div>
              <div
                onMouseDown={() => {
                  navigator.clipboard.writeText("+989033018426");
                  dispatch(
                    setNotife({
                      message: "شماره تماس کپی شد",
                      color: notifeColors.success,
                    })
                  );
                }}
                className="border-x-2 border-x-contPrimary px-1"
              >
                کپی
              </div>
              <div>09033018426</div>
            </div>
          </button>
        </div>
      </div>
      <div className="flex gap-x-4 items-center">
        <div className="w-[2.5rem] h-[2px] rotate-90 bg-gradient-to-l from-[#92ffc5] to-[#ffbd59] rounded-sm hidden lg:block"></div>
        <Link className="text-xl font-bold font-mono" href={"/"}>
          My Center
        </Link>
      </div>
    </header>
  );
}

export default Header;
