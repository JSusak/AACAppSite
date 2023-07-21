import { ChakraProvider } from "@chakra-ui/react";

export const TestWrapper = ({ children }: { children: any }): JSX.Element => {
  return <ChakraProvider>{children}</ChakraProvider>;
};
