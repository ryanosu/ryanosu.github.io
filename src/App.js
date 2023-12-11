import './App.css';
import Particles from './components/Particles'
import { TypeAnimation } from 'react-type-animation';


function App() {
  return (
    <>
      <Particles />

      <a href="https://github.com/ryanosu" target="_blank" rel="noopener noreferrer">
        <button class="github">Github</button>
      </a>
      
      <a href="https://ryanosu.github.io/cubeman-platformer/" target="_blank" rel="noopener noreferrer">
        <button class="button-9">Play Cubeman</button>
      </a>

      <div className='cubemanAnimation-container'></div>

      <div className='typeAnimation-container'>
        <TypeAnimation
          sequence={[
            "Hi! I'm Ryan",
            5000,
            "Here are my projects",
            5000
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '4em', display: 'inline-block' }}
          repeat={Infinity}
        />
      </div>
    </>
);
}

export default App;
