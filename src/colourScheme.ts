
//Dictionary containing declarations for all colours used in the site.
//By keeping it in one file, colours are not hard-coded and can instead be referenced with a variable.
export const Colours: { [key: string]: string } = {
  //base components (mainly shades of black/white for text and background)
  lightModeBG: "#fafafa",
  lightModeHeader: "#1E2328",
  lightModeSecondary: "#333",
  lightModeMuted: "#00ff00",

  darkModeBG: "#121212",
  darkModeHeader: "#fafafa",
  darkModeSecondary: "#d3d3d3",
  darkModeMuted: "#00ff00",

  lightModeMainCol: "#ffd5a4",
  lightModeNavColHighlight: "#a7c2cc",
  lightModeNavColActive: "#b9ced6",
  lightModeMainAccent: "#49274a",
};