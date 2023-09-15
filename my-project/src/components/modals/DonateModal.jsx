const DonateModal = ({ visible, donateModal, setDonateModal }) => {
  if (!visible) return null;
  return (
    <div
      data-aos="zoom-out"
      data-aos-duration="700"
      className="fixed inset-0 bg-opacity-30 backdrop-blur-sm h-[100vh] z-50 flex justify-center items-center"
    >
      <div className="bg-white/80 p-2 rounded-md">
        <h1 className="text-xl p-2 font-bold md:text-3xl">
          WEMA CHARITY FOUNDATION
        </h1>
        <h1 className=" text-center text-lg md:text-xl font-semibold p-2">
          FOUNDER: DAN WEMA
        </h1>
        <h1 className=" text-center text-lg md:text-xl font-semibold p-2">
          CONTACT: +254 791 863 382
        </h1>
        <h1 className=" text-center text-lg md:text-xl font-semibold p-2">
          EMAIL: danyikuri@gmail.com
        </h1>
        <h1 className="text-lg md:text-xl text-center text-green-700 font-semibold p-2">
          SUPPORT US VIA MPESA
        </h1>
        <h1 className=" text-center font-semibold ">LIPA NA MPESA</h1>
        <p className="text-center"> TILL NUMBER: 9579117</p>
        <h1 className="mt-2 text-center font-semibold">SEND MONEY</h1>
        <h1 className="text-center">0791863382</h1>
        <h1 className="text-center">NAME: DANIEL WANYONYI</h1>
        <h1 className="text-lg md:text-xl text-center text-green-700 font-semibold p-2">
          PAYPAL SUPPORT
        </h1>
        <h1 className="mt-0 text-center font-semibold">SEND MONEY</h1>
        <h1 className="text-center">Email: danyikuri@gmail.com </h1>
        <div
          onClick={() => setDonateModal(!donateModal)}
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

export default DonateModal;
