import React from 'react';
import PostCard from './components/PostCard';
import allPosts from '@/__mock/MOCK_DATA';

const ReelsPage = ({ children }) => {
  return (
    <div className='relative'>
      <div className="sticky top-0 mx-16 pb-2 flex gap-5 border-b border-lightBorder dark:border-darkBorder">
        <div className="font-bold">For you</div>
        <div className="font-bold">Following</div>
      </div>

      <div className="flex items-center gap-5 flex-col mt-5">
        {allPosts.map((post) => (
          <PostCard key={post.post_id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default ReelsPage;
