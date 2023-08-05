import {BsFillPeopleFill} from 'react-icons/bs'
import { BiSolidDonateHeart } from "react-icons/bi";

const Join = () => {
  return (
    <div className="md:mt-14 xxs:mt-6">
      <div>
        <div className="xxs:mb-4 md:mb-10">
          <h1 className="text-center font-bold text-green-700 xxs:text-sm md:text-xl">
            GET INVOLVED
          </h1>
          <h1 className="xxs:text-xl md:text-4xl text-center font-bold p-2">
            Let's Make a Difference{" "}
            <span className="text-green-600">Today!</span>
          </h1>
        </div>
        <div className="flex justify-center">
          <div className=" md:w-[95vw] flex xxs:flex-col xxs:w-[85vw] md:flex-row gap-4">
            <div className="bg-rose-100 rounded-md shadow-xl hover:scale-95 ease-in duration-150">
              <div className="flex  flex-col items-center">
                <BiSolidDonateHeart className="mt-4 text-green-500" size={64} />
                <h1 className="font-bold text-xl p-2">Become A Volunteer</h1>
              </div>
              <div className="leading-8 px-2">
                Volunteering is a great way to make a difference in your
                community and give back to those in need. Join us today to
                support causes we share
              </div>
              <div className="flex justify-center p-4">
                <a href="tel:+25479163382">
                  <button className="px-4 py-2 bg-green-500 border-2 border-green-500 font-semibold text-lg rounded-md hover:scale-105 ease-in duration-150 hover:bg-rose-100 hover:text-green-700 ">
                    Learn more
                  </button>
                </a>
              </div>
            </div>
            <div className="bg-rose-100 rounded-md shadow-xl hover:scale-95 ease-in duration-150 ">
              <div className="flex  flex-col items-center">
                <BiSolidDonateHeart className="mt-4 text-green-500" size={64} />
                <h1 className="font-bold text-xl p-2">Donate To Support</h1>
              </div>
              <div className="leading-8 px-2">
                Your donation will help us to support our mission and make a
                difference in the lives of others. Donate today to help us make
                a difference today.
              </div>
              <div className="flex justify-center p-4">
                <a href="tel:+25479163382">
                  <button className="px-4 py-2 bg-green-500 border-2 border-green-500 font-semibold text-lg rounded-md hover:scale-105 ease-in duration-150 hover:bg-rose-100 hover:text-green-700 ">
                    Learn more
                  </button>
                </a>
              </div>
            </div>
            <div className="bg-rose-100 rounded-md shadow-xl hover:scale-95 ease-in duration-150">
              <div className="flex  flex-col items-center">
                <BiSolidDonateHeart className="mt-4 text-green-500" size={64} />
                <h1 className="font-bold text-xl p-2">Become A Partner</h1>
              </div>
              <div className="leading-8 px-2">
                Partner with us to make a difference in the lives of others and
                support our mission. And hel us change lives across the nation
                today. Together against poverty
              </div>
              <div className="flex justify-center p-4">
                <a href="tel:+25479163382">
                  <button className="px-4 py-2 bg-green-500 border-2 border-green-500 font-semibold text-lg rounded-md hover:scale-105 ease-in duration-150 hover:bg-rose-100 hover:text-green-700 ">
                    Learn more
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Join