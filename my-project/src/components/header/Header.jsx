import { Link } from "react-scroll";
import banner from "../../assets/images/banner.jpg"

const Header = ({ donateModal, setDonateModal }) => {
   const showDonateModal = () => {
     setDonateModal(!donateModal);
   };
  return (
    <div className="p-1">
      <div
        className="relative overflow-hidden"
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        <div className="w-full h-[100%] ">
          <img
            src={banner}
            alt="wema"
            className=" object-cover min-h-[70vh] rounded "
          />
        </div>
        {/**overlay */}
        <div className="absolute w-full h-full  bg-black/50 top-0"></div>
        <div className="absolute top-5 ">
          <div className="md:mt-8 w-full lg:my-0 lg:mx-auto">
            <h1 className="text-white text-2xl xs:p-2 font-bold tracking-wide xs:text-3xl ph:text-5xl md:leading-12 xl:text-8xl">
              Wema Charity Foundation
            </h1>
            <p className=" text-lg xs:p-4 xxs:p-2 md:mt-4 text-gray-300 xs:text-lg ph:text-3xl xl:text-6xl xl:mt-16">
              Bringing a sense of{" "}
              <span className="font-semibold text-green-400">humor</span> to the
              community.
            </p>
          </div>
          <div className="xxs:mt-0 flex xs:justify-center xs:mt-2 xs:text- ph:mt-14 ph:text-2x ph:gap-4 md:text-xl lg:text-2xl xl:mt-14 xl:text-3xl xl:py-16 xl:ml-32">
            <Link to="footer" smooth={true} duration={1500}>
              <button className="bg-green-500 p-2 ml-2 rounded border-2 border-green-500 hover:scale-90 hover:bg-transparent ease-in duration-150 md:p-5 font-semibold hover:text-white ">
                Our Causes
              </button>
            </Link>

            <button
              onClick={showDonateModal}
              className="bg-green-500 p-2 ml-2 rounded border-2 border-green-500 hover:scale-90 hover:bg-transparent ease-in duration-150 md:p-5 font-semibold hover:text-white "
            >
              Become a donor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header