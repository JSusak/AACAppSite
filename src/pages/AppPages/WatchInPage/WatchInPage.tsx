import { WatchInHero } from "./components/WatchInHero/WatchInHero";
import { TranscribeSection } from "./components/TranscribeSection/TranscribeSection";
import { PickerSection } from "./components/PickerSection/PickerSection";
import { BreatheSection } from "./components/BreatheSection/BreatheSection";

//Main component for the Watch In page, containing all sections.
export const WatchInPage = (): JSX.Element => {
  return (
    <>
      <WatchInHero />

      <TranscribeSection />

      <PickerSection />

      {/**Breathe component */}
      <BreatheSection />

      {/**Further Info component */}
    </>
  );
};
