import { Heading, Text, Center, SimpleGrid } from "@chakra-ui/react";
import { TestComponent } from "../../components/TestComponent/TestComponent";
import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import { Colours } from "../../colourScheme";

export const HomePage: React.FC = (): JSX.Element => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Heading>HomePage</Heading>

      <Heading>AACWatchApp (change colour in theme.ts)</Heading>
      <Text>hi</Text>
      <TestComponent />

      <Center>
        <SimpleGrid columns={2}>
          <div>
            <a href="https://vitejs.dev" target="_blank">
              <img
                src={viteLogo}
                className="logo"
                alt="Vite logo"
                style={{
                  backgroundColor: Colours.lightModeHeader,
                }}
              />
            </a>{" "}
          </div>
          <div>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
        </SimpleGrid>
      </Center>

      <Heading>AACWatchApp</Heading>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
};
