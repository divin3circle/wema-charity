import { AiFillFacebook, AiFillPhone, AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import ItemsContainer from "./ItemsContainer";
import { IoLogoWhatsapp } from "react-icons/io";


const Footer = ({ donateModal, setDonateModal }) => {
  const onSubmit = (e) => {
    e.currentTarget.reset();
  };
   const showDonateModal = (e) => {
      e.preventDefault();
     setDonateModal(!donateModal);
   };
  return (
    <div id="footer" className="bg-gray-700 text-white mt-16">
      <div className="md:flex md:justify-between sm:px-12 px-4 bg-g py-7 md:item-center">
        <h1 className="lg:text-4xl xxs:text-2xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5 ">
          <span className="text-green-500">Sharing </span>is caring
        </h1>
        <div>
          <form>
            <input
              type="number"
              placeholder="Enter donation amount"
              className="bg-gray-800 text-white px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 sm:mr-5 mr-1 lg:mb-0 xxs:mb-4  focus:ring-green-500 focus:border-transparent w-full sm:w-72"
            />
            <button
              /* type="submit" */
              /* onSubmit={onSubmit} */
              onClick={showDonateModal}
              className="bg-green-500 hover:bg-transparent duration-150 px-5 py-2.5  rounded-md text-white hover:scale-90 hover:ring-2 ring-green-500 md:w-auto w-full"
            >
              Send donation
            </button>
          </form>
        </div>
      </div>
      <ItemsContainer />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8">
        <span>2023 JDev. All rights reserved</span>
        <span>Terms - Privacy policy</span>
        <div className="flex justify-center gap-2 text-green-500">
          <a href="https://web.facebook.com/daaaanfun">
            <AiFillFacebook
              className="hover:text-900 hover:scale-110 transition duration-150 ease-in"
              size={24}
            />
          </a>
          <a href="https://wa.me/254791863382">
            <IoLogoWhatsapp
              className=" hover:scale-110 transition duration-150 ease-in"
              size={24}
            />
          </a>
          <a href="tel:0791863382">
            <AiFillPhone
              className=" hover:scale-110 transition duration-150 ease-in"
              size={24}
            />
          </a>
          <a href="https://www.youtube.com/@danwema97">
            <AiFillYoutube
              className=" hover:scale-110 transition duration-150 ease-in"
              size={24}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer