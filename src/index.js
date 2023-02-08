import {createRoot } from "react-dom/client";
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import {ChakraProvider, extendTheme } from "@chakra-ui/react";
import View1 from "./View1";
import View2 from "./View2";
import View3 from "./View3";

const theme = extendTheme({
  fonts: {
    body: `'Raleway', sans-serif`
  },
})

export default theme

const container = document.getElementById("root");
const root = createRoot(container);

// Create 3 Paths using react router
// Root (view1)
// /view2
// /view3
root.render(
  <ChakraProvider theme={theme}> 
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<View1/>} />
        <Route path="/view2" element={<View2/>} />
        <Route path="/view3" element={<View3/>} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>  
);