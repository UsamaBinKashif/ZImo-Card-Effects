/* eslint-disable @next/next/no-img-element */

import { useDispatch, useSelector } from "react-redux";

import { motion } from "framer-motion";
import { changeCurrentModal } from "@/store/features/modalSlice";

const PopupSeven = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="box">
        <motion.div
           initial={{ rotate: -90, scale: 0.8, opacity: 0 }}
           animate={{ rotate: 0, scale: 1, opacity: 1 }}
           exit={{ rotate: -90, scale: 0.8, opacity: 0 }}
           transition={{ duration: 0.3 }}
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
              <h1 className="text-4xl font-semibold uppercase tracking-[2px] text-amber-500">ZiMO Effect Seven</h1>
            </div>
        </motion.div>
      </div>
    </>
  );
};

export default PopupSeven;
