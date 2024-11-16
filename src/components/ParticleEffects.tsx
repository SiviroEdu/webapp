

import LightBulbSVG from "@/svg/LightBulbSVG";
import MoneySVG from "@/svg/MoneySVG";
import { motion } from "framer-motion";

export default function ExplosionEffect({type, amount}:{type: "Xp" | "Money", amount: number}){
  const lines = Array.from({ length: 12 });

  const animation = {
    initial: { scale: 0.5, opacity: 1 },
    //animate: { scaleY: 2, opacity: 0 },
    //transition: { duration: 1, ease: "easeOut", delay: index*0.1, },
  };

  return (
    <div
      style={{
        position: "relative",
        width: "200px", // adjust the width and height as needed
        height: "200px", // adjust the width and height as needed
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {lines.map((_, index) => (
        <motion.div
          key={index}
          initial={animation.initial}
          //animate={animation.animate}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{
            position: "absolute",
            width: "8px",
            height: "50px",
            borderRadius: "80px",
            background: index % 2 === 0 ? "navy" : "purple",
            transformOrigin: "center bottom",
          }}
          className="flex flex-row justify-center align-middle"
          animate={{
            translateX: [
              0,
              Math.cos((((index * 360) / lines.length) * Math.PI) / 180) * 150,
            ],
            translateY: [
              0,
              Math.sin((((index * 360) / lines.length) * Math.PI) / 180) * 150 -
                30,
            ],
            rotate: [(360 / lines.length) * index + 90],
            scale: [0, 1.5, 0],
            opacity: [0, 0.3, 1, 0],
          }}
        ></motion.div>
      ))}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: [0, 0.1, 0.3, 1] }}
        transition={{ duration: 1 }}
        style={{
          fontSize: "24px",
          color: "black",
          fontWeight: "bold",
          position: "absolute", // Ensure it's centered as well
        }}
        className="flex flex-row justify-center align-middle"
      >
        <div className='flex flex-row items-center justify-start gap-1'>
          <MoneySVG classes='w-20 h-20 fill-primary' />
          <p className='text-5xl'>{amount}</p>
        </div>
      
      </motion.div>
    </div>
  );
};
