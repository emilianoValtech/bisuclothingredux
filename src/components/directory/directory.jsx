import React from 'react'
import CategoryItem from '../category-item/CategoryItem';
import './styles.scss'

const Directory = ({categories}) => {
  return (
    <div className='categories-container'>
    {categories.map((category) => {
      return (
        <CategoryItem key={category.id} category={category} />
      );
    })}
  </div>
  )
}

export default Directory