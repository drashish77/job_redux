import jobs from './jobs/jobReducer'
import { combineReducers } from 'redux'
import auth from './auth/authReducer'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
}
// const authPersistConfig = {
//   key: 'root',
//   storage: storage,
//   whitelist: ['auth'],
// }
// const jobsPersistConfig = {
//   key: 'root',
//   storage: storage,
//   whitelist: ['jobs'],
// }
const rootReducer = combineReducers({
  auth: auth,
  jobs: jobs,
})
export default persistReducer(persistConfig, rootReducer)

// import { combineReducers } from 'redux'
// import auth from './auth/authReducer'
// export default combineReducers({ auth, })

// import { persistReducer } from 'redux-persist'
// import { combineReducers } from 'redux'
// import storage from 'redux-persist/lib/storage'
// import auth from './auth/authReducer'

// const rootPersistConfig = {
//   key: 'root',
//   storage: storage,
//   blacklist: ['auth'],
// }
// const authPersistConfig = {
//   key: 'auth',
//   storage: storage,
//   blacklist: ['somethingTemporary'],
// }
// const rootReducer = combineReducers({
//   auth: persistReducer(authPersistConfig, auth),
// })
// // export default combineReducers({ auth })
// export default persistReducer(rootPersistConfig, rootReducer)
