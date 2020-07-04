import {createSelector} from 'reselect'

const shopSelector =(state)=>state.shop;
const COLLECTION_ID_MAP = {
    hats:1,
    sneakers:2,
    jackets:3,
    womens:4,
    mens:5
}

export const selectCollection= collectionUrlParam =>createSelector(
    [selectShopData],
    shop=>shop.find(collection=>
        collection.id===COLLECTION_ID_MAP[collectionUrlParam])
)

export const selectShopData= createSelector(
                                            [shopSelector],
                                            shop=>shop
                                        )


