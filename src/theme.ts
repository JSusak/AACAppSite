import { extendTheme } from '@chakra-ui/react'
import type { StyleFunctionProps } from '@chakra-ui/styled-system'
import '@fontsource/barlow';
import "@fontsource/fredoka-one";
import "@fontsource/poppins";
import "@fontsource-variable/open-sans";
import "@fontsource-variable/bitter";
import { mode } from "@chakra-ui/theme-tools";
import { Colours } from "./colourScheme";

//Global theme for the app. Here, we can give components default colours.
//If you want to override the style of a specific prop you can do it in the actual .tsx files.
export const theme = extendTheme({
  //Define styles for individual chakraUI components.
  components: {
    Heading: {
      //If light mode, choose light mode colour. Otherwise, choose dark mode colour.
      baseStyle: (props: StyleFunctionProps) => ({
        color:
          props.colorMode === "light"
            ? Colours.lightModeHeader
            : Colours.darkModeHeader,
      }),
    },
    Text: {
      baseStyle: (props: StyleFunctionProps) => ({
        color:
          props.colorMode === "light"
            ? Colours.lightModeSecondary
            : Colours.darkModeSecondary,
      }),
    },
  },

  //Define the main fonts to be used throughout the website. Second font is fallback.
  //The easiest method is to go to 'fontsource.org', install the font with NPM and import it here, changing the name.
  fonts: {
    heading: `'Bitter Variable', sans-serif`,
    body: `'Open Sans Variable', sans-serif`,
  },

  //Define global styles for arbitrary HTML elements
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode(Colours.lightModeBG, Colours.darkModeBG)(props),
        transitionProperty: "all",
        transitionDuration: "ultra-slow",
      },
    }),
  },
  config: {
    disableTransitionOnChange: false,
  },
});