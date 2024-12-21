import { Icons } from '@/components/icons'
import { HomeIcon, NotebookIcon } from 'lucide-react'

export const DATA = {
  name: 'Ade Bagas Wicaksono',
  initials: 'Gaks',
  url: 'https://adebagas.my.id/',
  location: 'Yogyakarta City',
  locationLink: 'https://www.google.com/maps/place/yogyakarta',
  description:
    'Student want to be Programmer. I have many projects using Typescript and other languages. Currently I am learning about PHP and Laravel framework.',
  summary:
    'Currently attending SMK Negeri 2 Yogyakarta as a 12th-grade student majoring in Sistem Informasi Jaringan dan Aplikasi (SIJA), which focuses on building, managing, and securing computer networks, as well as developing software applications. Proficient in frontend technologies such as HTML, CSS, React, Next.js, and Tailwind CSS for creating responsive user interfaces, and backend technologies like Node.js, Express.js, and tRPC for building servers and APIs, with MySQL for database management.',
  avatarUrl: '/me.png',
  skills: [
    'React',
    'Next.js',
    'Typescript',
    'Node.js',
    'MySQL',
    'Express',
    'tRPC',
    'PostgreSQL',
    'Tailwind',
  ],
  navbar: [
    { href: '/', icon: HomeIcon, label: 'Home' },
    { href: '/blog', icon: NotebookIcon, label: 'Blog' },
  ],
  contact: {
    email: 'dwi66116@gmail.com',
    tel: '+123456789',
    social: {
      GitHub: {
        name: 'GitHub',
        url: 'https://github.com/Gaks3',
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/ade-bagas-wicaksono/',
        icon: Icons.linkedin,

        navbar: true,
      },
      Instagram: {
        name: 'Instagram',
        url: 'https://www.instagram.com/gaks_3/',
        icon: Icons.instagram,

        navbar: true,
      },
      email: {
        name: 'Send Email',
        url: '#',
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  education: [
    {
      school: 'SMK Negeri 2 Yogyakarta',
      href: 'https://www.smk2-yk.sch.id/',
      degree: 'Jurusan Sistem Informasi Jaringan dan Aplikasi',
      logoUrl: '/smk2yk.jpeg',
      start: '2022',
      end: 'Present',
    },
  ],
  projects: [
    {
      title: 'PGRI DIY',
      href: 'https://pgridiy.or.id',
      dates: 'Mar 2024 - Apr 2024',
      active: true,
      description:
        'This site provides information on various activities, programs, and initiatives undertaken by PGRI DIY to improve the professionalism and welfare of teachers in the Yogyakarta region.',
      technologies: [
        'Next.js',
        'Typescript',
        'MySQL',
        'Prisma',
        'tRPC',
        'TailwindCSS',
        'Shadcn UI',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://pgridiy.or.id',
          icon: <Icons.globe className='size-3' />,
        },
      ],
      image: '/pgri.png',
    },
    {
      title: 'Harja Smart Greenhouse',
      href: 'https://harjasmartgreen.com/',
      dates: 'Sep 2024 - Oct 2024',
      active: true,
      description:
        'Harja Smart Greenhouse offers greenhouse solutions with renewable technology. An innovative solution to modern agriculture and food security.',
      technologies: [
        'Next.js',
        'Typescript',
        'MySQL',
        'Prisma',
        'tRPC',
        'TailwindCSS',
        'MQTT',
        'Shadcn UI',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://harjasmartgreen.com',
          icon: <Icons.globe className='size-3' />,
        },
        {
          type: 'Source',
          href: 'https://github.com/Gaks3/harja',
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: '/harjasmart.png',
    },
    {
      title: 'TeForm',
      href: '',
      dates: 'Apr 2024',
      active: false,
      description:
        'Website to create a questionnaire in general. Get answers from users who fill in. Dashboard for admin who can control all questionnaires and forms.',
      technologies: [
        'Next.js',
        'Typescript',
        'MySQL',
        'Prisma',
        'TailwindCSS',
        'Shadcn UI',
      ],
      links: [
        {
          type: 'Source',
          href: 'https://github.com/Gaks3/teform',
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: '/teform.png',
    },
    {
      title: 'Anime List',
      href: '',
      dates: 'Dec 2023',
      active: false,
      description:
        'Anime collection website whose data comes from jikanAPI. It features authentication, bookmarking, and managing watches such as episodes.',
      technologies: [
        'Next.js',
        'Typescript',
        'MySQL',
        'Prisma',
        'TailwindCSS',
        'Jikan API',
      ],
      links: [
        {
          type: 'Source',
          href: 'https://github.com/Gaks3/AList',
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: '/animelist.png',
    },
  ],
  activity: [
    {
      title: 'Amikom IITC Optimization SEO and CDN',
      dates: 'September 8, 2024',
      description:
        'Frontend Supercharged: SSR Secrets for SEO and CDN Optimization for Fast and Interactive Websites.',
      image: '/iitc.png',
      links: [
        {
          title: 'IITC',
          icon: <Icons.globe className='h-4 w-4' />,
          href: 'https://iitc.intermediaamikom.org/',
        },
      ],
    },
    {
      title: 'Amikom HMIF Dedicated to School',
      dates: 'July 25 - 26, 2024',
      description:
        'HMIF is working with UKM AMCC to provide students with material on web programming using ReactJS technology.',
      image: '/hmif.png',
      links: [
        {
          title: 'HMIF',
          icon: <Icons.globe className='h-4 w-4' />,
          href: 'https://www.hmifamikom.com/',
        },
      ],
    },
    {
      title: 'UKDW ISCD Python Coding Adventure',
      dates: 'May 18, 2024',
      description:
        'Python Coding Adventure: Starting Your Coding Journey With Python. Discusses the Python programming language and its future uses.',
      image: '/iscd.png',
      links: [],
    },
    {
      title: 'Skilvul Javascript Intermediete (Gold)',
      dates: 'May 3, 2024',
      description:
        'Learn how to make a website more interactive by adding some programs written using JavaScript. ',
      image: '/skilvul.png',
      links: [
        {
          title: 'Skilvul',
          icon: <Icons.globe className='h-4 w-4' />,
          href: 'https://skilvul.com',
        },
      ],
    },
    {
      title: 'SMK Coding Slicing Brawl',
      dates: 'December 20, 2024',
      description:
        'Create a web page design based on the question image. Use HTML, CSS, and JavaScript to implement the design.',
      image: '/smkcoding.png',
      links: [
        {
          title: 'SMK Coding',
          icon: <Icons.globe className='h-4 w-4' />,
          href: 'https://smkcoding.id/',
        },
      ],
    },
  ],
} as const
