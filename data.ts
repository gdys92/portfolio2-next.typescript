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
      name: 'COVID Tracker',
      image_path: '/images/covid.jpg',
      deployed_url: 'https://covid-19-tracker-by-sumit.web.app/',
      github_url: 'https://github.com/Dey-Sumit/covid-19-tracker',
      category: ['react'],
      description:
         'This app shows a statistical view about corona virus through out the world',
      key_points: ['React', 'Chart.js', 'Material UI'],
   },
   {
      id: 7,
      name: 'Algorithm Visualizer',
      //TODO add data
      image_path: '/images/algoVisual.png',
      deployed_url: 'https://visual-algorithm.web.app/',
      github_url: 'https://github.com/Dey-Sumit/algorithm-visualizer',
      category: ['react'],
      description:
         'An web app which shows how an algorithm (path finding or sorting) works with cool animation',
      key_points: ['React', 'firebase', 'Framer Motion'],
   },

   {
      id: 1,
      name: 'Dev Talks',
      image_path: '/images/dev.jpg',
      deployed_url: 'https://dev-talks.herokuapp.com/',
      github_url: 'https://github.com/Dey-Sumit/Dev-talks',
      category: ['node', 'mongo', 'react'],
      description:
         'Social Media app for developers who can share project,create posts,etc...',
      key_points: [
         'React',
         'Redux',
         'Node',
         'Express',
         'Mongo',
         'REST API',
         'Bootstrap',
      ],
   },

   {
      id: 2,
      name: 'Realtime Chat App',
      image_path: '/images/chatapp.jpg',
      deployed_url: 'https://sumit-chat.netlify.app/',
      github_url: 'https://github.com/Dey-Sumit/chat-app-socket.io-react-node',
      //TODO type on category
      category: ['node', 'react'],
      description:
         'Basic Realtime Chat App where one can create a room can talk to each other',
      key_points: ['React', 'Node', 'Express', 'Socket', 'Bootstrap'],
   },

   {
      id: 3,
      name: 'Tweeter Clone',
      image_path: '/images/tweetme.jpg',
      deployed_url: 'http://sumaxtweetme.pythonanywhere.com/',
      github_url: 'https://github.com/Dey-Sumit/tweetme',
      category: ['django', 'react'],
      description:
         'First Django Project :) | Typical Social Media App where one can post,like ,comment etc',
      key_points: ['React', 'Django', 'Django REST API'],
   },
   {
      id: 4,
      name: 'Dev Portfolio',
      image_path: '/images/portfolio.jpg',
      deployed_url: 'http://suprateem.herokuapp.com/',
      category: ['vanilla'],
      github_url: 'https://github.com/Dey-Sumit/tweetme',
      description: 'Hey, You are seeing this project now...Enjoy',
      key_points: ['Next.js', 'Framer Motion', 'TypeScript', 'Tailwind'],
   },

   {
      id: 5,
      name: 'Color Classification using tf.js',
      image_path: '/images/color.jpg',
      deployed_url: '!#',
      github_url: 'https://github.com/Dey-Sumit/color-classification',
      category: ['express', 'ml'],
      description:
         'Tried ML with JS :) | this app classifies a color using CNN algorithm in browser',
      key_points: ['Express', 'TensorFlow.js', 'Vanilla js'],
   },
   {
      id: 6,
      name: 'YouTube using YouTube ',
      image_path: '/images/youtubeClone.png',
      deployed_url: 'https://not-utube.web.app/',
      github_url: 'https://github.com/Dey-Sumit/youtube-clone-tutorial-up',
      category: ['express', 'ml'],
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
      deployed_url: 'https://o-my-goal.web.app/',
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
