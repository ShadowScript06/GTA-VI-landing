import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'


function Postcard() {
    const videoRef=useRef(null);
    useGSAP(()=>{
        const tl=gsap.timeline({
            scrollTrigger:{
                trigger:'.post-card',
                start:'top center',
                end:'bottom center',
                scrub:true
            }
        });

        videoRef.current.onloadedmetadata=()=>{
            tl.to(videoRef.current, {currentTime:videoRef.current?.duration, duration:5, ease:"power1.inOut"})
        }
    })
    

  return (
    <section className='post-card'>
        <div className='animated-gradient-bg'/>
        <div className='post-card-wrapper group-hover:rotate-1 hover:scale-[1.02] transition duration-700'>
        <img src="/images/overlay.webp" alt="" />
        <video ref={videoRef} autoPlay muted playsInline preload='auto'  src="/videos/postcard-vd.mp4"/>

        <button className='group-hover:bg-yellow '>
            Explore Leonida Keys
        </button>
        </div>
    </section>
  )
}

export default Postcard