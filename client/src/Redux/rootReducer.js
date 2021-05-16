import { combineReducers } from 'redux';
import userTypeReducer from './usersType/userType.reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key:'root',
    storage,
    whitelist:['userType']
}
const rootReducer = combineReducers({
    userType: userTypeReducer
})

export default persistReducer(persistConfig, rootReducer); 