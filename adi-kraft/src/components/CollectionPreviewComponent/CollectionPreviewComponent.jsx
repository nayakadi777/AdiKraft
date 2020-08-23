import React from 'react';
//import './CollectionPreviewComponent.scss';

const CollectionPreview =({item}) =>{
    const {title}= item;
    console.log(item);
   return (
    <div className="collection-preview">
        <h1 className="collection-title">{title}</h1>
        <div className="preview">
            {/* {items.name} */}
        </div>

    </div>
)
    }

export default CollectionPreview;
