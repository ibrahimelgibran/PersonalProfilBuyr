import React from "react";

const Footer = () => {
  return (
    <div className="md:px-10 px-7 mt-24">
      <div className="text-white opacity-50 flex flex-col md:flex-row justify-between items-center my-5">
        <p>@ Copyright 2023 | BUYR</p>
        <p className="hidden sm:block">APLIKASI PEMBAYARAN</p>
        <p className="hidden sm:block">PILIH | PINDAI | BUYR</p>
        <p className="hidden sm:block">GA PAKAI NGANTRI</p>
        <p className="hidden sm:block"> Designed by @BUYR</p>
      </div>
    </div>
  );
};

export default Footer;
