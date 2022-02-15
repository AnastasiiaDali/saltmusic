import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Provider } from 'react-redux';

import { store } from './store';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import theme from 'theme';
import 'assets/fonts/stylesheet.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: Infinity
    }
  }
});

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <React.StrictMode>
          <Provider store={store}>
            <App />
          </Provider>
        </React.StrictMode>
      </ChakraProvider>
    </BrowserRouter>
    <ReactQueryDevtools />
  </QueryClientProvider>,
  document.getElementById('root')
);
