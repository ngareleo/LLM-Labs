import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { type FC, type PropsWithChildren } from 'react';

const theme = extendTheme({
  colors: {
    brand: {
      900: '#1a365d',
      800: '#153e75',
      700: '#2a69ac',
    },
  },
});

export const Root: FC<PropsWithChildren> = (props) => {
  return <ChakraProvider theme={theme}>{props.children}</ChakraProvider>;
};
