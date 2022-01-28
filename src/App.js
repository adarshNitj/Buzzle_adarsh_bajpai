import "./App.css";
import Finalpage from "./components/Finalpage";
import Listone from "./components/Listone";
import Listtwo from "./components/Listtwo";
import Mainpage from "./components/Mainpage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      {/*
 <div className="container">
 <Listone/> 
 </div>
 <div className="container">
 <Listtwo/>
  </div>
      */}
      <Finalpage/>
    </>
  );
}

export default App;
