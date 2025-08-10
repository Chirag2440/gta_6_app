import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

function App() {
  const [showContent, setShowContent] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 7.5,
      duration: 2,
      ease: "power4.easeInOut",
      transformOrigin: "50% 50%",
    
    }) .to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      }
    


    });
  });

  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale:1,
      rotate: 0,
      duration: 2,
      ease:"Expo.easeInOut",
      delay:"-1",
    });

    gsap.to(".sky", {
      scale:1.2,
      rotate: 0,
      duration: 2,
      ease:"Expo.easeInOut",
      delay:"-.8",
    });

    gsap.to(".bg", {
      scale:1.2,
      rotate: 0,
      duration: 2,
      ease:"Expo.easeInOut",
      delay:"-1",
    });

    gsap.to(".character", {
      scale:.66,
      x:"-50%",
      bottom:"-69%",
      rotate: 0,
      duration: 2,
      ease:"Expo.easeInOut",
      delay:"-1",
    });

    gsap.to(".text", {
      scale:1,
      rotate: 0,
      duration: 2,
      ease:"Expo.easeInOut",
      delay:"-1",
    });

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
        const XMove = (e.clientX / window.innerWidth - 0.5) * 40;
        gsap.to(".main .text", {
          x: `${XMove * 0.4}%`,
        });

        gsap.to(".sky", {
          x: `${XMove * 0.4}%`,
        });

        gsap.to(".bg", {
          x: XMove,
        });

  });
},[showContent]);
  

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="230"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (<div className="main w-full rotate-[-10deg] scale-[1.5]">
          <div className="landing overflow-hidden relative w-full h-screen bg-black">
            <div className="navbar absolute top-0 left-0 z-[8] w-full py-7 px-7">
              <div className="logo flex gap-8">
                <div className="lines flex flex-col gap-[5px]">
                  <div className="line bg-white w-14 h-2"></div>
                  <div className="line bg-white w-8 h-2" ></div>
                  <div className="line bg-white w-5 h-2"></div>
                </div>
                <h3 className="text-4xl -mt-[9px] leading-none text-white">Rockstar</h3>

              </div>
            </div>
            <div className="imagesdiv relative w-full overflow-hidden h-screen">
              <img className="absolute sky scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object-cover" src="./sky.png" alt="" />
              <img className=" absolute bg  scale-[1.8] rotate-[-5deg] top-0 left-0 w-full h-full object-cover" src="./bg.png" alt="" />
              <div className=" text text-white flex flex-col gap-1 absolute top-5 left-1/2 -translate-x-1/2 scale-[1.4] rotate-[-15deg]">
              <h1 className="text-[7.2rem] leading-none -ml-29">grand</h1>
              <h1 className="text-[7.2rem] leading-none ml-18">theft</h1>
              <h1 className="text-[7.2rem] leading-none -ml-25">auto</h1>
            </div>
              <img className="absolute character -bottom-[250%] left-1/2 -translate-x-1/2 scale-[2.1] rotate-[-24deg]" src="./girlbg.png" alt="" />
            </div>
               <div className="btmbar text-white absolute bottom-0 left-0  w-full px-7 py-12 bg-gradient-to-t from-black to-transparent">
                <div className="flex items-center gap-4">
                  <i className=" text-3xl ri-arrow-down-fill"></i>
                  <h3 className=" text-xl font-[Helvetica_Now_Display]">Scroll Down</h3>
                </div>
                <img className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[60px]" src="./ps5.png" alt="" />
               </div>
          </div>
          <div className="w-full h-screen flex items-center justify-center bg-black">
            <div className="cntnr w-full flex  h-[79%] overflow-hidden">
              <div className="limg relative w-1/2 h-full">
                <img className="absolute top-1/2 left-1/2 scale-[.76] -translate-x-1/2 -translate-y-1/2" src="./imag.png" alt="" />
              </div>
              <div className="rimg w-[30%] py-3.6 text-white">
                <h1 className="text-6xl">Still Running,</h1>
                <h1 className="text-6xl">Walk Dude</h1>
                <p className=" text-[2.7xl] font-[Helvetica_Now_Display] mt-10">GTA 6 will take place in the fictional state of Leonida, which is Rockstar Games' version of Florida. The main city will be a modern-day version of the fan-favorite Vice City, a vibrant, neon-soaked metropolis inspired by Miami.  </p>
                <p className=" text-[2.7xl] font-[Helvetica_Now_Display] mt-5">For the first time in the series' history, GTA 6 will feature a playable female protagonist from the start. The story is inspired by the infamous criminal couple Bonnie and Clyde and will revolve around two main characters.</p>
                <button className="bg-yellow-500 text-black mt-4 text-3xl px-4 py-4">Download Now</button>
                <p className=" font-[Proxima_Nova] text-pink text-xl mt-2 ml-60">@ Made By Chirag</p>
        
                
              </div>
            </div>
          </div>
        </div>
        )}
      
               
      
    </>
);
}

export default App;
