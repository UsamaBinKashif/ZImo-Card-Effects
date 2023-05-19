/* eslint-disable @next/next/no-img-element */
import { modals } from "lib/constants";
import { useSelector } from "react-redux";
import Button from "./Button";
import PopupOne from "./Popups/PopupOne";
import PopupTwo from "./Popups/PopupTwo";
import PopupThree from "./Popups/PopupThree";
import PopupFour from "./Popups/PopupFour";
import PopupFive from "./Popups/PopupFive";
import PopupSix from "./Popups/PopupSix";
import PopupSeven from "./Popups/PopupSeven";
import PopupEight from "./Popups/PopupEight";
import PopupNine from "./Popups/PopupNine";

const Modal = () => {
  const currentModal = useSelector((state) => state.modals.currentModal);

  if (currentModal === modals.modalOne) return <PopupOne />;
  if (currentModal === modals.modalTwo) return <PopupTwo />;
  if (currentModal === modals.modalThree) return <PopupThree />;
  if (currentModal === modals.modalFour) return <PopupFour />;
  if (currentModal === modals.modalFive) return <PopupFive />;
  if (currentModal === modals.modalSix) return <PopupSix />;
  if (currentModal === modals.modalSeven) return <PopupSeven />;
  if (currentModal === modals.modalEight) return <PopupEight />;
  if (currentModal === modals.modalNine) return <PopupNine />;

  return null;
};

export default Modal;
