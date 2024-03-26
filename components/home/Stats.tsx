import { CheckCircle } from "lucide-react";
import React from "react";

const Stats = () => {
  return (
    <section className="bg-white mb-20">
      <div className="mx-auto max-w-screen-xl px-4  sm:px-6  lg:px-8 mb-60">
        <div className="mx-auto max-w-3xl text-center flex flex-col items-center">
          <CheckCircle className="w-16 h-16 text-green-500 mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Trusted by eCommerce Businesses
          </h2>

          <p className="mt-4 text-gray-500 sm:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            dolores laborum labore provident impedit esse recusandae facere
            libero harum sequi.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
