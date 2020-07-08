// import {createSelector} from 'reselect'
// import memoize from 'lodash.memoize'

// const shopSelector =(state)=>state.shop;
// // const COLLECTION_ID_MAP = {
// //     hats:1,
// //     sneakers:2,
// //     jackets:3,
// //     womens:4,
// //     mens:5
// // }



// export const selectShopData= createSelector(
//                                             [shopSelector],
//                                             shop=>shop.collections
//                                         )

// export const selectCollection= memoize(
//         collectionUrlParam =>createSelector(
//                                             [selectShopData],
//                                             collections=>collections[collectionUrlParam]
                                            
//                                             // .find(collection=>
//                                             // collection.id===COLLECTION_ID_MAP[collectionUrlParam])
                                            
//                                         ))


// export const selectCollectionsForPreview = createSelector(

//     [selectCollection],
//     collections=>Object.keys(collections).map(key=>collections[key])
// )


import {createSelector} from 'reselect'
import memoize from 'lodash.memoize'

const selectShop = state => state.shop

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
)
export const selectCollection = memoize(collectionUrlParam => createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
))

