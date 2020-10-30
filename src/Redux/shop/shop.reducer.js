import SHOP_DATA from "../../pages/Shoppage/Shop.data"

const INITIAL_STATE = {
    collections: SHOP_DATA
}

const ShopReducer = (state = INITIAL_STATE, action) => {
    switch (action.types) {
        default:
            return state;
    }
}

export default ShopReducer;