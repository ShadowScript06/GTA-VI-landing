import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'

function Final() {
  const videoRef=useRef(null);
   useGSAP(() => {
   
    
    gsap.set('.final-content', {  opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.final',
        start: 'top top',
        end: '90% top',
        scrub: true,
        pin: true,
      }
    })

    const tl2=gsap.timeline({
      scrollTrigger:{
        trigger:'.final',
        start:"",
        end:"",
        scrub:true
      }
    })

   
    
    tl2.to('.final-content', { opacity: 1, duration: 1, ease: 'power1.inOut' });

    videoRef.current.onloadedmetadata = () => {
      tl.to(videoRef.current, { currentTime: videoRef.current.duration, duration: 3, ease: 'power1.inOut' }, '<');
    }
  }, []);
  return (
     <section className="final">
      <div className='final-content size-full'>
           <video 
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/output3.mp4"
          className="size-full object-cover"
        />
      </div>
      
    </section>
  )
}

export default Final