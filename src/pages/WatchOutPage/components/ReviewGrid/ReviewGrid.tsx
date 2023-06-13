import { SimpleGrid } from "@chakra-ui/react";
import { UserTestimonial } from "../UserTestimonial/UserTestimonial";
import { motion } from "framer-motion";

const reviewGrid = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.7,
      staggerChildren: 0.17,
    },
  },
};

export const ReviewGrid = (): JSX.Element => {
  return (
    <motion.div variants={reviewGrid} initial="hidden" whileInView="visible">
      <SimpleGrid columns={3} spacing={"6rem"} mt="2rem">
        {" "}
        <UserTestimonial
          userName={"John Doe"}
          writtenReview={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitdicta, pariatur architecto aliquam magnam qui perspiciatis sequi?reiciendis, a nesciunt officia deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitdicta, pariatur architecto aliquam magnam qui perspiciatis sequi?reiciendis, a nesciunt officia deserunt."
          }
          starRating={1}
          reviewDate="12/06/23"
        />
        <UserTestimonial
          userName={"Jane Doe"}
          writtenReview={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitdicta, pariatur architecto aliquam magnam qui perspiciatis sequi?reiciendis, a nesciunt officia deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitdicta, pariatur architecto aliquam magnam qui perspiciatis sequi?reiciendis, a nesciunt officia deserunt."
          }
          starRating={2}
          reviewDate="14/09/23"
        />
        <UserTestimonial
          userName={"Dylan Meringue"}
          writtenReview={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitdicta, pariatur architecto aliquam magnam qui perspiciatis sequi?reiciendis, a nesciunt officia deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitdicta, pariatur architecto aliquam magnam qui perspiciatis sequi?reiciendis, a nesciunt officia deserunt."
          }
          starRating={3}
          reviewDate="11/07/23"
        />
        <UserTestimonial
          userName={"Ruby Von Rails"}
          writtenReview={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitdicta, pariatur architecto aliquam magnam qui perspiciatis sequi?reiciendis, a nesciunt officia deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitdicta, pariatur architecto aliquam magnam qui perspiciatis sequi?reiciendis, a nesciunt officia deserunt."
          }
          starRating={4}
          reviewDate="12/06/23"
        />
        <UserTestimonial
          userName={"Hilary Ouse"}
          writtenReview={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitdicta, pariatur architecto aliquam magnam qui perspiciatis sequi?reiciendis, a nesciunt officia deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitdicta, pariatur architecto aliquam magnam qui perspiciatis sequi?reiciendis, a nesciunt officia deserunt."
          }
          starRating={5}
          reviewDate="12/06/23"
        />
        <UserTestimonial
          userName={"Phillip Anthropy"}
          writtenReview={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitdicta, pariatur architecto aliquam magnam qui perspiciatis sequi?reiciendis, a nesciunt officia deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitdicta, pariatur architecto aliquam magnam qui perspiciatis sequi?reiciendis, a nesciunt officia deserunt."
          }
          starRating={5}
          reviewDate="12/06/23"
        />
      </SimpleGrid>
    </motion.div>
  );
};
