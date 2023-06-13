import {
  Center,
  Grid,
  HStack,
  Heading,
  Link,
  SimpleGrid,
  VStack,
} from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { motion } from "framer-motion";
import { WatchOutLogoAnim } from "./components/WatchOutLogoAnim/WatchOutLogoAnim";

import { AppFeature } from "./components/AppFeature/AppFeature";
import { UserTestimonial } from "./components/UserTestimonial/UserTestimonial";
import { Button } from "@chakra-ui/button";
import { FaVideo } from "react-icons/fa";
import "./watchOutPage.scss";
import { Colours } from "../../colourScheme";

export const WatchOutPage = (): JSX.Element => {
  return (
    <>
      <Grid minH="93vh" position="relative">
        <VStack display={"flex"} justifyContent={"center"} alignItems="center">
          {" "}
          <WatchOutLogoAnim />
          <Heading fontSize={"9xl"}>Watch Out.</Heading>
          <Heading fontSize={"6xl"}>
            Supporting{" "}
            <Heading
              as="span"
              fontSize={"6xl"}
              color={Colours.lightModeWatchOutAccent}
            >
              face-to-face
            </Heading>{" "}
            interactions.
          </Heading>
          <HStack mt="2rem" spacing={"2rem"}>
            <motion.div
              whileHover={{ scale: 1.3 }}
              transition={{ type: "spring" }}
            >
              <Link>
                <Image src="./appstore.svg" width={"150px"} />
              </Link>
            </motion.div>
            <Button colorScheme="blue" leftIcon={<FaVideo />}>
              View Demo
            </Button>
          </HStack>
        </VStack>
      </Grid>

      <Grid minH="100vh" position="relative">
        <SimpleGrid columns={2}>
          <AppFeature
            featureName={"Feature 1"}
            featureDescription={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
            numericFacts={[
              "Numeric Fact 1",
              "Numeric Fact 2",
              "Numeric Fact 2",
            ]}
            usefulWhen={[
              "Useful situation 1",
              "Useful situation 2",
              "Useful situation 3",
            ]}
            catchyLine={"Catchy line 1"}
            isOnLeft={true}
          />

          <Center>
            <Image
              src="gibbresh.png"
              fallbackSrc="https://via.placeholder.com/800"
              borderRadius={"20%"}
            />
          </Center>
        </SimpleGrid>
      </Grid>

      <Grid minH="100vh" position="relative">
        <SimpleGrid columns={2}>
          <Center>
            <Image
              src="gibbresh.png"
              fallbackSrc="https://via.placeholder.com/800"
              borderRadius={"20%"}
            />
          </Center>

          <AppFeature
            featureName={"Feature 2"}
            featureDescription={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
            numericFacts={[
              "Numeric Fact 1",
              "Numeric Fact 2",
              "Numeric Fact 2",
            ]}
            usefulWhen={[
              "Useful situation 1",
              "Useful situation 2",
              "Useful situation 3",
            ]}
            catchyLine={"Catchy line 2"}
            isOnLeft={false}
          />
        </SimpleGrid>
      </Grid>

      <Grid minH="100vh" position="relative">
        <SimpleGrid columns={2}>
          <AppFeature
            featureName={"Feature 3"}
            featureDescription={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
            numericFacts={[
              "Numeric Fact 1",
              "Numeric Fact 2",
              "Numeric Fact 2",
            ]}
            usefulWhen={[
              "Useful situation 1",
              "Useful situation 2",
              "Useful situation 3",
            ]}
            catchyLine={"Catchy line 3"}
            isOnLeft={true}
          />

          <Center>
            <Image
              src="gibbresh.png"
              fallbackSrc="https://via.placeholder.com/800"
              borderRadius={"20%"}
            />
          </Center>
        </SimpleGrid>
      </Grid>

      <Grid minH="100vh" position="relative">
        <VStack mt="2rem">
          <Heading fontSize={"6xl"}>What our users think...</Heading>

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
        </VStack>
      </Grid>
    </>
  );
};
