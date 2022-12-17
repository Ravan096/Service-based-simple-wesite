import React from 'react';
import vg from "../Assets/Animbg.png";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube
,AiFillInstagram} from "react-icons/ai";

const Home = () => {
  return (
    <>
    <div className='home'>
        <main>
            <h1>LimeTech</h1>
            <p>Solution for all your requirements</p>
        </main>
    </div>
    
    <div className="home2">
        <img src={vg} alt="graphics" />
        <div>
            <p>We are your one and only solution to the tech problems
                you face
                ever day. We are leading tech company whose aim is to
                increase the 
                problem solving ability in children.
            </p>
        </div>
        
    </div>

    <div className='home3' id='about'>
        <div>
        <h1>Who we are?</h1>
        
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicig
            elit. Blanditiis 
            officiis hic illo quos sit commodi aut mangnam odio
            elligendi? Totam
            quis offciis fugit sunt dolores nostrum tenetur iusto
            est odio
             mollitia. Dolor placeat repellendus officia aspernatur
             dolorum.
             Lorem ipsum dolor sit amet consectetur adipisicig
            elit. Blanditiis 
            officiis hic illo quos sit commodi aut mangnam odio
            elligendi? Totam
            quis offciis fugit sunt dolores nostrum tenetur iusto
            est odio
             mollitia. Dolor placeat repellendus officia aspernatur
             dolorum.
             Lorem ipsum dolor sit amet consectetur adipisicig
            elit. Blanditiis 
            officiis hic illo quos sit commodi aut mangnam odio
            elligendi? Totam
            quis offciis fugit sunt dolores nostrum tenetur iusto
            est odio
             mollitia. Dolor placeat repellendus officia aspernatur
             dolorum.
             Lorem ipsum dolor sit amet consectetur adipisicig
            elit. Blanditiis 
            officiis hic illo quos sit commodi aut mangnam odio
            elligendi? Totam
            quis offciis fugit sunt dolores nostrum tenetur iusto
            est odio
             mollitia. Dolor placeat repellendus officia aspernatur
             dolorum.
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
                animationDelay:"1s",
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