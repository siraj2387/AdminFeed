import React from 'react';

export default function Footer() {
  return (  
      <div className='text-center p-3 mt-2' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', height:'50px' }}>
        &copy; {new Date().getFullYear()} Copyright{' '}      
      </div>    
  );
}