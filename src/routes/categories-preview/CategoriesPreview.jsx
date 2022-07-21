import { Fragment } from 'react';
import { selectCategoriesMap } from '../../store/categories/categorySelector';
import CategoryPreview from '../../components/category-preview/CategoryPreview'
import {useSelector} from 'react-redux'

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap)
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
