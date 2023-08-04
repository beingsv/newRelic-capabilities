import card1Image from './images/img1.jpg';
import card2Image from './images/img2.jpg';
import card3Image from './images/img3.jpg';
import card4Image from './images/img4.jpg';
import submitIcon from './images/croppedMe.png';


import './App.css';

function App() {
  return (
    <div className="demoPage">
      <div className="heading">
        <h1>Popular Product</h1>
      </div>
      <hr />
      <div className="productList">
        <div className="card1">
          <img src={card1Image} className="cardy" alt="card1Image" height="180px" width="250px" /> 
          <div className="quantity">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
              <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
            </svg>
            <p>62</p>
          </div>
          <div className='container'>
            <h3 className='heading'>Haught or Naught</h3>
            <p className='para'>High-minded or absent-minded? You decide.</p>
            <div className='submit'>
              <p>Submitted by: </p>
              <img src={submitIcon} alt="submitIcon" height="35px"/>
            </div>
          </div>
        </div>
        <div className="card2">
          <img src={card2Image} className="cardy" alt="card2Image" height="180px" width="250px" />
          <div className="quantity">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
              <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
            </svg>
            <p>65</p>
          </div>
          <div className='container'>
            <h3 className='heading'>Supermajority: The Fantasy Congress League</h3>
            <p className='para'>Earn points when your favorite politicians pass legislature.</p>
            <div className='submit'>
              <p>Submitted by: </p>
              <img src={submitIcon} alt="submitIcon" height="35px"/>
            </div>
          </div>
        </div>
        <div className="card3">
          <img src={card3Image} className="cardy" alt="card3Image" height="180px" width="250px" />
          <div className="quantity">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
              <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
            </svg>
            <p>70</p>
          </div>
          <div className='container'>
            <h3 className='heading'>Tinfoild: Tailored tinfoil hats</h3>
            <p className='para'>Don't worry, we already have your measurements and shipping address.</p>
            <div className='submit'>
              <p>Submitted by: </p>
              <img src={submitIcon} alt="submitIcon" height="35px"/>
            </div>
          </div>
        </div>
        <div className="card4">
          <img src={card4Image} className="cardy" alt="card4Image" height="180px" width="250px" />
          <div className="quantity">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
              <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
            </svg>
            <p>85</p>
          </div>
          <div className='container'>
            <h3 className='heading'>Yellow Pail</h3>
            <p className='para'>On-demand sand castle construction expertise.</p>
            <div className='submit'>
              <p>Submitted by: </p>
              <img src={submitIcon} alt="submitIcon" height="35px"/>
            </div>
          </div>
        </div>
      </div>


      <div className='button' >
        <button onClick={() => alert('button click catched')}>Click me</button>
      </div>
      
      
      

    </div>
  );
}

export default App;