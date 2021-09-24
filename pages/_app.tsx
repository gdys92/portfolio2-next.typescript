import { ThemeProvider } from 'next-themes'
import { AnimatePresence } from 'framer-motion'

import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import '../styles/index.css'
import Head from 'next/head'

function MyApp({ Component, pageProps, router }) {
   return (
      <ThemeProvider attribute='class'>
         <Head>
            {' '}
            <title>Full Stack Web Developer | Frontend Developer | Web Designer</title>
            <meta
               name='description'
               content='MERN stack developer looking for a job'
            />
            <meta
               name='keywords'
               content='Full Stack Web Developer, MERN developer, MEAN developer'
            />
            <meta
               name='viewport'
               content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'
            />
            <meta name='description' content='Description' />
            <meta name='keywords' content='Keywords' />
            <link rel='manifest' href='/manifest.json' />
            <link
               href='/favicon.png'
               rel='icon'
               type='image/png'
               sizes='16x16'
            />
            <link rel='apple-touch-icon' href='/favicon.png'></link>
            <meta name='theme-color' content='#317EFB' />
            {/* <meta name='robots' content='index,follow' /> */}
         </Head>
         {/* //TODO add better box shadow */}
         <div className='grid grid-cols-12 gap-6 px-5 font-serif my-14 lg:mb-0 md:mb-16 sm:px-20 md:px-32 lg:px-36 xl:px-48 '>
            <div className='h-full col-span-12 p-4 font-sans text-base text-center bg-white shadow-custom-light dark:shadow-custom-dark lg:col-span-3 rounded-2xl dark:bg-black-300 dark:text-white'>
               <Sidebar />
            </div>  

            <div className='flex flex-col col-span-12 overflow-hidden bg-white shadow-md rounded-2xl dark:text-white shadow-custom-light dark:shadow-custom-dark dark:bg-black-300 lg:col-span-9'>
               <Navbar />
               <AnimatePresence exitBeforeEnter>
                  <Component {...pageProps} key={router.route} />
               </AnimatePresence>
            </div>
         </div>
      </ThemeProvider>
   )
}

export default MyApp



