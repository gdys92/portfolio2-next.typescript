import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { GiTie } from 'react-icons/gi'
import { SiGmail } from 'react-icons/si'
import { useTheme } from 'next-themes'

export default function Sidebar() {
   const { theme, setTheme } = useTheme()

   const changeMode = () => {
      setTheme(theme === 'light' ? 'dark' : 'light')
   }

   return (
      <>
         <img
            src='https://media-exp1.licdn.com/dms/image/C4D03AQHyNgACMvBD4w/profile-displayphoto-shrink_800_800/0/1590507367711?e=1620259200&v=beta&t=uHOa8RKH2aDJx30c_VO3qHQIwwm1z-YpzYbda5DAsHQ'
            alt='avatar'
            className='w-32 h-32 mx-auto border rounded-full'
         />
         <h3 className='my-4 text-3xl font-bold tracking-wider font-montserrat'>
            <span className='text-pouple '>Gledys</span> Muguerza
         </h3>
         <p className='px-2 py-1 my-3 font-medium bg-gray-200 rounded-full dark:bg-black-500'>
         Full Stack Web Developer
         </p>
         {/* Resume */}
         <a
            href='./assets/CV-GLEDYS-MUGUERZA.pdf'
            download='CV-GLEDYS-MUGUERZA.pdf'
            className='flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-black-500'>
            <GiTie className='w-6 h-6' />
            <span>Download Resume</span>
         </a>

         {/* Socials */}
         <div className='flex justify-around w-9/12 mx-auto my-5 text-pouple md:w-full '>
            <a href='https://www.linkedin.com/in/gledys-muguerza/?locale=en_US'>
               <AiFillLinkedin className='w-8 h-8 cursor-pointer' />
            </a>
            <a href='https://github.com/gdys92'>
               <AiFillGithub className='w-8 h-8 cursor-pointer' />{' '}
            </a>
            <a href='mailto:gdys92@gmail.com'>
               <SiGmail className='w-8 h-8 cursor-pointer' />{' '}
            </a>
         </div>

         {/* Contacts */}
         <div
            className='py-4 my-5 bg-gray-200 dark:bg-black-500'
            style={{ marginLeft: '-1rem', marginRight: '-1rem' }}>
            <div className='flex items-center justify-center'>
             <span className='my-2'>Buenos Aires, Argentina </span>
            </div>
            <p className='my-2'> +54 1132126898 </p>
         </div>

         {/* Dark-mode Button */}
         <button
            onClick={() => changeMode()}
            className='w-8/12 px-5 py-2 my-4 text-white rounded-full cursor-pointer bg-gradient-to-r from-pouple to-blue-500 focus:outline-none hover:scale-105 '>
            {/* //TODO something better */}
            {theme === 'light' ? 'Dark UI' : 'Light UI'}
         </button>
      </>
   )
}
