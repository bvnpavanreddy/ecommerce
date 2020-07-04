import './collection.styles.scss'
import React from 'react';
import {connect} from 'react-redux';
import {selectCollection} from '../../redux/Shop/shop.selectors'
import CollectionItem from '../../components/collection-item/collection-item.component';


 const CollectionPage =({collection})=>{
    const {title,items}=collection
    return(
        <div className='collection-page'>
            <div className='title'>
                {title}
            </div>
    <div className='items'>{items.map(item=><CollectionItem key={item.id} item={item} />)}</div>
        </div>
    )
}


const mapStateTpProps = (state,ownProps)=>(
    {
        collection:selectCollection(ownProps.match.params.collectionid)(state)
    }
)

export default connect(mapStateTpProps,null)(CollectionPage)