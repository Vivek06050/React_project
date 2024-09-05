import './App.css';
import "./index.css";
import Hero_section from './components/Hero_section';
function App() {
  return (
    <div
      className=" flex  lg:flex-row flex-col  min-h-screen lg:p-10 bg-[#000000c8] 
      shadow-[inset_0px_0px_10px_10px_rgba(0,0,0,0.75)] shadow-black lg:justify-center items-center"
    >
      <div
        className="w-[680px] h-[200px] lg:w-[736px] lg:h-[550px] bg-[#616161D1] rounded-[27px] border-[1px] border-[#96BEE7]
                   mt-10 lg:mt-0"
      >
      </div>
      <Hero_section/>
      </div>
  );
}

export default App;
