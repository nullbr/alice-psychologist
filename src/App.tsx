import Appointments from "./components/Appointments";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Specialties from "./components/Specialties";
import Reviews from "./components/Reviews";
import Hero from "./components/Hero";

function App() {
  return (
    <body className={`bg-white ${import.meta.env.PROD ? "" : "debug-screens"}`}>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Specialties />
        <Appointments />
        {/* <Reviews /> */}
        <Contact />
        <Footer />
      </main>
    </body>
  );
}

export default App;
