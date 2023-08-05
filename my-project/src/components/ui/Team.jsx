import founder from '../../assets/images/founder.jpg'
import assChair from '../../assets/images/assistantchair.jpg'
import chair from '../../assets/images/chair.jpg'
import coordchair  from '../../assets/images/coordchair.jpg'
import coord from '../../assets/images/coord.jpg'
import financechair from '../../assets/images/financechair.jpg'
import media from '../../assets/images/media.jpg'
import treasurer from "../../assets/images/treasurer.jpg";
import welfare from '../../assets/images/welfare.jpg'
import { useState } from 'react'
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from 'react-icons/bs'
import {BsPersonBadgeFill} from 'react-icons/bs'

const Team = () => {
    const slides = [
      founder,
      chair,
      assChair,
      financechair,
      treasurer,
      welfare,
      coordchair,
      coord,
      media,
    ];
    const titles = [
      { name: "Founder", desc: "Dan Wema" },
      { name: "Chairperson", desc: "Christine Tush" },
      { name: "Ass. Chairperson", desc: "Bro Joseph" },
      { name: "Finance Chair", desc: "Mercy Maria" },
      { name: "Treasurer", desc: "Eunice Ouma" },
      { name: "Welfare", desc: "Sister Faith" },
      { name: "Coordinator", desc: "Joseph Ngulu" },
      { name: "Coordinator", desc: "Sister Naomi" },
      { name: "Media Lead", desc: "Bro Patrick" },
    ];

    const [current, setCurrent] = useState(0);

    const prevSlide = ()=>{
        const isFirst = current === 0;
        const index = isFirst ? slides.length - 1 : current - 1;
        setCurrent(index)
    }
    const nextSlide = ()=>{
        const isLast = current === slides.length - 1;
        const index = isLast ? 0 : current + 1;
        setCurrent(index)

    }
    
    const goToSlide = (slideIndex) => {
      setCurrent(slideIndex);
    };


  return (
    <div id="team" className="team max-w-[1400px]  h-[780px] m-auto py-16 px-4 relative flex flex-col justify-center items-center">
      <h1 className="md:text-4xl text-lg font-bold text-center mt-10 mb-10">
        Meet the Team
      </h1>
      <div
        style={{ backgroundImage: `url(${slides[current]})` }}
        className="w-[50vw] min-w-[22rem] relative h-[80%] rounded-2xl bg-cover bg-center group duration-500"
      >
        <div className="hidden group-hover:flex justify-between items-center absolute top-1/2 left-1 right-0">
          <BsFillArrowLeftCircleFill
            size={44}
            onClick={prevSlide}
            className="text-4xl text-green-500  hover:scale-90 duration-150 ease-in cursor-pointer"
          />
        </div>
        <div className="hidden group-hover:flex justify-between items-center absolute top-1/2 right-1">
          <BsFillArrowRightCircleFill
            size={44}
            onClick={nextSlide}
            className="text-4xl text-green-500 hover:scale-90 duration-150 ease-in cursor-pointer"
          />
        </div>
      </div>
      <div className="flex gap-2 top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-4xl hover:scale-50 ease-in duration-150 cursor-pointer"
          >
            <BsPersonBadgeFill />
          </div>
        ))}
      </div>
      <div className="mt-1 duration-500 ease-in">
        <h1 className="text-xl font-bold md:text-2xl text-green-700">
          {titles[current].name.toLocaleUpperCase()}
        </h1>
        <p className=" font-semibold text-center text-lg md:text-xl">
          {titles[current].desc}
        </p>
      </div>
    </div>
  );
}

export default Team