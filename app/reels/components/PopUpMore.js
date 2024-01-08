import { Menu, Transition } from '@headlessui/react';
import classNames from 'classnames';
import React, { Fragment } from 'react';

const PopUpMore = () => {
  return (
    <Menu>
      {({ open }) => (
        <>
          <Menu.Button className="flex justify-center">
            <svg
              aria-label="More"
              fill="currentColor"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24">
              <title>More</title>
              <circle cx="12" cy="12" r="1.5"></circle>
              <circle cx="6" cy="12" r="1.5"></circle>
              <circle cx="18" cy="12" r="1.5"></circle>
            </svg>
          </Menu.Button>

          <Transition
            appear
            show={open}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <Menu.Items
              static
              className="absolute bottom-0 w-60 mb-10 lg:left-0 -translate-x-full lg:translate-x-0 rounded-lg p-1 bg-[#262626] flex flex-col">
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={classNames('bg-white text-red-600 cursor-pointer bg-opacity-0 p-3 rounded-md', {
                      'bg-opacity-20': active
                    })}>
                    Report
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={classNames('bg-white text-blue-600 cursor-pointer bg-opacity-0 p-3 rounded-md', {
                      'bg-opacity-20': active
                    })}>
                    Follow
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={classNames('bg-white cursor-pointer bg-opacity-0 p-3 rounded-md', {
                      'bg-opacity-20': active
                    })}>
                    Go to post
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={classNames('bg-white cursor-pointer bg-opacity-0 p-3 rounded-md', {
                      'bg-opacity-20': active
                    })}>
                    Share to...
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={classNames('bg-white cursor-pointer bg-opacity-0 p-3 rounded-md', {
                      'bg-opacity-20': active
                    })}>
                    Copy link
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={classNames('bg-white cursor-pointer bg-opacity-0 p-3 rounded-md', {
                      'bg-opacity-20': active
                    })}>
                    Enabled
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={classNames('bg-white cursor-pointer bg-opacity-0 p-3 rounded-md', {
                      'bg-opacity-20': active
                    })}>
                    About this account
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

export default PopUpMore;
