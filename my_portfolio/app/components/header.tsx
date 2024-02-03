// src/app/components/Header.tsx
import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';
import Image from 'next/image';
import kinza from './../../public/kinza.jpg'; // Adjust the import path

const Header = () => {
  return (
    <section className="min-h-screen">
      <nav className="py-10 mb-12 flex justify-between dark:text-white">
        <h1 className="font-burtons text-xl font-bold">Kinza Ali</h1>
        <ul className="flex items-center">
          <li>
            <a
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-3 border-none rounded-md ml-8 font-bold text-lg tracking-wider"
              href="#"
            >
              SKILLS
            </a>
          </li>
          <li>
            <a
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-3 border-none rounded-md ml-8 font-bold text-lg tracking-wider"
              href="#"
            >
              PROJECTS
            </a>
          </li>
          <li>
            <a
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-3 border-none rounded-md ml-8 font-bold text-lg tracking-wider"
              href="#"
            >
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
      <div className="text-center p-10 py-10">
        <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
          Kinza Ali
        </h2>
        <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
          Data Engineer | Data Analyst | Python Programming
        </h3>
        <p className="text-xl py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl tracking-wider">
          Passionate data engineer and analyst with a proven record in leading
          dynamic projects, collecting event-based data, and driving
          transformative insights. Committed to excellence, I elevate data
          strategy for organizations through innovative approaches.
        </p>
        <div className="text-5xl flex justify-center gap-12 py-3 text-gray-600 dark:text-gray-400">
          <a
            href="https://www.linkedin.com/in/kinza-ali-950069234/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin />
          </a>
          <a
            href="https://github.com/Kinzali"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
        <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
          <Image src={kinza} layout="fill" objectFit="cover" alt="Kinza Ali" />
        </div>
      </div>
    </section>
  );
};

export default Header;
