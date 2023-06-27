import { Box, Image } from "@chakra-ui/react";
import "./imageCollage.scss";
import { motion } from "framer-motion";


const imageCollageWrapperAnim = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
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
  return (
    <Box
      className="imageWrapper"
      width={["200px", "225px", "400px", "500px"]}
      height={["200px", "225px", "400px", "500px"]}
      m={["4rem", "4rem", "15%", "15%"]}
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
                transform={`scale(1) rotate(${(index + 1) * 10}deg);`}
                fallbackSrc="https://via.placeholder.com/500"
                borderRadius={"10%"}
                z-index={10 + index}
                zIndex={0}
                _hover={{ zIndex: 150 }}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </Box>
  );
};
