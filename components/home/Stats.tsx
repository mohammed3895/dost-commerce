import { CheckCircle } from "lucide-react";
import React from "react";

const Stats = () => {
  return (
    <section className="bg-white mb-20">
      <div className="mx-auto max-w-screen-xl px-4  sm:px-6  lg:px-8">
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

        <div className="mt-8 sm:mt-8">
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:divide-x sm:divide-gray-100">
            <div className="flex flex-col px-4 py-8 text-center">
              <dt className="order-last text-sm mt-1 font-medium text-gray-500">
                Total Sales
              </dt>

              <dd className="text-4xl font-normal text-primary md:text-5xl">
                $4.8m
              </dd>
            </div>

            <div className="flex flex-col px-4 py-8 text-center">
              <dt className="order-last text-sm mt-1 font-medium text-gray-500">
                Official Addons
              </dt>

              <dd className="text-4xl font-normal text-primary md:text-5xl">
                24
              </dd>
            </div>

            <div className="flex flex-col px-4 py-8 text-center">
              <dt className="order-last text-sm mt-1 font-medium text-gray-500">
                Total Addons
              </dt>

              <dd className="text-4xl font-normal text-primary md:text-5xl">
                86
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Stats;
