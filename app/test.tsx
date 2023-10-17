"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const Test = () => {
  const [isClick, setIsClick] = useState(false);
  const [animate, setAnimate] = useState(false);
  const router = useRouter();
  const 슬랙으로이동 = () => {
    setIsClick(true);
    setAnimate(true);
    setTimeout(() => router.push("/slack"), 1000);
  };

  return (
    <>
      <div className="min-h-[100.3vh]">
        <div
          className={`${isClick ? "animate-slide-up animate-scale-in" : ""}`}
        >
          <button className="font-bold text-4xl" onClick={슬랙으로이동}>
            하이용
          </button>
        </div>
      </div>
    </>
  );
};

export default Test;
