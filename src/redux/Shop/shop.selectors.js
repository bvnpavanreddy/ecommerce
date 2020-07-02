import {createSelector} from 'reselect'

const shopSelector =(state)=>state.shop;

export const selectShopData= createSelector(
                                            [shopSelector],
                                            shop=>shop
                                        )

