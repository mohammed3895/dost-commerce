import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center text-teal-600">
          <Link href="/" className="text-xl font-semibold text-zinc-900">
            Dost<span className="text-primary">Commerce</span>
          </Link>
        </div>

        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-muted-foreground">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
          consequuntur amet culpa cum itaque neque.
        </p>

        <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          <li>
            <a
              className="text-gray-700 transition hover:text-gray-700/75"
              href="#"
            >
              {" "}
              About{" "}
            </a>
          </li>

          <li>
            <a
              className="text-gray-700 transition hover:text-gray-700/75"
              href="#"
            >
              {" "}
              Careers{" "}
            </a>
          </li>

          <li>
            <a
              className="text-gray-700 transition hover:text-gray-700/75"
              href="#"
            >
              {" "}
              History{" "}
            </a>
          </li>

          <li>
            <a
              className="text-gray-700 transition hover:text-gray-700/75"
              href="#"
            >
              {" "}
              Services{" "}
            </a>
          </li>

          <li>
            <a
              className="text-gray-700 transition hover:text-gray-700/75"
              href="#"
            >
              {" "}
              Projects{" "}
            </a>
          </li>

          <li>
            <a
              className="text-gray-700 transition hover:text-gray-700/75"
              href="#"
            >
              {" "}
              Blog{" "}
            </a>
          </li>
        </ul>
        <div className="w-1/2 mt-8 py-8 border-t mx-auto">
          <p className="text-base text-center text-muted-foreground">
            &copy; 2024 -{" "}
            <Link
              href="https://www.linkedin.com/in/mohammed-sameer-bb81b3151/"
              className="text-primary"
            >
              Mohammed Sameer
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
