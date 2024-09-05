import Navbar from "./components/Navbar";

function App() {
  return (
    <body className={`bg-white ${import.meta.env.PROD ? "" : "debug-screens"}`}>
      <Navbar />
    </body>
  );
}

export default App;
