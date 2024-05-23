import './App.css';
import Navbar from './components/Navbar';
import TextFro from './components/TextFro';
import TextForm from './components/TextForm';

let name="Dinanath";
function App() {
  return (
    <>

    <Navbar title="Bankira" Home="House"/>
    {/* <div className="container my-3">
    <TextForm heading="Enter a text to analize blow"/>
    </div> */}
    <TextFro/>

    {/* <Navbar/> */}
    </>
  );
}

export default App;
