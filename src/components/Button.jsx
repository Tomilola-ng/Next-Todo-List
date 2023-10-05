"use client";

import { motion } from "framer-motion";
import { BiPlusCircle } from "react-icons/bi";

const Button = ({ classes }) => {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      type="submit"
      className={`${classes} bg-primary w-full border-0 cursor-pointer flex place-items-center justify-center font-[500] gap-2`}
    >
      Add Todo <BiPlusCircle size={21} />
    </motion.button>
  );
};

export default Button;
