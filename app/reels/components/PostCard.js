'use client';

import classNames from 'classnames';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import PopUpMore from './PopUpMore';

const PostCard = ({ post, isMuted, setIsMuted, isFirst }) => {
  const { ref, inView } = useInView({
    threshold: 0.6
  });
  const vidRef = useRef(null);
  const [isCurrentVideoPaused, setIsCurrentVideoPaused] = useState(false);
  const [openDescription, setOpenDescription] = useState(false);

  const { video_url, likes, comments, username } = post;

  const playVideo = useCallback(() => {
    setIsCurrentVideoPaused(false);
    vidRef.current.play();
  }, [vidRef]);

  const pauseVideo = useCallback(() => {
    // Pause as well
    setIsCurrentVideoPaused(true);
    vidRef.current.pause();
  }, [vidRef]);

  const handleClick = useCallback(() => {
    if (!inView) vidRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [inView]);

  useEffect(() => {
    if (inView) {
      playVideo();
    } else {
      pauseVideo();
    }
  }, [inView, playVideo, pauseVideo]);

  return (
    <div
      onClick={() => handleClick()}
      className={classNames('flex h-[92vh] md:aspect-[9/16] md:h-[85vh] snap-start', {
        'snap-start md:snap-center': !isFirst,
        'snap-start md:snap-end': isFirst
      })}>
      <div className="grow cursor-pointer relative -mr-12 md:mr-0">
        <div
          className="absolute z-40 hover:bg-opacity-30 rounded-full bg-white bg-opacity-20 p-1.5 right-0 top-0 -translate-x-1/2 translate-y-1/2"
          onClick={() => setIsMuted(!isMuted)}>
          {isMuted ? (
            <svg
              aria-label="Audio is muted"
              stroke="#BEBEBE"
              fill="white"
              height="16"
              role="img"
              viewBox="0 0 48 48"
              width="16">
              <title>Audio is muted</title>
              <path
                clipRule="evenodd"
                d="M1.5 13.3c-.8 0-1.5.7-1.5 1.5v18.4c0 .8.7 1.5 1.5 1.5h8.7l12.9 12.9c.9.9 2.5.3 2.5-1v-9.8c0-.4-.2-.8-.4-1.1l-22-22c-.3-.3-.7-.4-1.1-.4h-.6zm46.8 31.4-5.5-5.5C44.9 36.6 48 31.4 48 24c0-11.4-7.2-17.4-7.2-17.4-.6-.6-1.6-.6-2.2 0L37.2 8c-.6.6-.6 1.6 0 2.2 0 0 5.7 5 5.7 13.8 0 5.4-2.1 9.3-3.8 11.6L35.5 32c1.1-1.7 2.3-4.4 2.3-8 0-6.8-4.1-10.3-4.1-10.3-.6-.6-1.6-.6-2.2 0l-1.4 1.4c-.6.6-.6 1.6 0 2.2 0 0 2.6 2 2.6 6.7 0 1.8-.4 3.2-.9 4.3L25.5 22V1.4c0-1.3-1.6-1.9-2.5-1L13.5 10 3.3-.3c-.6-.6-1.5-.6-2.1 0L-.2 1.1c-.6.6-.6 1.5 0 2.1L4 7.6l26.8 26.8 13.9 13.9c.6.6 1.5.6 2.1 0l1.4-1.4c.7-.6.7-1.6.1-2.2z"
                fillRule="evenodd"></path>
            </svg>
          ) : (
            <svg
              aria-label="Audio is playing"
              stroke="#BEBEBE"
              fill="white"
              height="16"
              role="img"
              viewBox="0 0 24 24"
              width="16">
              <title>Audio is playing</title>
              <path d="M16.636 7.028a1.5 1.5 0 10-2.395 1.807 5.365 5.365 0 011.103 3.17 5.378 5.378 0 01-1.105 3.176 1.5 1.5 0 102.395 1.806 8.396 8.396 0 001.71-4.981 8.39 8.39 0 00-1.708-4.978zm3.73-2.332A1.5 1.5 0 1018.04 6.59 8.823 8.823 0 0120 12.007a8.798 8.798 0 01-1.96 5.415 1.5 1.5 0 002.326 1.894 11.672 11.672 0 002.635-7.31 11.682 11.682 0 00-2.635-7.31zm-8.963-3.613a1.001 1.001 0 00-1.082.187L5.265 6H2a1 1 0 00-1 1v10.003a1 1 0 001 1h3.265l5.01 4.682.02.021a1 1 0 001.704-.814L12.005 2a1 1 0 00-.602-.917z"></path>
            </svg>
          )}
        </div>

        <video
          onClick={() => (isCurrentVideoPaused ? playVideo() : pauseVideo())}
          ref={(el) => {
            vidRef.current = el;
            ref(el);
          }}
          autoPlay
          className="h-full w-screen object-cover rounded-lg"
          loop
          muted={isMuted}>
          <source src={video_url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute flex flex-col gap-5 bottom-0 p-2 text-white text-sm">
          <div className="flex items-center gap-2">
            <div className="overflow-hidden h-8 w-8 rounded-full">
              <Image
                src="https://i.imgur.com/waaK1BK.png"
                width={32}
                height={32}
                alt="Picture of the author"
              />
            </div>

            {username}

            <div className="border-2 border-white rounded-full"></div>

            <button className="border border-white border-opacity-40 rounded-md px-2 py-1">
              Follow
            </button>
          </div>

          <div className="relative" onClick={() => setOpenDescription(!openDescription)}>
            <div
              className={classNames('max-h-4 overflow-hidden w-4/5 transition-all', {
                '!max-h-60 !overflow-auto !w-full': openDescription
              })}>
              Embark on a journey of moments with our latest Instagram Reels adventure! 🚀✨ Dive
              into a world of creativity, laughter, and surprises as we unravel the extraordinary in
              the ordinary. 🌈💫 From heartwarming smiles to jaw-dropping feats, join us on this
              rollercoaster of emotions captured in 15 seconds or less. 🎥🎶 Ready to be dazzled?
              Hit play and let the reel magic unfold! 🌟 #ReelLife #ShortAndSweet #MomentsInMotion
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere nesciunt quo maiores
              omnis molestias temporibus esse, dolor qui odit minus, officia tempore! Illum mollitia
              neque eum. Architecto facere nulla delectus! Ducimus dignissimos porro soluta deleniti
              sunt velit explicabo sint omnis perspiciatis temporibus magni distinctio facilis
              necessitatibus asperiores, minus consequatur. Placeat quibusdam excepturi et laborum,
              sed officia pariatur voluptatibus obcaecati delectus. Quia neque libero saepe cum
              quam, sunt odit architecto reiciendis, nulla, dolorum nihil ex ab accusamus! Quos
              mollitia animi atque earum autem. Ratione distinctio non rerum ipsam voluptatem maxime
              iusto! Quas officiis eos, repellendus maiores fugit modi deserunt ab voluptatum optio!
              Repellat temporibus eos obcaecati eius aliquam tempore maxime voluptatem. Consequatur
              ullam earum laudantium vero maiores cum voluptatum nemo dignissimos? Explicabo modi,
              quisquam necessitatibus voluptas quam tempora aspernatur porro voluptatem repellat
              quasi officiis soluta quia alias numquam corrupti nostrum temporibus provident.
              Deserunt modi fugit iure dignissimos aspernatur consequatur tenetur sit? Quidem
              repellendus, porro at, eveniet ullam nemo qui molestiae aliquid architecto sit, omnis
              dolorem esse earum minus temporibus veniam ea vitae quod tenetur sequi est amet
              commodi itaque reprehenderit. Eum? Beatae, iste possimus nesciunt eum aspernatur
              nostrum, provident, nobis commodi qui quidem exercitationem magnam sed voluptas!
              Nostrum, nulla a, beatae consequuntur voluptatibus est aspernatur ex temporibus, sit
              tempora iure voluptatem. Velit ipsum accusantium quas animi omnis temporibus nesciunt
              ducimus, earum, ab sit provident architecto quidem tempora voluptate, corporis
              cupiditate ullam eos a natus laudantium. Excepturi iste laboriosam ex ab quod?
              Adipisci est tenetur, tempore officia blanditiis iste tempora harum qui? Sit quisquam
              consectetur, incidunt pariatur ipsa assumenda accusamus ab voluptatum placeat tenetur
              eveniet porro quas facilis, fugiat ullam voluptas natus! Temporibus dignissimos dicta
              nesciunt voluptatibus doloremque corporis eaque ut quidem delectus in, quia reiciendis
              eveniet modi exercitationem quam quis accusamus debitis inventore eos facilis at!
              Corrupti illo recusandae iure voluptas.
            </div>

            {!openDescription && (
              <div className="absolute right-0 top-0 text-[#BEBEBE] -translate-x-1/2">...more</div>
            )}
          </div>

          <div className="flex items-center text-xs gap-2 text-[#BEBEBE]">
            <div className="flex gap-1 items-center">
              <svg width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
              </svg>

              {likes}
            </div>

            <div className="flex gap-1 items-center">
              <svg width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
                <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z"></path>
              </svg>

              {likes}
            </div>

            <div className="flex gap-1 items-center">
              <svg width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                <path
                  fillRule="evenodd"
                  d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z"></path>
              </svg>

              {likes}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-end gap-6 pb-2 w-12 ml-0 md:ml-4 text-xs -translate-x-0">
        <div className="flex flex-col items-center">
          <svg
            aria-label="Like"
            fill="currentColor"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24">
            <title>Like</title>
            <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
          </svg>
          {likes}
        </div>

        <div className="flex flex-col items-center">
          <svg
            aria-label="Comment"
            fill="currentColor"
            stroke="#BEBEBE"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24">
            <title>Comment</title>
            <path
              d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
              fill="none"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="2"></path>
          </svg>

          {comments}
        </div>

        <div className="flex justify-center">
          <svg
            aria-label="Direct"
            fill="currentColor"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24">
            <title>Direct</title>
            <line
              fill="none"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="2"
              x1="22"
              x2="9.218"
              y1="3"
              y2="10.083"></line>
            <polygon
              fill="none"
              points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="2"></polygon>
          </svg>
        </div>

        <div className="flex justify-center">
          <svg
            aria-label="Save"
            fill="currentColor"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24">
            <title>Save</title>
            <polygon
              fill="none"
              points="20 21 12 13.44 4 21 4 3 20 3 20 21"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"></polygon>
          </svg>
        </div>

        <div className="relative flex justify-center">
          <PopUpMore />
        </div>

        <div className="flex justify-center">
          <div className="w-6 h-6 border border-darkBorder overflow-hidden dark:border-lightBorder rounded">
            <Image
              src="https://i.imgur.com/waaK1BK.png"
              width={100}
              height={100}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
