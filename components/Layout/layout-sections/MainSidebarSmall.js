import SidebarComponents from '@/components/helpers/SidebarComponents';
import Link from 'next/link';
import React from 'react';

const MainSidebarSmall = () => {
  return (
    <div className="relative border-t w-full bg-white dark:bg-black border-lightBorder dark:border-darkBorder">
      <ul className='w-full flex justify-around'>
        {SidebarComponents.map(({ img, label, href }, i) =>
          label !== 'Search' && label !== 'Notifications' ? (
            <Link key={i} href={href} className="">
              <li className="p-3 my-1 dark:bg-white flex gap-4 dark:bg-opacity-0 bg-black bg-opacity-0 hover:bg-opacity-10 rounded-xl transition-all">
                <div className="hover:scale-125 transition-all">{img}</div>

                <div className="lg:flex hidden">{label}</div>
              </li>
            </Link>
          ) : (
            ''
          )
        )}
      </ul>
    </div>
  );
};

export default MainSidebarSmall;
