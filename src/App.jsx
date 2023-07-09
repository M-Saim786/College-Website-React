import Navbar from './Components/Navbar';
import Slider from './Components/Slider';
import Student_Services from './Components/Student_Services';
import Services from './Components/Services';
import FeedBack from './Components/FeedBack';
import Footer from './Components/Footer';
import { AiOutlineArrowUp } from 'react-icons/ai'
import './style.css';
import './Components/Navbar.css'
function App() {

// ---------------------------- Goto Top Function ---------------------------====
  window.onscroll = () => {
    console.log(window.scrollY)
    if (window.scrollY > 20) {
      // alert("kd;")

      document.getElementsByClassName('gotoTop')[0].setAttribute('style', 'display:flex')
    }
    else {
      document.getElementsByClassName('gotoTop')[0].setAttribute('style', 'display:none')

    }
  }
  return (
    <>
      <div>
        {/* <!-- GOto TOP Button --> */}
        <button className='gotoTop' id='gotoTop'  >
          <a href="#" >
            <AiOutlineArrowUp />
          </a>
        </button>

      </div>


      <Navbar />
      <Slider />
      <Student_Services />
      <Services />

      <br />
      <hr />
      <br />
      <FeedBack />
      <br />
      <hr />
      <br />
      <Footer />
    </>
  );
}

export default App;
