import React, { useState } from 'react'
import { motion } from 'framer-motion'

import ProjectCard from '../components/ProjectCard'
import { projects as projectsData } from '../data'
import { pageAnimation, fadeInUp, stagger } from '../animations'
import Head from 'next/head'
import { Category } from '../types'
const Projects = () => {
   const [projects, setProjects] = useState(projectsData)
   const [active, setActive] = useState('All')

   const handleFilterCategory = (category: Category | 'All') => {
      if (category === 'All') {
         setProjects(projectsData)
         setActive(category)
         return
      }

      const new_array = projectsData.filter(project =>
         project.category.includes(category)
      )

      setProjects(new_array)
      setActive(category)
   }

   return (
      <motion.div
         className='px-5 py-2 overflow-y-scroll '
         style={{ height: '65vh' }}
         variants={pageAnimation}
         animate='visible'
         initial='hidden'
         exit='exit'>
         <Head>
            <title>Gledys Muguerza | Web Developer | Projects</title>
         </Head>
         {/* Projects Navbar */}
         <nav className='flex px-3 py-2 space-x-3 overflow-x-auto list-none'>
            {/* //use className */}
            <li
               className={`cursor-pointer hover:text-pouple ${
                  active === 'All' ? 'text-pouple' : ''
               }`}
               onClick={() => handleFilterCategory('All')}>
               All
            </li>
            <li
               className={`cursor-pointer hover:text-pouple ${
                  active === 'react' ? 'text-pouple' : ''
               }`}
               onClick={() => handleFilterCategory('react')}>
               React
            </li>

            <li
               className={`cursor-pointer hover:text-pouple ${
                  active === 'next' ? 'text-pouple' : ''
               }`}
               onClick={() => handleFilterCategory('next')}>
               Next
            </li>

            <li
               className={`cursor-pointer hover:text-pouple ${
                  active === 'angular' ? 'text-pouple' : ''
               }`}
               onClick={() => handleFilterCategory('angular')}>
               Angular
            </li>

            <li
               className={`cursor-pointer hover:text-pouple ${
                  active === 'mongo' ? 'text-pouple' : ''
               }`}
               onClick={() => handleFilterCategory('mongo')}>
               Mongo
            </li>

            <li
               className={`cursor-pointer hover:text-pouple ${
                  active === 'mysql' ? 'text-pouple' : ''
               }`}
               onClick={() => handleFilterCategory('mysql')}>
               MySql
            </li>

            <li
               className={`cursor-pointer hover:text-pouple ${
                  active === 'express' ? 'text-pouple' : ''
               }`}
               onClick={() => handleFilterCategory('express')}>
               Express{' '}
            </li>

            <li
               className={`cursor-pointer hover:text-pouple ${
                  active === 'typescript' ? 'text-pouple' : ''
               }`}
               onClick={() => handleFilterCategory('typescript')}>
               TypeScrip
            </li>

            <li
               className={`cursor-pointer hover:text-pouple ${
                  active === 'javascript' ? 'text-pouple' : ''
               }`}
               onClick={() => handleFilterCategory('javascript')}>
               JavaScript
            </li>

         </nav>

         <motion.div
            className='relative grid grid-cols-12 gap-4 my-3'
            variants={stagger}
            initial='initial'
            animate='animate'>
            {/* <AnimatePresence> */}
            {projects.map(project => (
               <motion.div
                  variants={fadeInUp}
                  key={project.id}
                  className='col-span-12 p-2 bg-gray-200 rounded-lg dark:bg-black-500 sm:col-span-6 lg:col-span-4'>
                  <ProjectCard project={project} key={project.id} />
               </motion.div>
            ))}
            {/* </AnimatePresence> */}
         </motion.div>
      </motion.div>
   )
}

export default Projects
