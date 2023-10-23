"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function HandleSVG() {
  const [percent1, setPercent1] = useState(100);
  const [percent2, setPercent2] = useState(0);
  const [percent3, setPercent3] = useState(0);



  useEffect(() => {
    const timer = setInterval(()=>{
      setPercent2(pre=>pre+1)
      setPercent1(pre=>pre+4)
    },10)
    const timer2 = setInterval(()=>{
      setPercent3(pre=>pre+1)
    },2000)
    return ()=> {clearInterval(timer);clearInterval(timer2)}
  }, []);
  // yRange1.current
  return (
    <div className="w-full flex justify-end">
      <motion.svg 
      width="350"
      height="350"
      viewBox="0 0 512 512"
      fill="none"
        stroke="currentColor"
        strokeWidth="2"
        color="#439587cd"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`${percent3%2===0? "fill-[#43958781]":"fill-[#4395872b]"} transition-all duration-1000`}
        >
        <path
          d="M368,168H272V104H448a24.027,24.027,0,0,0,24-24V16H440V72H264a24.027,24.027,0,0,0-24,24v72H144A128.145,128.145,0,0,0,16,296V396.953A91.15,91.15,0,0,0,107.047,488h1.8A90.807,90.807,0,0,0,178.8,455.24l52.7-63.24h48.628l52.666,68.465A91.046,91.046,0,0,0,496,404.953V296A128.145,128.145,0,0,0,368,168Zm96,236.953a59.047,59.047,0,0,1-105.849,36L295.878,360H216.506l-62.294,74.754A58.893,58.893,0,0,1,108.85,456h-1.8A59.113,59.113,0,0,1,48,396.953V296a96.108,96.108,0,0,1,96-96H368a96.108,96.108,0,0,1,96,96Z"
          className="html-path stroke-primary"
          strokeWidth="2"
          strokeDasharray="2280"
          strokeDashoffset={percent1}
        />{" "}
        <rect
          width="32"
          height="32"
          x="360"
          y="248"
          strokeWidth="2"
          strokeDasharray="125"
          strokeDashoffset={percent2/2}
        />{" "}
        <rect
          width="32"
          height="32"
          x="360"
          y="328"
          strokeWidth="2"
          strokeDasharray="125"
          strokeDashoffset={percent2/2+50}

        />{" "}
        <rect
          width="32"
          height="32"
          x="320"
          y="288"
          strokeWidth="2"
          strokeDasharray="125"
          strokeDashoffset={percent2/2+20}

        />{" "}
        <rect
          width="32"
          height="32"
          x="400"
          y="288"
          strokeWidth="2"
          strokeDasharray="125"
          strokeDashoffset={percent2/2+70}

        />{" "}
        <polygon
          points="152 248 120 248 120 288 80 288 80 320 120 320 120 360 152 360 152 320 192 320 192 288 152 288 152 248"
          strokeWidth="2"
          strokeDasharray="500"
          strokeDashoffset={percent2}

        />
      </motion.svg>
      {/* <motion.svg
        width="350"
        height="350"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        color="#565656"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {" "}
        <line x1="6" y1="11" x2="10" y2="11" />{" "}
        <line x1="8" y1="9" x2="8" y2="13" />{" "}
        <line x1="15" y1="12" x2="15.01" y2="12" />{" "}
        <line x1="18" y1="10" x2="18.01" y2="10" />{" "}
        <path
          d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"
          className="html-path stroke-primary"
          strokeWidth="1"
          strokeDasharray="100"
          strokeDashoffset={percent1}
        />{" "}
      </motion.svg> */}
    </div>
  );
}

export default HandleSVG;
