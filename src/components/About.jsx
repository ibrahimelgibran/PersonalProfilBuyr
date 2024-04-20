import React from "react";
import Services from "./Services";
import web from "../assets/icons/web.png";
import android from "../assets/icons/android.png";
import uiux from "../assets/icons/uiux.png";
const About = () => {
  const skills = [
    { name: "WEB DEVELOPMENT", image: web },
    { name: "UI & UX DESIGNING", image: uiux },
    { name: "MOBILE DEVELOPMENT", image: android },
  ];
  return (
    <div className="md:px-10 px-7 sm:-mt-24" id="about">
      <h1 className="text-custom-blue font-semibold text-3xl mt-5">
        About me:
      </h1>
      <p className="my-3 text-white md:w-2/3 leading-[2]">
        Sebuah karya buatan anak bangsa yang lahir pada tahun 2019.
      </p>
      <p className="my-3 text-white md:w-2/3 leading-[2]">
        Kami mengklaim bahwa Buyr adalah satu satunya karya di Indonesia bahkan
        dunia yang menggunakan sistem pembayaran dari smartphone pribadi melalui
        scan langsung dengan produk yang memiliki QR Code.
      </p>
      <div className="md:flex my-7 items-center">
        <div className="text-custom-blue text-8xl font-bold">1+</div>
        <p className="text-white text-2xl md:ml-5">
          Years of experience, BUYR telah beroprasi berupa bentuk Website,
          Mobile bahkan Desainer untuk membantu pengguna baru.
        </p>
      </div>

      {/* skills */}
      <div className="flex flex-col md:flex-row ">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="md:w-[256px] md:h-[254px] bg-light hover:bg-blue-500 flex flex-col items-baseline justify-end md:m-3 my-3 p-5 shadow-sm skills transition-all duration-500"
          >
            <img src={skill.image} alt={skill.name} />
            <p className="mt-3 text-2xl text-white font-semibold">
              {skill.name}
            </p>
          </div>
        ))}
      </div>

      {/* services section */}
      <Services />
    </div>
  );
};

export default About;
