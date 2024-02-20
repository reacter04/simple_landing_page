import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Card from "./components/Card";
import GlobalStyles from "./components/styles/Global";
import content from "./content";
import Footer from "./components/Footer"

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "800px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <>
        <Header />
        {content.map((item, index) => 
        <Card key={index} item = {item}/>
        )}
        <Footer/>
        <button onClick={()=>theme.colors.footer = "black"}>Apasam</button>
      </>
    </ThemeProvider>
  );
}

export default App;
