import React from 'react'

const Backloop = () => {
  return (
    <div>
        <video autoplay muted loop id="myVideo">
            <source src="./back.mp4" type="video/mp4"/>
        </video>
    </div>
  )
}

export default Backloop;