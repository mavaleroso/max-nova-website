"use client";

import Image from "next/image";
import mainBanner from "@/assets/images/banner_image.webp";
import mainBanner2 from "@/assets/images/banner_image2.webp";
import mainLogo from "@/assets/images/max-and-nova-logo-circle.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import church from "@/assets/images/church.png";
import reception from "@/assets/images/reception.png";

function Main({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("November 30, 2024 00:00:00").getTime();

    const updateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const timer = setInterval(updateTimeLeft, 1000);

    // Initial calculation to avoid 1 second delay
    updateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="md:container mx-auto libre-baskerville-regular">
      <section className="md:px-24">
        <Image src={mainBanner} alt="Banner Image Top" className="w-screen drop-shadow-2xl" priority />
      </section>
      <section className="text-center">
        <div>
          <Image
            src={mainLogo}
            alt="Main Logo"
            className="w-60 max-sm:w-32 mx-auto mb-20 max-sm:mb-10 drop-shadow-lg lg:mt-[-30px]"
            priority
          />
        </div>
        <h1
          className="leading-none my-[16px] max-sm:my-0 mx-auto drop-shadow-lg font-extrabold text-5xl max-sm:text-3xl"
          style={{ fontWeight: "lighter", letterSpacing: "2px", paddingBottom: "15px" }}
        >
          MAX & NOVA
        </h1>
        <p
          className="leading-normal uppercase"
          style={{ fontSize: "17px", fontWeight: "lighter", letterSpacing: "2px", paddingBottom: "15px" }}
        >
          November 30, 2024 • Butuan City, Agusan Del Norte, Philippines
        </p>
        <div className="grid grid-cols-4 max-sm:grid-cols-2 gap-2 items-center justify-center mx-auto mt-5 mb-10 text-amber-950 w-max">
          <div
            className="text-center bg-slate-400 h-20 w-20 flex items-center justify-center shadow-md rounded-lg text-lg font-bold max-sm:ml-auto"
            style={{ backgroundColor: "#fdf0d5" }}
          >
            <p>{`${timeLeft.days}`.padStart(2, "0")} D</p>
          </div>
          <div
            className="text-center bg-slate-400 h-20 w-20 flex items-center justify-center shadow-md rounded-lg text-lg font-bold max-sm:mr-auto"
            style={{ backgroundColor: "#fdf0d5" }}
          >
            {`${timeLeft.hours}`.padStart(2, "0")} H
          </div>
          <div
            className="text-center bg-slate-400 h-20 w-20 flex items-center justify-center shadow-md rounded-lg text-lg font-bold max-sm:ml-auto"
            style={{ backgroundColor: "#fdf0d5" }}
          >
            {`${timeLeft.minutes}`.padStart(2, "0")} M
          </div>
          <div
            className="text-center bg-slate-400 h-20 w-20 flex items-center justify-center shadow-md rounded-lg text-lg font-bold max-sm:mr-auto"
            style={{ backgroundColor: "#fdf0d5" }}
          >
            {`${timeLeft.seconds}`.padStart(2, "0")} S
          </div>
        </div>
      </section>
      <section>
        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-3 items-center">
          <div className="w-max mx-auto">
            <Image src={church} alt="Church" className="h-64 w-auto drop-shadow-2xl" priority />
            <p className="text-wrap w-max my-3 text-sm font-light text-center">
              <span className="font-bold">Saint Joseph Cathedral Diocesan Shrine</span> <br /> Ester Luna St., Butuan
              City 1:30 PM
            </p>
          </div>
          <div className="w-max mx-auto">
            <Image src={reception} alt="Reception" className="h-52 w-auto drop-shadow-2xl" priority />
            <p className="text-wrap w-max mb-3 mt-5 text-sm font-light text-center">
              <span className="font-bold">Almont Inland Resort</span>
              <br />
              J.C. Aquino Ave., Butuan City 4:00 PM
            </p>
          </div>
        </div>
      </section>
      <hr className="mb-10 w-[90%] block mx-auto" />
      <section>
        <div className="block mx-auto md:w-max mt-5">
          <ul
            className="flex flex-wrap gap-2 items-center justify-center leading-none"
            style={{ fontSize: "14px", letterSpacing: "2px" }}
          >
            <li className="m-1 h-10">
              <Link
                className={`p-4 hover:border hover:border-b-slate-900 ${
                  pathname.includes("home") && "border border-b-slate-950"
                }`}
                href="/home"
              >
                Home
              </Link>
            </li>
            <li className="m-1 h-10">
              <Link
                className={`p-4 hover:border hover:border-b-slate-900 ${
                  pathname.includes("entourage") && "border border-b-slate-950"
                }`}
                href="/entourage"
              >
                Entourage
              </Link>
            </li>
            <li className="m-1 h-10">
              <Link
                className={`p-4 hover:border hover:border-b-slate-900 ${
                  pathname.includes("details") && "border border-b-slate-950"
                }`}
                href="/details"
              >
                Details
              </Link>
            </li>
            <li className="m-1 h-10">
              <Link
                className={`p-4 hover:border hover:border-b-slate-900 ${
                  pathname.includes("gifts") && "border border-b-slate-950"
                }`}
                href="/gifts"
              >
                Gifts
              </Link>
            </li>
            <li className="m-1 h-10">
              <Link
                className={`p-4 hover:border hover:border-b-slate-900 ${
                  pathname.includes("gallary") && "border border-b-slate-950"
                }`}
                href="/gallary"
              >
                Gallery
              </Link>
            </li>
            <li className="m-1 h-10">
              <Link
                className={`p-4 hover:border hover:border-b-slate-900 ${
                  pathname.includes("faqs") && "border border-b-slate-950"
                }`}
                href="/faqs"
              >
                FAQS
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <section className="lg:px-28 my-12 max-sm:my-6">{children}</section>
      <section className="md:px-24 my-12">
        <Image
          src={mainBanner2}
          alt="Banner Bottom Image"
          className="w-screen block mx-auto drop-shadow-2xl"
          priority
        />
      </section>
    </div>
  );
}

export default Main;
