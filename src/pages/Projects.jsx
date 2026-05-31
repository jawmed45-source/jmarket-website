import { useGSAP } from '@gsap/react'
import ProjectCard from '../components/projects/ProjectCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import { useContext } from 'react'
import { NavbarColorContext } from '../context/Navcontext'

// Register once at module level — not inside the component
gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
  const projects = [
    {
      image1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg'
    },
    {
      image1: 'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg'
    },
    {
      image1: 'https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg'
    }
  ]

  const containerRef = useRef(null)

  useGSAP(() => {
    const heroes = gsap.utils.toArray('.hero')

    // Responsive target height based on screen width
    const getTargetHeight = () => {
      const w = window.innerWidth
      if (w < 640) return w * 1.8
      if (w < 768) return w * 1.6
      if (w < 1024) return w * 1.2
      return 750
    }

    const buildTimeline = () => {
      // Kill existing ScrollTrigger instances scoped to this container
      ScrollTrigger.getAll()
        .filter(st => st.trigger === containerRef.current)
        .forEach(st => st.kill())

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 65%',
          end: '+=2000',
          scrub: 1,
        }
      })

      heroes.forEach((hero) => {
        const naturalHeight = hero.scrollHeight  // actual height before animation

        tl.fromTo(
          hero,
          { height: 84 },             // start from real height, no snap
          { height: getTargetHeight(), duration: 1, ease: 'none' }
        )
      })
    }

    buildTimeline()

    // Rebuild on resize so height recalculates correctly
    const handleResize = () => {
      buildTimeline()
      ScrollTrigger.refresh()
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)

  }, { scope: containerRef })

  return (
    <div className='lg:p-4 p-2 mb-[100vh] text-black bg-white w-full'>
      <div className='pt-[45vh]'>
        <h2 className='font-[font2] lg:text-[9.5vw] text-6xl uppercase'>Projects</h2>
      </div>
      <div ref={containerRef} className='lg:mt-0  lol w-full'>
        {projects.map(function (elem, idx) {
          return (
            <div
              key={idx}
              className='hero w-full overflow-hidden mb-4 flex lg:flex-row  lg:gap-4 gap-2'
            >
              <ProjectCard image1={elem.image1} image2={elem.image2} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects