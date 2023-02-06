import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  theme,
} from "@chakra-ui/react"
import { ApolloProvider } from "@apollo/client/react"
import FilmList from "./components/film/FilmList"
import { createApolloClient } from "./apollo/createApolloClient"

const apolloClient = createApolloClient()

export const App: React.FC = () => (
  <ApolloProvider client={apolloClient}>
    <ChakraProvider theme={theme}>
      <Box>
        <Text><b>Ghibli GraphQL</b></Text>
        <FilmList></FilmList>
      </Box>
    </ChakraProvider>
  </ApolloProvider>
)
