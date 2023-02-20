import Link from "next/link";
import style from './Navbar.module.css';
import { ActiveLink } from "./ActiveLink";

export const Navbar = () => {

  const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];

  return (
    <nav className={style['menu-container']}>
      {
        menuItems.map(({ href,text }) => <ActiveLink key={href} text={text} href={href}/>)
      }        
    </nav>
  );
}
