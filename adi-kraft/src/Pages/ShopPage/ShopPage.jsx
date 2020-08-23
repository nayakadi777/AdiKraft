import React , {Component }  from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/CollectionPreviewComponent/CollectionPreviewComponent';

class ShopPage extends Component {
    constructor(){
        super();
        this.state={
            collections:SHOP_DATA
        }
    }
    render(){
        return(
            <div className="shopPage">
                {this.state.collections.map(collection =>(
                    <CollectionPreview key={collection.id} item={collection}  />
                ))}
            </div>
        )
    }
}

export default ShopPage;