import React from 'react'
import vg from '../assests/2.webp'
import{AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"
const Home = () => {
  return (
    <>
    <div className="home">
        <main>
            <h1>TechyStar</h1>
            <p>Solution to all your problems</p>
        </main>
      
    </div>
    <div className="home2">
      <img src={vg} alt='Graphics'/>
      <div>
      <p>
        We are your one and only solution to the tech problems
        you face
        everyday.We are loading tech company whose aim is to increase the 
        problem solving ability in children.
      </p>
      </div>
    </div>
    <div className="home3" id='about'><div>
      <h1>Who we are</h1>
      <p>
      TechyStar is more than a brand; we're a dynamic team of tech enthusiasts dedicated to innovative solutions. Fueled by passion, integrity, and a commitment to excellence, we thrive on pushing boundaries and shaping a future where technology transforms lives. TechyStar: Redefining Tomorrow.
      </p>
    </div>
    </div>
   <div className="home4" id='brands'>
    <div>
      <h1>Brands</h1>
      <article>
      <div style={{
        animationDelay:"0.3s",
      }}>
        <AiFillGoogleCircle/>
        <p>Google</p>
      </div>

      <div style={{
        animationDelay:"0.5s",
      }}>
        <AiFillAmazonCircle/>
        <p>Amazon</p>
      </div>

      <div style={{
        animationDelay:"0.7s",
      }}>
        <AiFillYoutube/>
        <p>Youtube</p>
      </div>

      <div style={{
        animationDelay:"0.3s",
      }}>
        <AiFillInstagram/>
        <p>Instagram</p>
      </div>
      </article>
    </div>
   </div>
    </>
  )
}

export default Home