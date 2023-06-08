import {
  Box,
  Center,
  Grid,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  Highlight,
  Image,
  Divider,
} from "@chakra-ui/react";
import { PeopleIcon } from "./components/PeopleIcon/PeopleIcon";
import { FaChrome, FaEnvelopeOpen, FaGlobe } from "react-icons/fa";

export const PeoplePage: React.FC = (): JSX.Element => {
  return (
    <>
      {/* minH of 100vh forces the page to be at least the whole height of the device screem */}
      <Grid minH={"100vh"}>
        {/* Starting box */}
        <VStack>
          <Box h="45vh">
            <SimpleGrid columns={3} mt="1rem">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  width={"300px"}
                  src="./kcl.png"
                  fallbackSrc="https://via.placeholder.com/300"
                />
              </div>

              <VStack>
                <Heading fontSize={"9xl"}>People</Heading>
                <Text fontSize={"xl"}>
                  <Highlight
                    query={[
                      "Department of Informatics",
                      "Speech & Language Therapists",
                      "independent charities",
                    ]}
                    styles={{
                      px: "2",
                      py: "1",
                      rounded: "full",
                      bg: "blue.100",
                    }}
                  >
                    The main team for 'Watch Your Language' is comprised of a
                    handful of specialist PhD students and professors in
                    Human-Computer Interaction, based at King's College London's
                    Department of Informatics. We are grateful to work alongside
                    expert Speech & Language Therapists and independent
                    charities, who provide regular feedback as the project
                    evolves, ensuring we don't leave any hidden gaps in your
                    upcoming apps.
                  </Highlight>
                </Text>
              </VStack>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src=""
                  fallbackSrc="https://via.placeholder.com/300"
                  borderRadius={"30px"}
                />
              </div>
            </SimpleGrid>
          </Box>

          <Divider />

          <Heading fontSize={"7xl"}>Academic Researchers</Heading>
          <Heading fontSize={"3xl"}>The core pioneers of the project.</Heading>
          <Center>
            <SimpleGrid
              columns={[1, 1, 3, 3]}
              spacingX={"150px"}
              spacingY={"2rem"}
              m="2rem"
            >
              {/* imagePath is relative to the 'public' folder found in the project directory. */}
              <PeopleIcon
                personName="Name goes here"
                organisationName="King's College London"
                imagePath={""}
                projectRoles={["Role 1", "Role 2"]}
                primaryWebLink={"https://keats.kcl.ac.uk/?redirect=0"}
                secondaryWebLink={"https://keats.kcl.ac.uk/?redirect=0"}
                primaryIcon={<FaEnvelopeOpen size="40px" />}
                secondaryIcon={<FaGlobe size="40px" />}
              />
              <PeopleIcon
                personName="Name goes here"
                organisationName="King's College London"
                imagePath={""}
                projectRoles={["Role 1", "Role 2"]}
                primaryWebLink={"https://keats.kcl.ac.uk/?redirect=0"}
                secondaryWebLink={"https://keats.kcl.ac.uk/?redirect=0"}
                primaryIcon={<FaEnvelopeOpen size="40px" />}
                secondaryIcon={<FaGlobe size="40px" />}
              />
              <PeopleIcon
                personName="Name goes here"
                organisationName="King's College London"
                imagePath={""}
                projectRoles={["Role 1", "Role 2"]}
                primaryWebLink={"https://keats.kcl.ac.uk/?redirect=0"}
                secondaryWebLink={"https://keats.kcl.ac.uk/?redirect=0"}
                primaryIcon={<FaEnvelopeOpen size="40px" />}
                secondaryIcon={<FaGlobe size="40px" />}
              />
            </SimpleGrid>
          </Center>

          <Divider />
          <Heading fontSize={"7xl"}>Other Contributors</Heading>
          <Heading fontSize={"3xl"}>
            The driving force behind making this project possible.
          </Heading>

          <SimpleGrid columns={2} spacingX={"300px"} spacingY={"2rem"} m="2rem">
            <PeopleIcon
              personName="Aphasia Re-connect"
              organisationName="Independent Charity"
              imagePath={
                "https://aphasiareconnect.org/wp-content/uploads/2019/02/handsLogo_round.png"
              }
              projectRoles={["Workshop Activities"]}
              primaryWebLink={"https://keats.kcl.ac.uk/?redirect=0"}
              secondaryWebLink={""}
              primaryIcon={<FaChrome size="40px" />}
              secondaryIcon={<FaGlobe size="40px" />}
            />
            <PeopleIcon
              personName="Name goes here"
              organisationName="King's College London"
              imagePath={""}
              projectRoles={["Role 1", "Role 2"]}
              primaryWebLink={"https://keats.kcl.ac.uk/?redirect=0"}
              secondaryWebLink={"https://keats.kcl.ac.uk/?redirect=0"}
              primaryIcon={<FaEnvelopeOpen size="40px" />}
              secondaryIcon={<FaGlobe size="40px" />}
            />
            <PeopleIcon
              personName="Name goes here"
              organisationName="King's College London"
              imagePath={""}
              projectRoles={["Role 1", "Role 2"]}
              primaryWebLink={"https://keats.kcl.ac.uk/?redirect=0"}
              secondaryWebLink={"https://keats.kcl.ac.uk/?redirect=0"}
              primaryIcon={<FaEnvelopeOpen size="40px" />}
              secondaryIcon={<FaGlobe size="40px" />}
            />
            <PeopleIcon
              personName="Name goes here"
              organisationName="King's College London"
              imagePath={""}
              projectRoles={["Role 1", "Role 2"]}
              primaryWebLink={"https://keats.kcl.ac.uk/?redirect=0"}
              secondaryWebLink={"https://keats.kcl.ac.uk/?redirect=0"}
              primaryIcon={<FaEnvelopeOpen size="40px" />}
              secondaryIcon={<FaGlobe size="40px" />}
            />
          </SimpleGrid>
        </VStack>
      </Grid>
    </>
  );
};
