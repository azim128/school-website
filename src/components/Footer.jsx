/* eslint-disable @next/next/no-img-element */
'use client'
import { FaGraduationCap } from "react-icons/fa";
import { AiOutlineFileText } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
const Footer = () => {
  
  
  return (
    <>
      <div className=" bg-green-50 dark:bg-black border-t-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-5 py-16 mx-4">
          <div className="text-center text-gray-700 dark:text-white px-5">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam,
              ad. Obcaecati eveniet consequatur tempore rem?
            </p>
          </div>
          <div className="text-gray-700">
            <ul className="font-bold">
              <li className="text-gray-600 dark:text-white font-normal text-xl md:text-lg">
                <FaGraduationCap className="inline-block mr-2" />
                Graphic Design
              </li>
              <li className="text-gray-600 dark:text-white font-normal text-xl md:text-lg">
                <FaGraduationCap className="inline-block mr-2" />
                Web Design
              </li>
              <li className="text-gray-600 dark:text-white font-normal text-xl md:text-lg">
                <FaGraduationCap className="inline-block mr-2" />
                Business
              </li>
              <li className="text-gray-600 dark:text-white font-normal text-xl md:text-lg">
                <FaGraduationCap className="inline-block mr-2" />
                Marketing
              </li>
              <li className="text-gray-600 dark:text-white font-normal text-xl md:text-lg">
                <FaGraduationCap className="inline-block mr-2" />
                Engineering
              </li>
            </ul>
          </div>
          <div className="text-gray-700">
            <ul className="font-bold">
              <li className="text-gray-600 dark:text-white font-normal text-xl md:text-lg">
                <AiOutlineFileText className="inline-block mr-2" />
                Terms
              </li>
              <li className="text-gray-600 dark:text-white font-normal text-xl md:text-lg">
                <AiOutlineFileText className="inline-block mr-2" />
                Graphic Design
              </li>
              <li className="text-gray-600 dark:text-white font-normal text-xl md:text-lg">
                <AiOutlineFileText className="inline-block mr-2" />
                Web Design
              </li>
              <li className="text-gray-600 dark:text-white font-normal text-xl md:text-lg">
                <AiOutlineFileText className="inline-block mr-2" />
                Business
              </li>
              <li className="text-gray-600 dark:text-white font-normal text-xl md:text-lg">
                <AiOutlineFileText className="inline-block mr-2" />
                Marketing
              </li>
              <li className="text-gray-600 dark:text-white font-normal text-xl md:text-lg">
                <AiOutlineFileText className="inline-block mr-2" />
                Engineering
              </li>
            </ul>
          </div>
          <div className="text-gray-700">
            <ul className="font-bold">
              <li className="text-gray-600 dark:text-white font-normal text-xl md:text-lg">
                <FiExternalLink className="inline-block mr-2" />
                Use Full Link
              </li>
              <li className="text-gray-600 dark:text-white font-normal text-xl md:text-lg">
                <FiExternalLink className="inline-block mr-2" />
                Graphic Design
              </li>
              <li className="text-gray-600 dark:text-white font-normal text-xl md:text-lg">
                <FiExternalLink className="inline-block mr-2" />
                Web Design
              </li>
              <li className="text-gray-600 dark:text-white font-normal text-xl md:text-lg">
                <FiExternalLink className="inline-block mr-2" />
                Business
              </li>
              <li className="text-gray-600 dark:text-white font-normal text-xl md:text-lg">
                <FiExternalLink className="inline-block mr-2" />
                Marketing
              </li>
              <li className="text-gray-600 dark:text-white font-normal text-xl md:text-lg">
                <FiExternalLink className="inline-block mr-2" />
                Engineering
              </li>
            </ul>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default Footer;
