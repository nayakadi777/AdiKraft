import React from 'react';
import DirectoryCard from '../DirectoryCardComponent/DirectoryCardComponent';
import './CollectionItemComponent.styles.scss'

const CollectionItem =({CollectionItems})=>{
    const { name ,price}=CollectionItems;
    console.log(name)
    return(
        <div className="collection-item">
            <DirectoryCard item={CollectionItems} />
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'> ₹{price}</span>
        </div>

        </div>
    )
}

export default CollectionItem;