import React from 'react';
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
  },
  {
    id: 2,
    url: '/pages',
    text: 'pages',
  },
  {
    id: 3,
    url: '/models',
    text: 'models',
  },
  {
    id: 4,
    url: '/appointment',
    text: 'appointment',
  },
  {
    id: 5,
    url: '/faq',
    text: 'faq',
  },
  {
    id: 6,
    url: '/contact',
    text: 'contact',
  },
];

export const social = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.twitter.com',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'https://www.twitter.com',
    icon: <FaBehance />,
  },
];
