import { Box, Flex, HStack, Heading } from "@chakra-ui/layout";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import { Text } from "@chakra-ui/layout";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const testimonialVariants = {
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      type: "spring",
    },
  },
  hidden: {
    opacity: 0,
    y: -50,
    x: -25,
  },
};

export const UserTestimonial = ({
  userName,
  writtenReview,
  starRating,
  reviewDate,
}: {
  userName: string;
  writtenReview: string;
  starRating: number;
  reviewDate: string;
}): JSX.Element => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);

  return (
    <motion.div ref={ref} variants={testimonialVariants}>
      <Card maxW="md">
        <CardHeader>
          <Flex>
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Avatar
                name={userName}
                src={`https://ui-avatars.com/api/?background=a7c2cc&name=${userName.split(
                  " "[0]
                )}`}
              />

              <Box>
                <Heading size="sm">{userName}</Heading>
              </Box>
            </Flex>
          </Flex>
          <HStack mt="1rem">
            {Array(starRating)
              .fill(0)
              .map((_, index) => {
                return <FaStar key={index} color="gold" />;
              })}
            {Array(5 - starRating)
              .fill(0)
              .map((_, index) => {
                return <FaStar key={index} color="black" />;
              })}
            <Text>({starRating}/5 stars)</Text>
          </HStack>
        </CardHeader>

        <CardBody maxH={"150px"} overflowY="scroll" mt="0rem">
          <Text>{writtenReview}</Text>
        </CardBody>
        <CardFooter>
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Box>
              <Heading size="sm" as="i">
                Reviewed on: {reviewDate}
              </Heading>
            </Box>
          </Flex>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
