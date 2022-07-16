import React from 'react'
import DirectoryItem from '../directory-item/DirectoryItem';
import './styles.scss'
import {categories} from '../../categories'

const Directory = () => {
  return (
    <div className='categories-container'>
    {categories.map((category) => {
      return (
        <DirectoryItem key={category.id} category={category} />
      );
    })}
  </div>
  )
}

export default Directory