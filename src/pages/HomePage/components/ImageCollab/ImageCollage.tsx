import { Box, Image } from "@chakra-ui/react";
import "./imageCollage.scss";
import { motion } from "framer-motion";
import { useEffect } from "react";

const imageCollageWrapperAnim = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.7,
      staggerChildren: 0.12,
    },
  },
};

const imageAnim = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

export const ImageCollage = ({ images }: { images: string[] }): JSX.Element => {
  useEffect(() => {
    console.log("hi");
  });
  return (
    <Box
      className="imageWrapper"
      width={["200px", "200px", "400px", "400px"]}
      height={["200px", "200px", "400px", "400px"]}
      m={["4rem", "4rem", "10%", "1rem"]}
    >
      <motion.div
        variants={imageCollageWrapperAnim}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {images.map((image, index) => {
          return (
            <motion.div key={`${image}${index}`} variants={imageAnim}>
              <Image
                objectFit={"cover"}
                className={`image image${index + 1} imageHov`}
                src={image}
                fallbackSrc="https://via.placeholder.com/500"
                borderRadius={"10%"}
                z-index={10 + index}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </Box>
  );
};
