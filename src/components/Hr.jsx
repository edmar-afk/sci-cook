/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import LocalDiningIcon from "@mui/icons-material/LocalDining";

function Hr() {
  return (
    <motion.p
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
      className="text-center py-12 lg:py-20 flex flex-row items-center justify-center gap-4"
    >
      ───────── <LocalDiningIcon className="text-pink-500" />{" "}
      <LocalDiningIcon className="text-pink-500" /> ─────────
    </motion.p>
  );
}

export default Hr;
