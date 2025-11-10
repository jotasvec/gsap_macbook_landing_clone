import { useRef } from 'react'
import { performanceImages, performanceImgPositions } from '../constants'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useMediaQuery } from 'react-responsive';

const Performance = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });
    const sectionRef = useRef(null);

    useGSAP(() => {
        if(!sectionRef.current) return
        //text animation
        gsap.fromTo(
            ".content p",
            { opacity: 0, y: 10 },
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "power1.out",
                scrollTrigger:{
                    trigger: '.content p',
                    start: "top top",
                    end: 'top center',
                    scrub: true,
                    toggleActions: "play none none reverse",
                    invalidateOnRefresh: true,
                }
            }
        );
        if (isMobile) return;
        const timeline = gsap.timeline({
            defaults: { 
                ease: 'power1.inOut', 
                duration: 2,
                overwrite: "auto"
             },
             scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",
                end: 'center top',
                scrub: 1,
                invalidateOnRefresh: true,
             },
        });

        // prepare images and animate to their final positions
        performanceImgPositions.forEach((item) => {  
            //doesn't apply to P5
            if(item.id === 'p5') return;
            // initial pos 
            //gsap.set(`.${pos.id}`, {y:100, autoAlpha: 0})
            const toVars = {};

            if(item.left !== undefined ) toVars.left = `${item.left}%`;
            if(item.right !== undefined ) toVars.right = `${item.right}%`;
            if(item.bottom !== undefined ) toVars.bottom = `${item.bottom}%`;
            if(item.transform ) toVars.transform = item.transform;
            timeline.to(`.${item.id}`, toVars, 0)
        })
    }, {scope: sectionRef, dependencies: [isMobile]});

    return (
        <section id="performance" ref={sectionRef}>
            <h2>Next-level graphics performance. Game on.</h2>
            <div className='wrapper'>
                { performanceImages.map((image) => (
                    <img 
                        key={image.id} 
                        className={image.id}
                        src={image.src} 
                        alt={image.id} 
                    />
                ))}
            </div>
            <div className="content">
                <p>
                    Run graphics-intensive workflows with a responsiveness that keeps up with your imagination. The M4 family of chips features a GPU with a second-generation hardware-accelerated ray tracing engine that renders images faster, so 
                    {' '}<span className='text-white'>gaming feels more immersive and realistic than ever</span>.{' '}

                    And Dynamic Caching optimizes fast on-chip memory to dramatically increase average GPU utilization — driving a huge performance boost for the most demanding pro apps and games.
                </p>
            </div>
        </section>
  )
}

export default Performance