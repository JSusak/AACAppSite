import { useColorMode, Button} from '@chakra-ui/react'

//TestComponent has a type of React.FunctionComponent, and returns a JSX element.
//Used for manually testing colour mode.
export const TestComponent: React.FC = (): JSX.Element => {
    const {colorMode,toggleColorMode} = useColorMode()
    return (
        <Button onClick={toggleColorMode}>
        Test component. Change to {colorMode === 'light' ? 'Dark' : 'Light'} mode.
      </Button>
    )
}