import { Center, Grid, Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import { PeopleIcon } from "../PeopleIcon/PeopleIcon";

interface PersonType {
  personName: string;
  organisationName: string;
  imagePath: string;
  projectRoles: string[];
  primaryWebLink: string;
  secondaryWebLink: string;
  primaryIcon: JSX.Element;
  secondaryIcon: JSX.Element;
}

//Loop through a given array, creating a section of people.
export const ListOfPeopleSection = ({
  sectionHeading,
  sectionSubheading,
  listOfPeople,
}: {
  sectionHeading: string;
  sectionSubheading: string;
  listOfPeople: PersonType[];
}): JSX.Element => {
  return (
    <Grid minH="43vh" position="relative">
      <VStack>
        <Heading fontSize={"7xl"} textAlign={"center"}>
          {sectionHeading}
        </Heading>
        <Heading fontSize={"3xl"} textAlign={"center"}>
          {sectionSubheading}
        </Heading>
        <Center>
          <SimpleGrid
            columns={[1, 1, 1, 2]}
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
                />
              );
            })}
          </SimpleGrid>
        </Center>
      </VStack>
    </Grid>
  );
};
