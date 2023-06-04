import { extendTheme } from '@chakra-ui/react'
import type { StyleFunctionProps } from '@chakra-ui/styled-system'
import '@fontsource/barlow';
import "@fontsource/fredoka-one";
import { Colours } from "./colourScheme";

//Global theme for the app. Here, we can give components default colours.
//If you want to override the style of a specific prop you can do it in the actual .tsx files.
export const theme = extendTheme({
  //Define styles for individual chakraUI components.
  components: {
    Heading: {
      //If light mode, choose light mode colour. Otherwise, choose dark mode colour.
      baseStyle: (props: StyleFunctionProps) => ({
        color: props.colorMode === "light" ? Colours.lightModeHeader : "blue",
      }),
    },
    Text: {
      //If light mode, choose light mode colour. Otherwise, choose dark mode colour.
      baseStyle: (props: StyleFunctionProps) => ({
        color:
          props.colorMode === "light" ? Colours.lightModeSecondary : "blue",
      }),
    },
  },

  //Define the main fonts to be used throughout the website. Second font is fallback.
  //The easiest method is to go to 'fontsource.org', install the font with NPM and import it here, changing the name.
  fonts: {
    heading: `'Fredoka One', sans-serif`,
    body: `'Barlow', sans-serif`,
  },
});