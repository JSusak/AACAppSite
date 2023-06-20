import {
  Grid,
  SimpleGrid,
  VStack,
  Heading,
  Center,
  Text,
} from "@chakra-ui/react";
import { PublicationEmbed } from "../PublicationEmbed/PublicationEmbed";
import { motion } from "framer-motion";

const publicationSectionAnim = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};

export const PublicationSection = (): JSX.Element => {
  return (
    <Grid minH="93vh" position="relative">
      <Center>
        <VStack>
          <Heading
            fontSize={"7xl"}
            textAlign={["center", "center", "center", "left"]}
          >
            Academic Publications
          </Heading>

          <Text
            fontSize={"xl"}
            maxW={["90%", "90%", "3xl", "3xl"]}
            textAlign={"left"}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            maxime, suscipit ut in tempora adipisci ea repellendus aliquam
            ducimus? Distinctio necessitatibus ea, perspiciatis fugit officiis
            minus earum nihil a. Quos. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Facilis, autem sunt similique adipisci vero
            corporis doloremque quasi illum obcaecati quia explicabo, itaque
            minima non officia repellat omnis labore. Perferendis, quisquam.
          </Text>

          <motion.div
            variants={publicationSectionAnim}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
          >
            <Center>
              <SimpleGrid
                columns={[1, 1, 1, 2]}
                spacing={"2rem"}
                mt="2rem"
                mb="2rem"
                width={"90%"}
              >
                <PublicationEmbed
                  publicationName={"Academic Paper 1"}
                  publicationImage={"./images.jpg"}
                  publicationAuthors={["Author 1", "Author 2", "Author 3"]}
                  inProceedingsOf={
                    "In Proceedings of the ACM Conference on Human Factors in Computing Systems (CHI), 2019."
                  }
                  paperURL={
                    "https://kclpure.kcl.ac.uk/ws/portalfiles/portal/197593195/chi_2023_no_copyright.pdf"
                  }
                />
                <PublicationEmbed
                  publicationName={"Academic Paper 2"}
                  publicationImage={"./images.jpg"}
                  publicationAuthors={["Author 1", "Author 2", "Author 3"]}
                  inProceedingsOf={
                    "In Proceedings of the ACM Conference on Human Factors in Computing Systems (CHI), 2019."
                  }
                  paperURL={
                    "https://kclpure.kcl.ac.uk/ws/portalfiles/portal/197593195/chi_2023_no_copyright.pdf"
                  }
                />
                <PublicationEmbed
                  publicationName={"Academic Paper 3"}
                  publicationImage={"./images.jpg"}
                  publicationAuthors={[
                    "Author 1",
                    "Author 2",
                    "Author 3",
                    "author 4",
                    "authro 5",
                  ]}
                  inProceedingsOf={
                    "In Proceedings of the ACM Conference on Human Factors in Computing Systems (CHI), 2019."
                  }
                  paperURL={
                    "https://kclpure.kcl.ac.uk/ws/portalfiles/portal/197593195/chi_2023_no_copyright.pdf"
                  }
                />
                <PublicationEmbed
                  publicationName={"Academic Paper 4"}
                  publicationImage={"./images.jpg"}
                  publicationAuthors={["Author 1", "Author 2", "Author 3"]}
                  inProceedingsOf={
                    "In Proceedings of the ACM Conference on Human Factors in Computing Systems (CHI), 2019."
                  }
                  paperURL={
                    "https://kclpure.kcl.ac.uk/ws/portalfiles/portal/197593195/chi_2023_no_copyright.pdf"
                  }
                />
              </SimpleGrid>
            </Center>
          </motion.div>
        </VStack>
      </Center>
    </Grid>
  );
};
