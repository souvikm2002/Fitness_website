import { IoIosFitness } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import bgVideo from "./assets/tusslevideo.mp4"
import './App.css';

function App() {
  return (
    <div className="App">
      <video autoPlay loop muted>
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className="header"><IoIosFitness size={110} className="fix" /><IoIosFitness size={50} className="fix1" />TUSSLE.FIT</div>
      <div className="desc">Become your best self</div>
      <div className="box">
        <div className="login"> Log In</div>
        <div className="flexed">
          <select name="plan" id="plan" className="input1">
            <option value="+91" selected>+91</option>
            <option value="+92" >+92 </option>
            <option value="professional">+93</option>
            <option value="corporate">+95</option>
          </select>
          <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" className="input2" placeholder="enter phone number" />
        </div>
        <div className="button">Log-in</div>
        <div className="contact">Contact support</div>
      </div>
      <div className="desc">Tusslefit is currently a closed beta</div>
      <div className="desc_flex">
        <div>contact us</div>
        <div>terms of service</div>
        <div>privacy policy</div>
      </div>
      <div className="cam"><div className="icon"><FaInstagram size={25} /></div></div>
    </div>
  );
}

export default App;
