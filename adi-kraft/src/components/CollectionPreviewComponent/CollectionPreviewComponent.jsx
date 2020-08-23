import React from 'react';
import './CollectionPreviewComponent.styles.scss';
import CollectionItem from '../CollectionItemComponent/CollectionItemComponent';

const CollectionPreview =({item}) =>{
    const {title,items}= item;
    console.log("ss",items);
   return (
    <div className="collection-preview">
        <h1 className="collection-title">{title}</h1>
        <div className="preview">
            {/* {items.name} */}
            {items.filter((item, idx) => idx < 3).map(CollectionItems => (
                <CollectionItem key={CollectionItems.id} CollectionItems={CollectionItems} />
            ))
            }
           
        </div>

    </div>
)
    }

export default CollectionPreview;
