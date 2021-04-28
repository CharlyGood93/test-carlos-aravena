import React from 'react';

const IncrementIcon = ({ fill = 'var(--dark-black)' }) => {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 7C0 6.44772 0.447715 6 1 6H13C13.5523 6 14 6.44772 14 7C14 7.55228 13.5523 8 13 8H1C0.447716 8 0 7.55228 0 7Z"
        fill={fill}
      />
      <path
        d="M7 14C6.44772 14 6 13.5523 6 13L6 1C6 0.447716 6.44771 2.87279e-08 7 0C7.55228 -2.87279e-08 8 0.447715 8 1L8 13C8 13.5523 7.55228 14 7 14Z"
        fill={fill}
      />
    </svg>
  );
};

export default IncrementIcon;
