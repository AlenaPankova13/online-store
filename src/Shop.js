import './App.css';
import { useState } from 'react';
import { data } from './data';
import Clothes from './Clothes';
import Buttons from './Buttons';

function Shop() {
  const [clothes, setClothes] = useState(data);

  const chosenClothes = (searchTerm) => {
    const newClothes = data.filter(item => item.searchTerm === searchTerm);
    setClothes(newClothes);
  }

  return (
    <div>
      <div className='cont'>
        <h2 className='back'>Free Standart Shipping</h2>
      </div>
      <Buttons filteredClothes={chosenClothes}/>
      <Clothes itemsForSale={clothes}/>
    </div>
  );
}

export default Shop;