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
          sectionHeading={"Academic Investigators"}
          sectionSubheading={
            "Researchers from the King's College London's Human Centred Computing Research Group. "
          }
          listOfPeople={academics}
          numberOfCols={[1, 1, 1, 2]}
        />

        <ListOfPeopleSection
          sectionHeading={"Charity Partner"}
          sectionSubheading={
            "A charity that transforms lives by connecting people with Aphasia and creating opportunities to engage in life."
          }
          listOfPeople={otherContributors}
          numberOfCols={[1, 1, 1, 1]}
        />
      </PageTransition>
    </>
  );
};
