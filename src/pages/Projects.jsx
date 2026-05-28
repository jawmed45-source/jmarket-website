import { useGSAP } from '@gsap/react'
import ProjectCard from '../components/projects/ProjectCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef } from 'react'
import { useContext } from 'react'
import { NavbarColorContext } from '../context/Navcontext'


const Projects = () => {
  const projects = [{
    image1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg'
  }, {
    image1: 'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg'
  }, {
    image1: 'https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg'
  }]


  gsap.registerPlugin(ScrollTrigger)

  // useGSAP(function () {
  //   gsap.from('.hero', {
  //     height: '100px',
  //     stagger: {
  //       amount: 0.5
  //     },
  //     scrollTrigger: {
  //       trigger: '.lol',
  //       markers: true,
  //       start: 'top 65%',
  //       end: 'top -100%',
  //       scrub: true
  //     }
  //   })
  // })

  const containerRef = useRef(null)
  useGSAP(() => {
    const heroes = gsap.utils.toArray('.hero')
    

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 65%',       // animation starts when container enters viewport
        end: '+=2000',      // ends when container bottom hits 20% of viewport
        scrub: true,            // tied to scroll — stops when user stops
      }
    })

    // each hero expands one after the other in the same timeline
    heroes.forEach((hero) => {
      tl.fromTo(hero,
        { height: 100 },
        { height: 750, duration: 1, ease: 'none' }
      )
    })

  }, { scope: containerRef })

  return (
    <div className='lg:p-4 p-2 mb-[100vh] text-black bg-white'>
      <div className=' pt-[45vh]'>
        <h2 className='font-[font2] lg:text-[9.5vw] text-6xl uppercase'>Projects</h2>
      </div>
      <div ref={containerRef}  className='-lg:mt-20 lol'>
        {projects.map(function (elem, idx) {
          return <div key={idx} className='hero lg:w-full overflow-hidden mb-4 flex lg:flex-row flex-col w-[191vw] lg:gap-4 gap-2'>
            <ProjectCard image1={elem.image1} image2={elem.image2} />
          </div>
        })}

      </div>
    </div>
  )
}

export default Projects