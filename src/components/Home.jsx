import React from "react";
import img2 from "../assets/buyr.png";
import About from "../components/About";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className="md:px-10 px-7 my-14 md:h-screen bg-[#1a1a29]" id="home">
      <div>
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          {/* image & content */}
          {/* text */}
          <div className="text-white">
            <h6 className="text-3xl mt-12">Aplikasi Pembayaran</h6>
            <h1 className="font-semibold md:text-5xl my-4 text-3xl">BUYR</h1>
            <p className="md:w-96">
              Aplikasi Sederhana, Membantu Masyarakat Dalam Transaksi Tanpa
              Mengantri Saat Belanja.
            </p>
            <div className="mt-5">
              <Link to="">
                <button
                  className="btn transition-all duration-500 bg-custom-blue
               py-2 px-4 rounded text-white hover:bg-white hover:text-blue-500"
                >
                  About me
                </button>
              </Link>
              <button className="btn outline py-1.5 px-6 rounded border-none ml-5 text-white ">
                Prestasi
              </button>
            </div>
          </div>
          {/* img */}
          <div className="order-first md:order-last relative">
            <img src={img2} alt="logobuyr" />
          </div>
        </div>
      </div>
      <div className="h-24 bg-[#181824] w-full mx-auto absolute left-0 hidden md:block"></div>
    </div>
  );
};

export default Home;
