import React from "react";
import "./Shop-page.styles.scss";
import { Route } from "react-router-dom";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionsPage from "../Collections/collections.component";
//import SHOP_DATA from "./Shop.data";

const ShopPage = ({ match }) => {
  //console.log(match);
  return (
    <div>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionsPage} />
    </div>
  );
};

export default ShopPage;
