import { useState } from "react";
import "./App.css";
import Counter from "./assets/components/Counter";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Counter count={count} state={count} setCount={setCount} />
      <Footer />
    </>
  );
}

export default App;
