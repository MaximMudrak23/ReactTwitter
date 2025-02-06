import './styles.css'
import { useEffect } from 'react';

export function BackgroundPhoto() {
    useEffect(() => {
        const raindropsContainer = document.querySelector('.raindrops');
        function createRaindrop() {
            const drop = document.createElement('div');
            drop.classList.add('raindrop');
            drop.style.left = `${Math.random() * 100}vw`;
            raindropsContainer.appendChild(drop);
            setTimeout(() => {
                drop.remove();
            }, 3000);
        };
        const interval = setInterval(createRaindrop, 100);
        return () => clearInterval(interval);
    }, []);
  return (
    <div className='backgroundPhoto'>
        {/* <video
          className="backgroundVideo"
          autoPlay
          loop
          muted
          playsInline
          src="/edit.mp4"
        ></video> */}
        <div className='raindrops'></div>
    </div>
  )
}
