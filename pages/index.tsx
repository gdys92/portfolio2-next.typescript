import { motion } from 'framer-motion'
import Head from 'next/head'

import ServiceCard from '../components/ServiceCard'
import { pageAnimation, stagger, fadeInUp } from '../animations'
import { services } from '../data'

const About = () => {
   return (
      <motion.div
         className='flex flex-col flex-grow px-6 pt-1'
         variants={pageAnimation}
         initial='hidden'
         animate='visible'
         exit='exit'>
         <Head>
            <title>Gledys Muguerza | Web Developer | About</title>
         </Head>

         <h6 className='my-3 text-base font-medium'>
             I have 4+ years of
            experience in Web Development
         </h6>
         <div
            className='flex-grow p-4 mt-5 bg-gray-400 dark:bg-black-100'
            style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}>
            <h4 className='my-3 text-xl font-semibold tracking-wide'>
               What I am doing
            </h4>

            <motion.div
               className='grid gap-6 my-3 md:grid-cols-2'
               variants={stagger}
               animate='animate'
               initial='initial'>
               {/* children's initial and animate property should be same as the parent during a stagger effect  */}
               {services.map(service => (
                  <motion.div
                     variants={fadeInUp}
                     className='col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-black-500 lg:col-span-1 '
                     key={service.title}>
                     <ServiceCard service={service} />
                  </motion.div>
               ))}
            </motion.div>
         </div>
      </motion.div>
   )
}

export default About

