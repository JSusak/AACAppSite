import { Center, Grid, Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import { PeopleIcon } from "../PeopleIcon/PeopleIcon";
import { ResponsiveSizes } from "../../../../responsiveSizes";

import { motion } from "framer-motion";

interface PersonType {
  personName: string;
  organisationName: string;
  imagePath: string;
  projectRoles: string[];
  primaryWebLink: string;
  secondaryWebLink: string;
  primaryIcon: JSX.Element;
  secondaryIcon: JSX.Element;
  furtherInfo: string;
}

const listOfPeopleAnim = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      delayChildren: 0.7,
      staggerChildren: 0.09,
    },
  },
};

//Loop through a given array, creating a section of people.
export const ListOfPeopleSection = ({
  sectionHeading,
  sectionSubheading,
  numberOfCols,
  listOfPeople,
}: {
  sectionHeading: string;
  sectionSubheading: string;
  numberOfCols: number[];
  listOfPeople: PersonType[];
}): JSX.Element => {
  return (
    <motion.div
      variants={listOfPeopleAnim}
      viewport={{ once: true }}
      initial="hidden"
      whileInView="visible"
    >
      <Grid minH="43vh" position="relative">
        <VStack>
          <Heading
            fontSize={ResponsiveSizes.SecondaryHeaderSizes}
            textAlign={"center"}
          >
            {sectionHeading}
          </Heading>
          <Heading fontSize={["xl", "xl", "2xl", "2xl"]} textAlign={"center"}>
            {sectionSubheading}
          </Heading>
          <Center>
            <SimpleGrid
              columns={numberOfCols}
              spacingX={"10rem"}
              spacingY={"2rem"}
              m="2rem"
            >
              {/* imagePath is relative to the 'public' folder found in the project directory. */}

              {listOfPeople.map((person, index) => {
                return (
                  <PeopleIcon
                    key={`person${index}`}
                    personName={person.personName}
                    organisationName={person.organisationName}
                    imagePath={person.imagePath}
                    projectRoles={person.projectRoles}
                    primaryWebLink={person.primaryWebLink}
                    secondaryWebLink={person.secondaryWebLink}
                    primaryIcon={person.primaryIcon}
                    secondaryIcon={person.secondaryIcon}
                    furtherInfo={person.furtherInfo}
                  />
                );
              })}
            </SimpleGrid>
          </Center>
        </VStack>
      </Grid>
    </motion.div>
  );
};
