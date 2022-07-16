import { DirectoryItemContainer, BackgroundImage, Body } from './styles.jsx';
import { useNavigate } from 'react-router-dom';

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const handleNavigate = () => navigate(route);
  
  return (
    <DirectoryItemContainer onClick={handleNavigate}>
      <BackgroundImage className='background-image' imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
