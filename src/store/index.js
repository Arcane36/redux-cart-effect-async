import { configureStore } from "@reduxjs/toolkit";

import cartStore from "./cart";

const store = configureStore({
    reducer: {
        cart: cartStore,
    },
});

export default store;
