import React from "react";
import img from "../assets/img/about.jpg";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className=" w-full lg:w-3/4 space-y-4">
        <h1 className=" text-4xl font-semibold text-center lg:text-start">About Us</h1>
        <p className=" text-justify lg:text-start">
        Welcome to HEALTH INDIA, your premier destination for comprehensive healthcare information and services. At HEALTH INDIA, we prioritize your well-being by providing reliable medical resources, up-to-date information on a wide range of health topics, and expert advice from healthcare professionals. Whether you're seeking guidance on managing a chronic condition, understanding symptoms, or exploring treatment options, our platform equips you with the knowledge to make informed healthcare decisions.
        </p>
        <p className="text-justify lg:text-start">
        Our team of experienced doctors and specialists is committed to delivering personalized care tailored to your needs. 
        </p>
        <p className="text-justify lg:text-start">
        Additionally, HEALTH INDIA offers convenient features such as online appointment scheduling, telemedicine options, and patient testimonials, ensuring seamless access to quality healthcare services
        </p>
      </div>
      <div className=" w-full lg:w-3/4">
        <img className=" rounded-lg" src={img} alt="img" />
      </div>
    </div>
  );
};

export default About;