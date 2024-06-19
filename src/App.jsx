import { BrowserRouter } from "react-router-dom";

import { About, Contact, HireMe,  Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import Contents from "./components/Contents";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-black bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <HireMe />
        <Tech />
        <Works />
        <Feedbacks />
        <Contents />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
