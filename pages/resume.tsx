import Bar from '../components/Bar'
import { motion } from 'framer-motion'
import { fadeInUp } from '../animations'
import Head from 'next/head'
import { languages, tools } from '../data'
export default function About() {
   const variants = {
      hidden: {
         opacity: 0,
      },
      visible: {
         opacity: 1,
         transition: {
            delay: 0.1,
            duration: 0.1,
         },
      },
      exit: {
         opacity: 0,
         transition: {
            delay: 0.1,
            ease: 'easeInOut',
         },
      },
   }

   return (
      <motion.div
         className='px-6 py-2'
         variants={variants}
         initial='initial'
         animate='animate'
         exit='exit'>
         <Head>
            <title>Gledys Muguerza | Web Developer | Resume</title>
         </Head>
         <motion.div className='grid gap-6 md:grid-cols-2'>
            <motion.div variants={fadeInUp} animate='animate' initial='initial'>
               <h5 className='my-3 text-2xl font-bold'>Education</h5>
               <div className=''>
                  <h5 className='my-2 text-xl font-bold'>
                  Full Stack Web Development
                  </h5>
                  <p className='font-semibold'>
                  Acamica (2019-2020)
                  </p>
                  <p className='my-3'>
                  HTML AND CSS: Website layout using HTML and apply the
                  styles you want with CSS.
                  JavaScript: Each behavior that happens on a website, define
                  actions, and communicate with external services is captured.
                  BACKEND: Applications that persistently store data will be
                  performed using database management.
                  </p>
               </div>
            </motion.div>
            <motion.div variants={fadeInUp} animate='animate' initial='initial'>
               <h5 className='my-3 text-2xl font-bold'>Experience</h5>
               <div className=''>
                  <h5 className='my-2 text-xl font-bold'>Front-End Developer</h5>
                  <p className='font-semibold'>Cognizant Technology Solutions.</p>
                  <p className='my-3'>
                  • Assemble the visual presentation of the template in PSD or some other format for vector graphics.
                  • MEAN application development (Angular, Express.js, Node.js and MongoDB).
                  • MERN application development (React.js, Express.js, Next.js, Node.js and MongoDB).
                  • Testing in multiple browsers and devices.
                  • Responsive / mobile design.
                  </p>
               </div>
            </motion.div>
         </motion.div>
         {/*Languages & Tools */}
         <div className='grid gap-9 md:grid-cols-2'>
            <div>
               <h5 className='my-3 text-2xl font-bold'>Language & Framework</h5>
               <div className='my-2'>
                  {languages.map((language, i) => (
                     <Bar value={language} key={i} />
                  ))}
               </div>
            </div>

            <div>
               <h5 className='my-3 text-2xl font-bold'>Tools & Softwares</h5>
               <div className='my-2'>
                  {tools.map((tool, i) => (
                     <Bar value={tool} key={i} />
                  ))}
               </div>
            </div>
         </div>

         <div className='grid gap-9 md:grid-cols-2'>
            <div>
               <h5 className='my-3 text-2xl font-bold'>Project management</h5>
               <div className='my-2'>
                  {languages.map((language, i) => (
                     <Bar value={language} key={i} />
                  ))}
               </div>
            </div>

            <div>
               <h5 className='my-3 text-2xl font-bold'>Databases</h5>
               <div className='my-2'>
                  {tools.map((tool, i) => (
                     <Bar value={tool} key={i} />
                  ))}
               </div>
            </div>
         </div>

      </motion.div>
   )
}
