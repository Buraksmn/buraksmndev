import clsx from 'clsx';
import { useEffect, useRef } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';
import { FaReact } from 'react-icons/fa';
import { GrLinkedinOption } from 'react-icons/gr';
import { MdOutlineCake } from 'react-icons/md';
import { useIntersection } from 'react-use';

import { Link } from '@/components/link';
import { useNavContext } from '@/providers/nav-provider';

import { ProfileImage } from '../components/profile-image';

export const ProfileBanner = () => {
  const { setIsNavOpen, isNavOpen } = useNavContext();
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '-150px',
  });

  useEffect(() => {
    if (intersection && setIsNavOpen) {
      setIsNavOpen(!intersection.isIntersecting);
    }
  }, [intersection, setIsNavOpen]);

  return (
    <div
      className={clsx(
        'flex flex-col items-start text-xl transition duration-300',
        {
          'opacity-0': isNavOpen,
          'opacity-100': !isNavOpen,
        }
      )}
      ref={intersectionRef}
    >
      <div className="flex flex-col gap-4 px-4">
        <div
          className={clsx(
            'flex w-full flex-col-reverse items-start justify-between gap-7 pb-5 ',
            'sm:flex-row sm:gap-0'
          )}
        >
          <div className="flex items-center space-x-4">
            <ProfileImage />
            <h1 className="flex flex-col gap-1">
              <span className="text-3xl font-bold">
                Burak Şaman
              </span>
              <code className="font-mono text-base font-medium">
                Frontend Developer
              </code>
            </h1>
          </div>

          <div
            className={clsx(
              'flex items-center space-x-3 self-end text-sm font-bold',
              'sm:-mt-16 sm:self-auto'
            )}
          >
            <Link
              href="https://github.com/Buraksmn"
              external
              leftIcon={<AiFillGithub />}
              variant="icon-button"
            />

            <Link
              href="https://www.linkedin.com/in/buraksmn0/"
              external
              leftIcon={<GrLinkedinOption />}
              variant="icon-button"
            />
          </div>
        </div>

        <p className="text-base">
          I am a software developer who has developed and is
          developing himself in the field of frontend and at the
          same time learning backend and eager to develop
          small-scale projects in this process.
        </p>
        <p className="text-base">
          I mostly use React, React Native and Nextjs
          technologies.
        </p>
        <p className="text-base">
          I find designs from the figma community and make
          improvements in a pixel perfect way
        </p>

        <div
          className={clsx(
            'flex flex-row flex-wrap items-center justify-start gap-5 border-y-[1px] border-gray-600/20',
            'w-full py-3 text-sm font-semibold text-neutral-400/80',
            'sm:justify-between sm:gap-3'
          )}
        >
          <div className="flex items-center gap-1">
            <FaReact size={16} className="fill-rose-100/50" />
            <span>Front end @ESA Esports</span>
          </div>

          <div className="flex items-center gap-1">
            <BiMap size={16} color="fill-rose-100/50" />
            <span>İstanbul | Türkiye</span>
          </div>

          <div className="flex items-center gap-1">
            <MdOutlineCake size={16} color="fill-rose-100/50" />
            <span>18 September</span>
          </div>
        </div>
      </div>
    </div>
  );
};
