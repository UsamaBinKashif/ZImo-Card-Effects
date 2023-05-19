/* eslint-disable @next/next/no-img-element */

import { useDispatch, useSelector } from "react-redux";

import { motion } from "framer-motion";
import { changeCurrentModal } from "@/store/features/modalSlice";

const PopupNine = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="box">
        <motion.div
        initial={{ scale: 0, opacity: 0, rotate: -180, y: -100 }}
        animate={{ scale: 1, opacity: 1, rotate: 0, y: 0 }}
        exit={{ scale: 0, opacity: 0, rotate: 180, y: 100 }}
        transition={{
          type: 'spring',
          duration: 0.6,
          bounce: 0.4,
          delay: 0.2,
          ease: 'easeInOut',
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
              <h1 className="text-4xl font-semibold uppercase tracking-[2px] text-amber-500">ZiMO Effect Nine</h1>
            </div>
        </motion.div>
      </div>
    </>
  );
};

export default PopupNine;
