import React,{useState} from "react";
import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs"
import {RxDotFilled} from "react-icons/rx"


const Slider = ()=>{

    const slides=[
        {
            url:"https://i.hizliresim.com/3yt2os3.png"
        },
        {
            url:"https://i.hizliresim.com/ghp5c8m.jpg"
        },
        {
            url:"https://i.hizliresim.com/7igpxwo.jpg"
        }
    ];

    const [currentIndex,setCurrentIndex] = useState(0)

    const prevSlide = ()=>{
        const isFirstSlide= currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length -1 : currentIndex -1
        setCurrentIndex(newIndex);
    }
    const nextSlide = ()=>{
        const isLastSide = currentIndex === slides.length -1;
        const newIndex = isLastSide ? 0 :currentIndex + 1;
        setCurrentIndex(newIndex);
    }
    const goToSlide = (slideIndex)=>{
        setCurrentIndex(slideIndex);
    }


    return(
      <div className="max-w-[1400px] h-[600px] w-full m-auto py-16 px-4 relative group ">
        <div style={{backgroundImage:`url(${slides[currentIndex].url})`}} className="w-full h-full rounded-2xl bg-center bg-cover duration-500"></div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30}/>
        </div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30}/>
        </div>
        <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex)=>(
            <div key={slideIndex} onClick={()=> goToSlide(slideIndex)} className="text-2xl cursor-pointer "><RxDotFilled /></div>
        ))}
        </div>
      </div>
    )
}

export default Slider