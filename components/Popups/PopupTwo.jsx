/* eslint-disable @next/next/no-img-element */

import { useDispatch, useSelector } from "react-redux";

import { motion } from "framer-motion";
import { changeCurrentModal } from "@/store/features/modalSlice";

const PopupTwo = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="box">
        <motion.div
          initial={{ x: '100vw' }}
          animate={{ x: 0 }}
          exit={{ x: '100vw' }}
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
              <h1 className="text-4xl font-semibold uppercase tracking-[2px] text-amber-500">ZiMO Effect Two</h1>
            </div>
        </motion.div>
      </div>
    </>
  );
};

export default PopupTwo;
