import event from "../../assets/images/event.jpg"
import event1 from "../../assets/images/event4.jpg"

const Past = ({galleryModal, setGalleryModal}) => {
  const showGalleryModal = ()=>{
    setGalleryModal(!galleryModal);
  }
  return (
    <div id="past" className="mt-14 p-2">
      <h1 className="text-xl md:text-4xl text-center font-bold">
        Wema Charity Foundation Events
      </h1>
      <div>
        <h1 className="text-center p-2 text-lg md:text-2xl font-semibold">
          Recent Events
        </h1>
      </div>
      <div className="flex justify-center gap-4 md:flex-row flex-col p-4">
        <div className="xxs:h-[30vh] md:h-[40vh] relative">
          <div className="xxs:h-[30vh] md:h-[40vh] md:min-w-[40vw]">
            <img
              src={event}
              alt="event-1"
              className="object-cover w-full rounded-xl h-full"
            />
          </div>
          <div className="bg-green-500 md:w-[10vw]      rounded  absolute top-4 md:right-2 right-4 md:text-lg w-[14vw] font-bold text-center">
            <h1>JULY</h1>
            <h1>2021</h1>
          </div>
          <div className="absolute top-16 md:top-20 px-2  text-2xl text-white font-semibold ">
            <h1>Grace Community Center, Nairobi</h1>
            <p className="md:text-lg xxs:hidden xxs:leading-7 font-light text-gray-300 leading-8 lg:py-4 md:max-w-[40vw] md:block">
              The Wema Foundation visited the Grace Community center located in
              Nairobi....
            </p>
          </div>
          <div className="absolute  xxs:bottom-8 md:bottom-4 lg:left-1 xxs:left-1 md:right-36 text-white font-semibold text-lg ">
            <button
              onClick={showGalleryModal}
              className="border-2 rounded-full hover:scale-105 hover:bg-green-500 border-green-500 hover p-1 px-4 ease-in duration-150 hover:text-black"
            >
              View Details
            </button>
          </div>
        </div>
        <div
          className="md:h-[40vh] 
         xxs:h-[30vh] relative"
        >
          <div className="md:h-[40vh] xxs:h-[30vh] md:min-w-[40vw]">
            <img
              src={event1}
              alt="event-1"
              className="object-cover w-full rounded-xl h-full"
            />
          </div>
          <div className="bg-green-500 md:w-[10vw] rounded absolute top-4 md:right-2 right-4 md:text-lg w-[14vw] font-bold text-center">
            <h1>JULY</h1>
            <h1>2021</h1>
          </div>
          <div className="absolute md:top-20 top-16 px-2 text-2xl text-white font-semibold ">
            <h1>Tumbuni Children's Home, Makueni</h1>
            <p className="md:text-lg xxs:hidden xxs:leading-7 font-light text-gray-300 leading-8 lg:py-4 md:max-w-[40vw] md:block">
              Wema Foundation visited the Makueni Children's home for kids
              living with...
            </p>
          </div>
          <div className="absolute xxs:bottom-8 md:bottom-4 lg:left-1 xxs:left-1 md:right-36 text-white font-semibold text-lg ">
            <button
              onClick={showGalleryModal}
              className="border-2  rounded-full hover:scale-105 hover:bg-green-500 border-green-500 hover p-1 px-4 ease-in duration-150 hover:text-black"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-2">
        <button
          onClick={showGalleryModal}
          className="bg-green-500 text-xl font-semibold p-4 rounded-xl hover:bg-transparent border-green-500 border ease-in duration-150"
        >
          View Event Gallery
        </button>
      </div>
    </div>
  );
}

export default Past