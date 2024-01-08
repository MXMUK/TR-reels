'use client';

import React, { useEffect, useRef, useState } from 'react';
import PostCard from './components/PostCard';
import allPosts from '@/__mock/MOCK_DATA';

const ReelsPage = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [videoStack, setVideoStack] = useState(() => {
    const shuffled = allPosts.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 5);
  });
  const [currentVideo, setCurrentVideo] = useState();

  useEffect(() => {
    if (currentVideo === videoStack[videoStack.length - 2].post_id) {
      setVideoStack([
        ...videoStack,
        allPosts[Math.floor(Math.random() * allPosts.length)]
      ]);
    }
  }, [currentVideo]);

  return (
    <div className="relative snap-y overflow-y-scroll h-full snap-mandatory">
      <div className="mx-16 pb-2 gap-5 border-b border-lightBorder my-5 dark:border-darkBorder hidden md:flex">
        <div className="font-bold">For you</div>
        <div className="font-bold">Following</div>
      </div>

      <div className="flex items-center gap-4 flex-col mb-[8vh]">
        {videoStack.map((post) => (
          <PostCard
            setCurrentVideo={setCurrentVideo}
            isLast={allPosts[allPosts.length] === post}
            isFirst={allPosts[0] === post}
            setIsMuted={setIsMuted}
            isMuted={isMuted}
            key={post.post_id}
            post={post}
          />
        ))}
      </div>
    </div>
  );
};

export default ReelsPage;
