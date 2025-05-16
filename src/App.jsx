import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import ShowCase from "./components/ShowCase";

function App() {
  return (
    <main className='bg-[#e2e2e2] font-sfpro overflow-x-hidden'>
      <NavBar />
      <HeroSection />
      <ShowCase />
      <Footer />
    </main>
  );
}

export default App;
