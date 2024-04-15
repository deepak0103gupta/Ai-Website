import React from "react";
import painter from "../assets/painter.webp";

function Main() {
  return (
    <div className="flex flex-col">
      <div className=" flex justify-between items-center text-white h-screen">
        <div className="flex flex-col justify-center items-start gap-4">
          <h1 className="text-5xl font-semibold">
            Unleash your{" "}
            <span className="text-transparent  bg-clip-text bg-gradient-to-br  from-blue-500 via-purple-500 to-pink-500">
              Creativity
            </span>{" "}
            <br /> with the power of <br />
            <span className="text-transparent  bg-clip-text bg-gradient-to-br  from-blue-500 via-purple-500 to-pink-500">
              Leonardo Ai
            </span>
          </h1>

          <p className="text-lg font-semibold">
            Create production-quality visual assets for your projects with
            <br />
            unprecedented quality, speed, and style-consistency.
          </p>

          <button className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-600 text-white font-bold py-2 px-6 rounded-xl shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
            Create an account
          </button>
        </div>
        <div className=" w-1/4">
          <img className="w-full" src={painter} alt="painter" />
        </div>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-3 mt-20 gap-x-3  ">
        <div className="flex flex-col  gap-y-4  md:border-r">
          <h1 className="text-2xl font-bold text-transparent  bg-clip-text bg-gradient-to-br  from-blue-500 via-purple-500 to-pink-500">Cultivate Originality</h1>
          <p className="w-2/3 text-white">
            Your imagination, our technology. Generate distinctive art with
            pre-trained AI models or train your own.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-4  md:border-r">
          <h1 className=" text-2xl font-bold text-transparent  bg-clip-text bg-gradient-to-br  from-blue-500 via-purple-500 to-pink-500">Simplified Mastery</h1>
          <p className="w-2/3 text-white">
            Easy to grasp, rewarding to perfect. Be proficient in producing
            exquisite content quickly and efficiently.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-4">
          <h1 className="text-2xl font-bold text-transparent  bg-clip-text bg-gradient-to-br  from-blue-500 via-purple-500 to-pink-500">Turbocharge Innovation</h1>
          <p className="w-2/3 text-white">
            Fast-forward your ideation process. Conceptualise, iterate, and
            experiment at light speed.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
