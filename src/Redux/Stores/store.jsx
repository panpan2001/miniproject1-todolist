import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";
import { FLUSH,  REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storageSession from 'redux-persist/lib/storage/session'
import loginReducer from "../Slices/AuthSlices/LoginSlices";
 

const persistConfig = {
    key:'root',
    version:1,
    storage:storageSession,

}

const rootReducer= combineReducers({
    loginReducer: loginReducer
})

const persistedReducer=persistReducer(persistConfig,rootReducer)

const store= configureStore({
    reducer: persistedReducer,
    middware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
        serializableCheck: 
        {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
        
    })
}
    // reducer
)

export const persistor=persistStore(store)
export default store