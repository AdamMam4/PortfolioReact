import "./App.css";
import Typewriter from "./Typewriter";

function App() {
  return (
    // <div className="title-container">
    //   <div className="title">
    //     <p>Hi, my name is</p>
    //     <div className="typewriter">
    //       <h1>Adam Mamoun.</h1>
    //     </div>
    //   </div>
    // </div>
    <div>
    <Typewriter text="This is Working Fine !!" speed={100}/>
    </div>
  );
}

export default App;
