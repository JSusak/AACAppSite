import { PageTransition } from "../../PageTransition";
import { PeopleTop } from "./components/PeopleTop/PeopleTop";
import { ListOfPeopleSection } from "./components/ListOfPeopleSection/ListOfPeopleSection";
import { academics, otherContributors } from "./peopleList";

export const PeoplePage: React.FC = (): JSX.Element => {
  return (
    <>
      <PageTransition>
        {/* Starting box */}

        <PeopleTop />

        <ListOfPeopleSection
          sectionHeading={"Academic Researchers"}
          sectionSubheading={"The core pioneers of the project."}
          listOfPeople={academics}
        />

        <ListOfPeopleSection
          sectionHeading={"Other Contributors"}
          sectionSubheading={
            "The driving force behind making this project possible."
          }
          listOfPeople={otherContributors}
        />
      </PageTransition>
    </>
  );
};
