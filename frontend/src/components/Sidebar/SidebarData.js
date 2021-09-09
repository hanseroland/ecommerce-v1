import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as BiIcons from 'react-icons/bi';
import * as GiIcons from 'react-icons/gi';
import * as MdIcons from 'react-icons/md';
import * as SiIcons from 'react-icons/si';





export const SidebarData = [
  {
    title: 'Accueil',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Nouveautés',
        path: '/detail-categorie',
        icon: <AiIcons.AiFillStar />
      },
      {
        title: 'Tendances',
        path: '/detail-categorie',
        icon: <BiIcons.BiTrendingUp />
      },
      {
        title: 'Promotions',
        path: '/detail-categorie',
        icon: <BiIcons.BiTrendingDown />
      }
    ]
  },
  {
    title: 'Catégories',
    path: '/detail-categorie',
    icon: <BiIcons.BiSelectMultiple />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Mode accessoires',
        path: '/detail-categorie',
        icon: <GiIcons.GiAmpleDress />,
        cName: 'sub-nav'
      },
      {
        title: 'Friperie',
        path: '/detail-categorie',
        icon: <GiIcons.GiTrousers />,
        cName: 'sub-nav'
      },
      {
        title: 'Informatique',
        path: '/detail-categorie',
        icon: <MdIcons.MdComputer />
      },
      {
        title: 'Cuisine et maison',
        path: '/detail-categorie',
        icon: <MdIcons.MdKitchen />
      },
      {
        title: 'High-Tech',
        path: '/detail-categorie',
        icon: <FaIcons.FaMobileAlt />
      },
      {
        title: 'Sport',
        path: '/detail-categorie',
        icon: <BiIcons.BiFootball />
      },
      {
        title: 'Hygiène et santé',
        path: '/detail-categorie',
        icon: <GiIcons.GiHealing />
      },
      {
        title: 'Beauté et bien-être',
        path: '/detail-categorie',
        icon: <GiIcons.GiPerfumeBottle />
      },
      {
        title: 'Bébé',
        path: '/detail-categorie',
        icon: <FaIcons.FaBaby />
      },
      {
        title: 'Épicerie',
        path: '/detail-categorie',
        icon: <GiIcons.GiButter />
      }
    ]
  },
  {
    title: 'Panier',
    path: '/panier',
    icon: <FaIcons.FaCartPlus />
  },
 
  {
    title: 'Paramètres',
    path: '/parametres',
    icon: <AiIcons.AiFillSetting />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Se connecter',
        path: '/parametres/se-connecter',
        icon: <AiIcons.AiOutlineLogin />
      },
      {
        title: "S'inscrire",
        path: '/parametres/s-inscrire',
        icon: <SiIcons.SiGnuprivacyguard />
      },
      {
        title: "Mon compte",
        path: '/parametres/mon-compte',
        icon: <MdIcons.MdAccountCircle />
      },
      {
        title: "Service client",
        path: '/parametres/service-client',
        icon: <RiIcons.RiCustomerService2Fill />
      }
    ]
  },
  
]; 