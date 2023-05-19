/* eslint-disable @next/next/no-img-element */
import { changeCurrentModal } from "@/store/features/modalSlice";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
const Button = ({ number, text }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-center mt-10 sm:h-screen ">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          dispatch(changeCurrentModal(number));
        }}
      >
        <h1 className="uppercase tracking-[2px] ">{text}</h1>
        <img
          src="/assets/agentLogo.svg"
          alt=""
          className=" cursor-pointer w-[100px] shadow-xl  "
        />
      </motion.button>
    </div>
  );
};

export default Button;
