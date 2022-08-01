import React from 'react'
import './IntroComponent.css';

function IntroComponent() {
  return (
    <div className='intro-container'>
      {/* <video src='/videos/video-2.mp4' autoPlay loop muted /> */}
      <h1>Fancyon</h1>
      <p>Want the latest styles?...We got them!!</p>
      <div className='intro-btns'>
        {/* <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button> */}
      </div>
    </div>
  )
}

export default IntroComponent