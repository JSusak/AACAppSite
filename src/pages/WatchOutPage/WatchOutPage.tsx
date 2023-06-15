import "./watchOutPage.scss";
import { WatchOutHero } from "./components/WatchOutHero/WatchOutHero";
import { PhrasesSection } from "./components/PhrasesSection/PhrasesSection";
import { QRSection } from "./components/QRSection/QRSection";
import { BlueBadgeSection } from "./components/BlueBadgeSection/BlueBadgeSection";
import { FurtherInfoSection } from "./components/FurtherInfoSection/FurtherInfoSection";

export const WatchOutPage = (): JSX.Element => {
  return (
    <>
      <WatchOutHero />

      <PhrasesSection />

      <QRSection />

      <BlueBadgeSection />

      <FurtherInfoSection />
    </>
  );
};
