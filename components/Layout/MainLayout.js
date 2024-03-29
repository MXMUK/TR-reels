'use client';

import React, { useEffect, useState } from 'react';
import MainSidebar from './layout-sections/MainSidebar';
import LoaderLine from './layout-sections/LoaderLine';
import MainSidebarSmall from './layout-sections/MainSidebarSmall';

const MainLayout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [isLoading]);

  return (
    <div>
      <div className="fixed top-0 z-[999] right-0 left-0">
        {isLoading && <LoaderLine />}
      </div>

      <div className="fixed top-0 h-full">
        <MainSidebar />
      </div>

      <div className="fixed bottom-0 h-[8vh] flex items-center md:hidden w-full z-[9999]">
        <MainSidebarSmall />
      </div>

      <main className="md:ml-16 lg:ml-60 xl:ml-64 2xl:ml-72 h-screen mb-[8vh] md:pb-0">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
