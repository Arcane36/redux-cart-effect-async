import { configureStore } from "@reduxjs/toolkit";

import cartStore from "./cart";
import uiStore from "./ui";

const store = configureStore({
    reducer: {
        cart: cartStore,
        ui: uiStore,
    },
});

export default store;
