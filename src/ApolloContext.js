import React, { createContext, useContext, useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const ApolloContext = createContext();

const ApolloContextProvider = ({ children }) => {
  const [client, setClient] = useState(createApolloClient(''));

  const updateClient = (token) => {
    setClient(createApolloClient(token));
  };

  return (
    <ApolloContext.Provider value={{ client, updateClient }}>
      <ApolloProvider client={client}>
        {children}
      </ApolloProvider>
    </ApolloContext.Provider>
  );
};

const createApolloClient = (token) => {
  const httpLink = createHttpLink({
    uri: 'https://flexhire.com/api/v2',
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        'FLEXHIRE-API-KEY': token,
      }
    };
  });

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};

const useApolloClient = () => useContext(ApolloContext);

export { ApolloContextProvider, useApolloClient };