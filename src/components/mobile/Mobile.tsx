'use client';

import { LazyMotion, domAnimation } from 'framer-motion';

import ContactMobile from '@/components/mobile/Contact';
import HeaderMobile from '@/components/mobile/Header';
import HeroMobile from '@/components/mobile/Hero';
import SkillsMobile from '@/components/mobile/Skills';
import WorkMobile from '@/components/mobile/Work';
import AboutMobile from '@/components/mobile/about/About';

const Mobile = () => {
  return (
    <main className='relative flex flex-col items-center justify-between w-full lg:hidden overflow-x-clip'>
      <LazyMotion features={domAnimation}>
        <HeaderMobile />
        <HeroMobile />
        <SkillsMobile />
        <AboutMobile />
        <WorkMobile />
        <ContactMobile />
      </LazyMotion>
    </main>
  );
};

export default Mobile;
