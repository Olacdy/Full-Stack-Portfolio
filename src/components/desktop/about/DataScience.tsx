'use client';

import { FC } from 'react';

import { m } from 'framer-motion';

import {
  lineHeightGrowthVariants,
  lineWidthGrowthVariants,
} from '@/helpers/animations';

import { AboutType } from '@/types/data';

interface DataScienceProps {
  about: AboutType;
}

const DataScience: FC<DataScienceProps> = ({ about }) => {
  return (
    <section
      id='about'
      className='flex flex-col items-center justify-center space-y-16 cursor-default section'>
      <h2 className='text-6xl font-bold text-pine-green dt:mr-20 dark:drop-shadow-sm'>
        About Me
      </h2>
      <div className='relative h-[60vh] dt:mr-20'>
        <m.h3
          className='absolute w-64 text-4xl italic font-medium text-center -top-8 right-[110%] text-pine-green dark:drop-shadow-sm'
          initial={{
            opacity: 0,
            x: '7%',
          }}
          whileInView={{
            opacity: 1,
            x: '-5%',
          }}
          transition={{
            type: 'tween',
            duration: 0.7,
            delay: 1.3,
          }}
          viewport={{
            once: true,
          }}>
          {about.title}
        </m.h3>

        <m.span
          className='absolute -inset-x-[0.75rem] rounded-full w-7 h-7 bg-onyx transition-colors dark:bg-slate-200'
          initial={{
            scale: 0,
          }}
          whileInView={{
            scale: 1,
          }}
          transition={{
            type: 'spring',
            damping: 8,
            duration: 0.7,
            delay: 0.4,
          }}
          viewport={{
            once: true,
          }}
        />

        <m.div
          className='w-1 mt-6 transition-colors bg-onyx dark:bg-slate-200'
          variants={lineHeightGrowthVariants}
          custom={{ lineHeight: '60vh', duration: 1.2, delay: 0.9 }}
          whileInView='animate'
          viewport={{
            once: true,
          }}
        />

        <div className='absolute inset-y-36 -inset-x-[30rem] w-96 h-96'>
          <m.div
            className='absolute top-48 h-px -right-[4.5rem] bg-battleship-gray transition-colors dark:bg-slate-200'
            variants={lineWidthGrowthVariants}
            custom={{ lineWidth: '40px', delay: 1.9 }}
            whileInView='animate'
            viewport={{
              once: true,
            }}
          />
          <m.img
            className='py-6 rounded-lg shadow-xl pointer-events-none bg-slate-50'
            src={about.image?.src}
            alt={about.image?.alt}
            width={440}
            height={440}
            initial={{
              scale: 0,
            }}
            whileInView={{
              scale: 1,
            }}
            transition={{
              type: 'spring',
              duration: 1,
              delay: 1.7,
            }}
            viewport={{
              once: true,
            }}
          />
          <m.div
            className='absolute -inset-x-28 z-[-1] -inset-y-28 w-80 h-80 bg-ruddy-blue rounded-2xl dark:bg-ruddy-blue/60'
            initial={{
              scale: 0,
            }}
            whileInView={{
              scale: 1,
              rotate: '-45deg',
            }}
            transition={{
              type: 'spring',
              duration: 1,
              delay: 2,
            }}
            viewport={{
              once: true,
            }}
          />
        </div>
        <div className='absolute inset-y-24 inset-x-24 w-96 h-96'>
          <m.div
            className='absolute top-36 h-px -left-[4rem] bg-battleship-gray transition-colors dark:bg-slate-200'
            variants={lineWidthGrowthVariants}
            custom={{ lineWidth: '40px', delay: 2.3 }}
            whileInView='animate'
            viewport={{
              once: true,
            }}
          />
          <m.p
            className='text-[1.75rem] leading-[150%] pt-3 italic text-left max-w-[420px] text-onyx transition-colors dark:text-slate-300'
            initial={{
              opacity: 0,
              x: '-15%',
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              type: 'spring',
              duration: 1,
              delay: 2.9,
            }}
            viewport={{
              once: true,
            }}>
            {about.content}
          </m.p>
        </div>
      </div>
    </section>
  );
};

export default DataScience;
