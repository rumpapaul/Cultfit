import Body from "./components/body/Body";
import Navbar from "./components/navbar/Navbar";
import { ParallaxProvider } from "react-scroll-parallax";
function App() {
  return (
    <>
    <Navbar/>
    <ParallaxProvider>
    <Body/></ParallaxProvider>
    </>
  );
}

export default App;
