import { AiFillFacebook, AiFillMail, AiFillPhone, AiFillYoutube, AiOutlineTwitter } from "react-icons/ai"
import {ImLocation2} from 'react-icons/im'
import {IoLogoWhatsapp } from 'react-icons/io'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
    const onSubmit = (e)=>{
        e.preventDefault();
        e.currentTarget.reset();
        toast("Your response was submitted");
    }
  return (
    <div id="contact" className=" antialiased bg-white mt-4">
      <div className="flex w-full  justify-center items-center">
        <div className=" flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6 bg-green-100 w-full max-w-4xl p-8 rounded-xl shadow-lg text-green-700">
          <div className="flex flex-col space-y-8 justify-between">
            <div>
              <h1 className="font-bold text-3xl tracking-wide">Contact Us</h1>
              <p className="pt-2 text-green-700/80 ">
                Reach out to us and support people and causes you care about.{" "}
              </p>
            </div>
            <div className="space-y-2 text-green-700/80 font-semibold text-lg">
              <div className="flex gap-2">
                <AiFillPhone size={24} />
                <p>(+254) 791 863 382</p>
              </div>
              <div className="flex gap-2">
                <ImLocation2 size={24} />
                <p>568, Street 520, Nairobi</p>
              </div>
              <div className="flex gap-2">
                <AiFillMail size={24} />
                <p>danyikuri@gmail.com</p>
              </div>
            </div>
            <div className="flex gap-2 text-green-500">
              <a href="https://web.facebook.com/daaaanfun">
                <AiFillFacebook
                  className="hover:text-900 hover:scale-110 transition duration-150 ease-in"
                  size={28}
                />
              </a>
              <a href="https://wa.me/254791863382">
                <IoLogoWhatsapp
                  className=" hover:scale-110 transition duration-150 ease-in"
                  size={28}
                />
              </a>
              <a href="tel:0791863382">
                <AiFillPhone
                  className=" hover:scale-110 transition duration-150 ease-in"
                  size={28}
                />
              </a>
              <a href="https://www.youtube.com/@danwema97">
                <AiFillYoutube
                  className=" hover:scale-110 transition duration-150 ease-in"
                  size={30}
                />
              </a>
            </div>
          </div>
          {/**form */}
          <div className="bg-gray-100 rounded-xl shadow-lg p-8 md:min-w-[24rem]">
            <form onSubmit={onSubmit} className="flex flex-col space-y-4">
              <div className="mb-2">
                <div>
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold text-gray-500"
                  >
                    Your Name
                  </label>
                </div>
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className="ring-1 ring-gray-400 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-600"
                  />
                </div>
              </div>
              <div className="">
                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-gray-500"
                  >
                    Your Email
                  </label>
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    className="ring-1 ring-gray-400 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-600"
                  />
                </div>
              </div>
              <div className="mt-2">
                <div>
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold text-gray-500"
                  >
                    Message
                  </label>
                </div>
                <div>
                  <textarea
                    rows="4"
                    id="message"
                    name="message"
                    type="text"
                    placeholder="Talk to us"
                    className="ring-1 ring-gray-400 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-600"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="bg-green-500 text-white font-bold p-2 rounded-lg text-lg hover:bg-transparent hover:text-green-500 ease-in duration-150"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    <ToastContainer/>
    </div>
  );
}

export default Contact