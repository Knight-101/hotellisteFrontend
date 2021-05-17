import {combineReducers} from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import inputReducer from './inputData/inputDataReducer'


const persistConfig = {
    key: 'root',
    storage,
    whitelist:['input']
  }


const rootReducer = combineReducers({
    input:inputReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)
 
export default persistedReducer;