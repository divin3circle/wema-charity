
import {BiSolidDonateHeart} from 'react-icons/bi'
import {
    AiOutlineMenu,
  AiFillPhone,
  AiFillInstagram,
  AiFillFacebook,
  AiOutlineClose,
} from "react-icons/ai";
import { FaDonate} from "react-icons/fa";
import { useState } from 'react';
import { Link } from 'react-scroll';


const Navbar = ({ donateModal, setDonateModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const showDonateModal = () => {
    setDonateModal(!donateModal);
  };
  return (
    <div>
      <div className="flex justify-between items-center">
        {/**logo */}
        <div className="flex p-2">
          <div>
            <BiSolidDonateHeart size={36} />
          </div>
          <div className="xs:text-2xl xxs:text-[1.25rem] py-1 font-semibold ">
            Wema Foundation
          </div>
        </div>
        {/**mobile */}
        <div
          className={`bg-gray-100 absolute w-full top-1 z-10 md:hidden ease-in duration-100
          ${isOpen ? "block" : "hidden"}
          `}
        >
          <div
            className="absolute right-5 top-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            <AiOutlineClose />
          </div>
          <div className="text-center">
            <ul className=" top-10  flex flex-col gap-4 mt-4">
              <li>
                <Link
                  to="/"
                  smooth={true}
                  duration={500}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="team"
                  smooth={true}
                  duration={1500}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="footer"
                  smooth={true}
                  duration={2000}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Causes
                </Link>
              </li>
              <li>
                <Link
                  to="past"
                  smooth={true}
                  duration={1000}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Events
                </Link>
              </li>

              <li className="mb-4">
                <Link
                  to="contact"
                  smooth={true}
                  duration={2000}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <hr className="bg-black" />
            <div>
              <div className="my-3">
                <button className="bg-green-500 p-2 rounded-md">
                  Reach out
                </button>
                <div className="flex justify-center gap-2 my-4">
                  <AiFillInstagram size={24} />
                  <AiFillFacebook size={24} />
                  <AiFillPhone size={24} />
                </div>
              </div>
              <div className="my-4">
                <p>
                  Be a helping hand
                  <span className="font-semibold text-green-700">
                    {" "}
                    Make your donation today!
                  </span>
                </p>
                <button className="bg-green-500 px-2 mt-2 rounded-md py-2 font-semibold">
                  Donate
                </button>
              </div>
            </div>
          </div>
        </div>
        <ul className="md:flex items-center justify-between md:gap-4 lg:gap-8 text-lg font-semibold xxs:hidden">
          <li className="cursor-pointer  hover:border-b-4 border-green-700 rounded-sm ease-in duration-150 hover:scale-105">
            <Link to="/" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="cursor-pointer  hover:border-b-4 border-green-700 rounded-sm ease-in duration-150 hover:scale-105">
            <Link to="team" smooth={true} duration={1500}>
              About Us
            </Link>
          </li>
          <li className="cursor-pointer  hover:border-b-4 border-green-700 rounded-sm ease-in duration-150 hover:scale-105 ">
            <Link to="footer" smooth={true} duration={1500}>
              Causes
            </Link>
          </li>
          <li className="cursor-pointer  hover:border-b-4 border-green-700 rounded-sm ease-in duration-150 hover:scale-105 ">
            <Link to="past" smooth={true} duration={1500}>
              Events
            </Link>
          </li>
          <li className="cursor-pointer  hover:border-b-4 border-green-700 rounded-sm ease-in duration-150 hover:scale-105 ">
            <Link to="contact" smooth={true} duration={1500}>
              Contact
            </Link>
          </li>
        </ul>
        <div className="absolute xxs:right-[7rem] xs:right-[7.5rem] md:hidden cursor-pointer">
          <AiOutlineMenu onClick={() => setIsOpen(!isOpen)} size={38} />
        </div>
        <button
          onClick={showDonateModal}
          className="flex gap-1 cursor-pointer bg-green-500 p-2 rounded-lg hover:scale-95 border-2 border-green-500 hover:bg-white ease-in duration-150 mr-2"
        >
          <FaDonate size={20} />
          <h1>Donate</h1>
        </button>
      </div>
    </div>
  );
};

export default Navbar
