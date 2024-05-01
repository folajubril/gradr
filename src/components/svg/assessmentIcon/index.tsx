import React from 'react';
type iconType = {
    width?:string;
    className?: string;
    height?: string;
    active?: boolean;
  };
const AssessmentLogo : React.FC<iconType> = ({ width, height, active }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.67 14.3L21.27 19.3C21.12 20.83 21 22 18.29 22H5.71001C3.00001 22 2.88001 20.83 2.73001 19.3L2.33001 14.3C2.25001 13.47 2.51001 12.7 2.98001 12.11C2.99001 12.1 2.99001 12.1 3.00001 12.09C3.55001 11.42 4.38001 11 5.31001 11H18.69C19.62 11 20.44 11.42 20.98 12.07C20.99 12.08 21 12.09 21 12.1C21.49 12.69 21.76 13.46 21.67 14.3Z" stroke={active ? "#007BFF" : '#C3CED2' } strokeWidth="1.5" strokeMiterlimit="10"/>
    <path d="M3.5 11.4313V6.28125C3.5 2.88125 4.35 2.03125 7.75 2.03125H9.02C10.29 2.03125 10.58 2.41125 11.06 3.05125L12.33 4.75125C12.65 5.17125 12.84 5.43125 13.69 5.43125H16.24C19.64 5.43125 20.49 6.28125 20.49 9.68125V11.4713" stroke={active ? "#007BFF" : '#C3CED2' } strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.42993 17H14.5699" stroke={active ? "#007BFF" : '#C3CED2' } strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    
  );
  
  export default AssessmentLogo;