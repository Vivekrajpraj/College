import React from "react";
import Button from "../Layouts/Button";


const Home = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('assets/img/cover.jpg')] bg-no-repeat bg-cover opacity-95">
      <div className=" w-full lg:w-4/5 space-y-5 mt-10">
        <h1 className="text-5xl text-blue-500 font-bold leading-tight">
          Empowering Health Choices for a Vibrant Life...
        </h1>
        <p>
        "Your trusted source for expert medical care. Our dedicated team offers compassionate treatment and cutting-edge solutions. Schedule appointments, explore services, and prioritize your health with confidence."
        </p>
      </div>
    </div>
  );
};

export default Home;