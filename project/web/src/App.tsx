import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import { ApolloProvider } from "@apollo/client/react"
import { createApolloClient } from "./apollo/createApolloClient"
import { BrowserRouter, Route } from "react-router-dom"
import Main from "./pages/Main"

const apolloClient = createApolloClient()

export const App: React.FC = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Route exact path="/" component={Main} />
        </BrowserRouter>
      </ChakraProvider>
    </ApolloProvider>
  )
};
