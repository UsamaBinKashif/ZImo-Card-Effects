/* eslint-disable @next/next/no-img-element */

import { useDispatch, useSelector } from "react-redux";

import { motion } from "framer-motion";
import { changeCurrentModal } from "@/store/features/modalSlice";

const PopupFive = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="box">
        <motion.div
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
          }}
          className="popup "
        >
          <div >
            <button
              className="text-sm font-bold bg-amber-500 p-2 rounded text-[10px] outline-none hover:bg-opacity-80 float-right text-white uppercase"
              onClick={() => {
                dispatch(changeCurrentModal(0));
              }}
            >
              close
            </button>
          </div>
            <div className="flex justify-center items-center h-screen">
              <h1 className="text-4xl font-semibold uppercase tracking-[2px] text-amber-500">ZiMO Effect five</h1>
            </div>
        </motion.div>
      </div>
    </>
  );
};

export default PopupFive;
