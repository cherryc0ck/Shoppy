import React from "react";
import { Outlet } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "styles/GlobalStyles";
import { theme } from "styles/themes/theme";
import Navbar from "components/header/Navbar";
import { AuthContextProvider } from "context/AuthContext";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <AuthContextProvider>
            <Navbar />
            <Outlet />
          </AuthContextProvider>
        </ThemeProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
};

export default App;
