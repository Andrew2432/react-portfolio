import React, { useState, useEffect } from 'react';
import NavButton from './NavButton/NavButton';
import HeadLink from './HeadLink/HeadLink';
import './Header.scss';

function Header(props) {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [scrollHeight, setScrollHeight] = useState(
    document.documentElement.scrollTop || document.body.scrollTop
  );
  const [canChangeColor, setCanChangeColor] = useState(false);
  const [prevScrollPos, setPreviousScrollPos] = useState(window.pageYOffset);
  const [canHideNavbar, setCanHideNavbar] = useState(false);

  window.addEventListener('resize', () => setScreenSize(window.innerWidth));

  window.onscroll = () => {
    setScrollHeight(
      document.documentElement.scrollTop || document.body.scrollTop
    );
    if (window.pageYOffset < prevScrollPos) {
      setCanHideNavbar(false);
    } else {
      setCanHideNavbar(true);
    }
    setPreviousScrollPos(window.pageYOffset);

    // Highlight nav link on scroll
    let fromTop = window.scrollY;

    document.querySelectorAll('nav ul li a').forEach((link) => {
      let section = document.querySelector(link.hash);

      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        link.classList.add('current');
      } else {
        link.classList.remove('current');
      }
    });

    document
      .querySelectorAll('nav-sidebar-inner-inner show ul li')
      .forEach((link) => {
        let section = document.querySelector(link.hash);

        if (
          section.offsetTop <= fromTop &&
          section.offsetTop + section.offsetHeight > fromTop
        ) {
          link.classList.add('current');
        } else {
          link.classList.remove('current');
        }
      });
  };

  useEffect(() => {
    if (scrollHeight >= 500) {
      setCanChangeColor(true);
    } else {
      setCanChangeColor(false);
    }
  }, [scrollHeight]);

  return (
    <header>
      <nav
        className={`nav ${canChangeColor && 'show'} ${canHideNavbar && 'hide'}`}
      >
        <div className={`nav-logo ${canChangeColor && 'show'}`}>
          <a href="/">
            <i className={`fas fa-code fa-1x`}></i>
          </a>
        </div>
        <div>
          {screenSize > '600' ? (
            <HeadLink scroll={canChangeColor && 'scroll'} />
          ) : (
            <NavButton
              scroll={canChangeColor && 'scroll'}
              hide={canHideNavbar && 'hide'}
            />
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
