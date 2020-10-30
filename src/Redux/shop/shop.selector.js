import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShopData = (state) => state.shopData;

export const ShopSelector = createSelector(
  [selectShopData],
  (shopData) => shopData.collections
);

export const ShopSelectorForPreview = createSelector(
  [ShopSelector],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const collectionSelector = memoize((collectionUrlParams) =>
  createSelector(
    [ShopSelector],
    (collections) => collections[collectionUrlParams]
  )
);
