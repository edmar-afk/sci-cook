import React from "react";
import { motion } from "framer-motion";

function Introduction() {
  return (
    <div className="px-4 pt-8 space-y-10">
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <p className="font-bold text-2xl">Introduction</p>
        <p>
          Ingredients are the foundation of every dish, influencing flavor,
          texture, and nutritional value. In Grade 8 Cookery, students are
          expected to identify and select ingredients for egg dishes, vegetable
          dishes, salads, sandwiches, starch dishes, and desserts. While the
          MELCs outline these competencies, they do not provide detailed content
          such as scientific names, images, or multimedia support.
          <br />
          <br />
          This QR-coded instructional material bridges that gap by providing
          students with images, scientific names, brief descriptions, and
          video/audio links for each ingredient. It enhances ingredient
          recognition, supports practical cooking skills, and promotes
          interactive and independent learning aligned with the MELCs.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <p className="font-bold text-2xl">Learning Objective</p>
        <p>
          Identify and describe common ingredients used in Grade 8 Cookery
          recipes, including their scientific names, visual characteristics, and
          proper usage in preparing dishes.
        </p>
      </motion.div>
    </div>
  );
}

export default Introduction;
