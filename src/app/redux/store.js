const { configureStore } = require("@reduxjs/toolkit");
import reducer from './slice';
//Redux store
export const store=configureStore({
    reducer
});