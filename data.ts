import { RiComputerLine } from 'react-icons/ri'
import { FaServer } from 'react-icons/fa'
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai'
import { MdDeveloperMode } from 'react-icons/md'
import { BsCircleFill } from 'react-icons/bs'
import { DiDatabase } from 'react-icons/di'

import { Project, Service, Skill, Data } from './types'

const services: Service[] = [
   {
      Icon: RiComputerLine,
      title: 'Frontend Development',
      about:
         'I can build a beautiful and scalable SPA using <b> HTML</b>, <b>CSS</b>, <b>Angular.js</b> and <b>React.js</b>. ',
   },
   {
      Icon: FaServer,
      title: 'Backend  Development',
      about:
         'handle database, server, api using <b>Express </b> framework.',
   },
   {
      Icon: AiOutlineApi,
      title: 'API Development',
      about:
         'I can develop robust  REST API using <b>Node API</b> ',
   },
   {
      Icon: DiDatabase,
      title: 'Database',
      about:
         'Using <b>SQL</b> and <b>NoSql</b> database.',
   },
   {
      Icon: AiOutlineAntDesign,
      title: 'UI/UX designer',
      about:
         'Using <b>Inkscape</b> vector graphics editor software and <b>Photopea</b> an online photo editor.',
   },
   {
      Icon: MdDeveloperMode,
      title: 'Competitive Coder',
      about:
         'A daily problem solver in <b>FreeCodeCamp</b>  and <b>LeetCode</b> ',
   },
]

const languages: Skill[] = [
   {
      Icon: BsCircleFill,
      name: 'JavaScript',
      level: '95',
   },
   {
      Icon: BsCircleFill,
      name: 'TypeScript',
      level: '80',
   },
   {
      Icon: BsCircleFill,
      name: 'React',
      level: '90',
   },
   {
      Icon: BsCircleFill,
      name: 'Angular',
      level: '87',
   },
   {
      Icon: BsCircleFill,
      name: 'Express',
      level: '90',
   },
   {
      Icon: BsCircleFill,
      name: 'Bootstrap',
      level: '90',
   },
   {
      Icon: BsCircleFill,
      name: 'Next',
      level: '80',
   },

]

const tools: Skill[] = [
   {
      Icon: BsCircleFill,
      name: 'Postman',
      level: '85',
   },
   {
      Icon: BsCircleFill,
      name: 'Inkscape',
      level: '95',
   },
   {
      Icon: BsCircleFill,
      name: 'Photopea',
      level: '75',
   },
]


const database: Data[] = [
   {
      Icon: BsCircleFill,
      name: 'MongoDB',
      level: '95',
   },
   {
      Icon: BsCircleFill,
      name: 'MySQL',
      level: '90',
   },
   {
      Icon: BsCircleFill,
      name: 'PostgreSQL',
      level: '75',
   }
]

const projects: Project[] = [
   {
      id: 0,
      name: 'MEAN Photo Gallery',
      image_path: '/images/mean-photo-galery.png',
      deployed_url: '!#',
      github_url: 'https://github.com/gdys92/MEAN-photo-gallery',
      category: ['angular', 'typescript'],
      description:
         'Full Stack MEAN application using Angular, Node.js, Express, MongoDB & Typescript',
      key_points: ['Angular', 'Mongo', 'TypeScript'],
   },
   {
      id: 7,
      name: 'React weather app',
      //TODO add data
      image_path: '/images/weather-app.png',
      deployed_url: '!#',
      github_url: 'https://github.com/gdys92/react-weather-app',
      category: ['react', 'typescript'],
      description:
         'Weather application using React, Redux & Typescript.',
      key_points: ['React', 'Mongo', 'TypeScript'],
   },

   {
      id: 1,
      name: 'Universal History Questionnaire.',
      image_path: '/images/Cuestionario-de-Historia.png',
      deployed_url: 'https://gdys92.github.io/Cuestionario-de-Historia/index.html',
      github_url: 'https://github.com/gdys92/Cuestionario-de-Historia',
      category: ['javascript'],
      description:
         'Universal History Questionnaire',
      key_points: ['JavaScript'],
   },

   {
      id: 2,
      name: 'The Rolling Stone Tour',
      image_path: '/images/the-rolling-stone.png',
      deployed_url: 'https://gdys92.github.io/node-website/express/index.html',
      github_url: 'https://github.com/gdys92/node-website',
      //TODO type on category
      category: ['express'],
      description:
         'Rolling Stone ticket sales website created with Node.js y Express.',
      key_points: ['Node', 'Express'],
   },

   {
      id: 3,
      name: 'GifOs',
      image_path: '/images/Gifs.png',
      deployed_url: 'https://gdys92.github.io/GifOs/index.html',
      github_url: 'https://github.com/gdys92/GifOs',
      category: ['javascript'],
      description:
         'Website using Giphy API.',
      key_points: ['JavaScript'],
   },
   {
      id: 4,
      name: 'Dev Portfolio',
      image_path: '/images/portfolio.jpg',
      deployed_url: '!#',
      category: ['javascript'],
      github_url: 'https://github.com/Dey-Sumit/tweetme',
      description: 'Hey, You are seeing this project now...Enjoy',
      key_points: ['Next.js', 'Framer Motion', 'TypeScript', 'Tailwind'],
   },

   {
      id: 5,
      name: 'Angular shooping list',
      image_path: '/images/shooping-list.png',
      deployed_url: '!#',
      github_url: 'https://github.com/gdys92/angular-shopping-list',
      category: ['express', 'angular'],
      description:
         'Shooping list made with Angular, Express & Typescript.',
      key_points: ['Angular', 'Express', 'TypeScript'],
   },
   {
      id: 6,
      name: 'YouTube using YouTube ',
      image_path: '/images/youtubeClone.png',
      deployed_url: '!#',
      github_url: 'https://github.com/Dey-Sumit/youtube-clone-tutorial-up',
      category: ['express', 'mysql'],
      description:
         'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
      key_points: [
         'React',
         'Redux',
         'Firebase Auth',
         'YouTube API',
         'Sass',
         'Bootstrap',
      ],
   },
   {
      id: 9,
      name: 'Football App',
      //TODO add image,github,dep url
      image_path: '/images/football.png',
      deployed_url: '!#',
      github_url: 'https://github.com/Dey-Sumit/football-app',
      category: ['react'],
      description:
         'o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ',
      key_points: [
         'React',
         'Redux',
         'Firebase Auth',
         'API',
         'Sass',
         'Bootstrap',
      ],
   },
]

export { tools, languages, services, projects, database }
