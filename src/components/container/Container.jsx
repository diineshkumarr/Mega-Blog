import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Container({children}) {
  return( 
    <div className='w-fill max-w-7xl mx-auto px-4'>
      {children}
      </div>
      )
}
export default Container
