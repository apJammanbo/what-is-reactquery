import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootBox from "./components/layouts/RootBox";
import Home from "./pages/Home";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Queries from "./pages/Queris";

const queryClient = new QueryClient();

const App = () => {
  return (
    <ChakraProvider resetCSS={true}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={true} />
        <BrowserRouter>
          <RootBox>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/queries" element={<Queries />} />
            </Routes>
          </RootBox>
        </BrowserRouter>
      </QueryClientProvider>
    </ChakraProvider>
  );
};

export default App;
