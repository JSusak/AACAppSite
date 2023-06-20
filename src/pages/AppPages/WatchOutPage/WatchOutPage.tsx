import "./watchOutPage.scss";
import { WatchOutHero } from "./components/WatchOutHero/WatchOutHero";
import { PhrasesSection } from "./components/PhrasesSection/PhrasesSection";
import { QRSection } from "./components/QRSection/QRSection";
import { BlueBadgeSection } from "./components/BlueBadgeSection/BlueBadgeSection";
import { WatchOutFurtherInfoSection } from "./components/WatchOutFurtherInfoSection/WatchOutFurtherInfoSection";
import { PageTransition } from "../../../PageTransition";

export const WatchOutPage = (): JSX.Element => {
  return (
    <>
      <PageTransition>
        <WatchOutHero />

        <PhrasesSection />

        <QRSection />

        <BlueBadgeSection />

        <WatchOutFurtherInfoSection />
      </PageTransition>
    </>
  );
};
