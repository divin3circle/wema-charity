import event1 from "../../assets/images/event1.jpg"
import event2 from "../../assets/images/event2.jpg"
import event3 from "../../assets/images/event3.jpg"
import event4 from "../../assets/images/event4.jpg"
import event5 from "../../assets/images/event5.jpg"
import event7 from "../../assets/images/event7.jpg"
import event8 from "../../assets/images/event8.jpg"
import event9 from "../../assets/images/event9.jpg"
import event13 from "../../assets/images/event13.jpg"
import event16 from "../../assets/images/event16.jpg"


const GalleryModal = ({ galleryModal, setGalleryModal }) => {
  if(!galleryModal) return null;
  const events = [
    event1,
    event13,
    event16,
    event9,
    event8,
    event7,
    event5,
    event4,
    event2,
    event3,
  ];


  return (
    <div
      data-aos="zoom-out"
      data-aos-duration="700"
      className="fixed inset-0 bg-opacity-30 backdrop-blur-sm h-[100vh] z-50 flex justify-center items-center"
    >
      <div className="bg-white/80 p-4 max-w-[780px]  rounded-md">
        <h1 className="text-lg md:text-2xl font-semibold text-center p-2">
          OUR GALLERY
        </h1>
        <div className="grid grid-cols-3 md:grid-cols-4">
          {events.map((event, index) => (
            <img
              className="w-[100%] hover:scale-105 ease-in duration-150 cursor-pointer p-2 rounded-xl object-contain"
              key={index}
              src={event}
            />
          ))}
        </div>
        <div
          onClick={() => setGalleryModal(!galleryModal)}
          className=" cursor-pointer flex justify-center items-center"
        >
          <button className="bg-green-500 p-2 rounded-lg font-semibold text-lg md:text-xl m-2 hover:scale-90 hover:bg-transparent hover:ring-2 ring-green-500 ease-in duration-150">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default GalleryModal
