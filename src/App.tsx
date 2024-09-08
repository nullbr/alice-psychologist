import Navbar from "./components/Navbar";

function App() {
  return (
    <body
      className={`bg-white h-[200vh] ${import.meta.env.PROD ? "" : "debug-screens"}`}
    >
      <Navbar />
    </body>
  );
}

export default App;
