import {configureStore} from '@reduxjs/toolkit'
import UserConfigSlice from './UserConfigSlice';

const store = configureStore({
    reducer : {
        userinfo : UserConfigSlice,
    },
})

export default store ;