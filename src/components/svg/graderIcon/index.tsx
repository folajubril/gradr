import React from 'react';
type iconType = {
    width?:string;
    className?: string;
    height?: string;
  };
const GraderIcon: React.FC<iconType> = ({ width, height }) => (
    <svg width={width ?? "24"} height={height ?? "24"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 21H7C3 21 2 20 2 16V8C2 4 3 3 7 3H17C21 3 22 4 22 8V16C22 20 21 21 17 21Z" stroke="#C3CED2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 8H19" stroke="#C3CED2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 12H19" stroke="#C3CED2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17 16H19" stroke="#C3CED2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.49994 11.2919C9.49958 11.2919 10.3099 10.4815 10.3099 9.48187C10.3099 8.48224 9.49958 7.67188 8.49994 7.67188C7.50031 7.67188 6.68994 8.48224 6.68994 9.48187C6.68994 10.4815 7.50031 11.2919 8.49994 11.2919Z" stroke="#C3CED2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12 16.3317C11.86 14.8817 10.71 13.7417 9.26 13.6117C8.76 13.5617 8.25 13.5617 7.74 13.6117C6.29 13.7517 5.14 14.8817 5 16.3317" stroke="#C3CED2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export default GraderIcon;