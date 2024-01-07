'use client';

import React, { useState } from 'react';
import PostCard from './components/PostCard';
import allPosts from '@/__mock/MOCK_DATA';

const ReelsPage = ({ children }) => {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <div className="relative snap-y overflow-y-scroll h-full snap-mandatory">
      <div className="mx-16 pb-2 gap-5 border-b border-lightBorder dark:border-darkBorder flex sm:hidden">
        <div className="font-bold">For you</div>
        <div className="font-bold">Following</div>
      </div>

      <div className="flex items-center gap-4 flex-col mb-[8vh]">
        {allPosts.map((post) => (
          <PostCard
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
