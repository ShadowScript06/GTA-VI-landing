import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import FirstVideo from "./sections/FirstVideo";
import Jason from "./sections/jason";
import SecondVideo from "./sections/Secondvideo";
import Lucia from "./sections/Lucia";
import Postcard from "./sections/Postcard";
import Final from "./sections/Final";
import Outro from "./sections/Outro";
import Lenis from "lenis";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);
function App() {

  useEffect(()=>{
    const lenis=new Lenis({
      lerp:0.1,
      duration:1.2
    });

    function raf(time){
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  },[])
  return (
    <main>
      <div>
        <Navbar/>
        <Hero/>
        <FirstVideo/>
        <Jason/>
        <SecondVideo/>
        <Lucia/>
        <Postcard/>
        <Final/>
        <Outro/>
      </div>
    </main>
  );
}

export default App;
