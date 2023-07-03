import { Colours } from "../../colourScheme";

export interface appFeatureColourScheme {
  accent: string;
  buttonColour: string;
}

export const watchInColourScheme = {
  accent: Colours.lightModeWatchInAccent,
  buttonColour: "orange",
};

export const watchOutColourScheme = {
  accent: Colours.lightModeWatchOutAccent,
  buttonColour: "blue",
};
