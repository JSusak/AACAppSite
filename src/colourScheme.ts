
//Dictionary containing declarations for all colours used in the site.
//By keeping it in one file, colours are not hard-coded and can instead be referenced with a variable.
export const Colours: { [key: string]: string } = {
  //base components (mainly shades of black/white for text and background)
  lightModeBG: "#fffcf5",
  lightModeHeader: "#1E2328",
  lightModeSecondary: "#333",
  lightModeMuted: "#00ff00",

  //
  darkModeBG: "#121212",
  darkModeHeader: "#fafafa",
  darkModeSecondary: "#d3d3d3",
  darkModeMuted: "#3b3b3b",

  lightModeMainCol: "#ffd5a4",
  lightModeNavColHighlight: "#a7c2cc",
  lightModeNavColActive: "#b9ced6",
  lightModeMainAccent: "#49274a",

  lightModeWatchOutAccent: "#90CDF4",
  lightModeWatchInAccent: "#FBD38D",

  darkModeMainCol: "	#3e3e42",
  darkModeNavColHighlight: "#ED8936",
  darkModeNavColActive: "#F6AD55",
  darkModeMainAccent: "#49274a",

  //A lighter shade of the same colour as light mode.
  darkModeWatchOutAccent: "#d3ebfb",
  darkModeWatchInAccent: "#fdedd1",
};