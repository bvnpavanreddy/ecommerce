//combining all reducers 

import {combineReducers} from 'redux';
import userReducer from './user/user.reducer';
import {cartReducer} from  './cart/cart.reducer';
import {persistReducer} from 'redux-persist';
import  directoryReducer from '../redux/directory/directory.reducer';
import shopReducer from '../redux/Shop/shop.reducer'
// Actual Local storage object on our window browser
// As we will be telling to use local storage as default storage
// You can also find the sessionStorage from redux persist library
import storage from 'redux-persist/lib/storage'

const PersistConfig={
                    key:'root',
                    storage:storage,
                    whitelist:['cart']
                    }
const rootReducer =  combineReducers({
    user:userReducer,
    cart:cartReducer,
    directory:directoryReducer,
    shop:shopReducer

})

export default persistReducer(PersistConfig,rootReducer)

