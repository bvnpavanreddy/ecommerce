import React from 'react'
import CollectionPreview from '../collection-preview/collection-preview.component'
import {selectCollectionsForPreview} from '../../redux/Shop/shop.selectors'
import { createStructuredSelector } from 'reselect'
import {connect} from 'react-redux'
import  './collection-overview.styles.scss'



const CollectionOverview  =({shop,match})=>{
    return (
        <div className='shop-page'>
            {
            shop.map(({id, ...othershopProps}) =>
                (
                    <CollectionPreview key={id} {...othershopProps}></CollectionPreview>
                )
            )}
        </div>
    )
}
    
const mapStateToProps = createStructuredSelector(
    {
        shop:selectCollectionsForPreview,

    }
)

export default connect (mapStateToProps,null)(CollectionOverview)