import React, { useEffect } from 'react';
import { About } from '../About/About';
import { Blogs } from '../Blogs/Blogs';
import { CardCredit } from '../CardCredit/CardCredit';
import { Contact } from '../Contact/Contact';
import { Download } from '../Download/Download';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Home } from '../Home/Home';
import { Newsletter } from '../Newsletter/Newsletter';
import { Partners } from '../Partners/Partners';
import { Reviews } from '../Reviews/Reviews';
import { Steps } from '../Steps/Steps';

export function HomePage(): JSX.Element {
  // Ref para os elementos do DOM
  const headerRef = React.useRef<HTMLHeadingElement>(null);
  const navbarRef = React.useRef<HTMLElement>(null);
  const menuBtnRef = React.useRef<HTMLDivElement>(null);
  const slidesRef = React.useRef<NodeListOf<HTMLElement> | null>(null);

  useEffect(() => {
    const header = headerRef.current;
    const navbar = navbarRef.current;
    const menuBtn = menuBtnRef.current;

    if (menuBtn && navbar) {
      menuBtn.onclick = () => {
        navbar.classList.toggle('fa-xmark');
        navbar.classList.toggle('active');
      };
    }

    const handleScroll = () => {
      if (navbar) {
        navbar.classList.remove('fa-xmark');
        navbar.classList.remove('active');
      }

      if (header) {
        if (window.scrollY > 0) {
          header.classList.add('active');
        } else {
          header.classList.remove('active');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Limpar o evento de scroll no unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Carregar os slides após a montagem do componente
  useEffect(() => {
    slidesRef.current = document.querySelectorAll(
      '.reviews .row .slider-container .slide'
    );
  }, []);
  return (
    <>
      <Header />
      <Home />
      <Partners />
      <About />
      <CardCredit />
      <Steps />
      <Reviews />
      <Download />
      <Contact />
      <Blogs />
      <Newsletter />
      <Footer />
    </>
  );
}
