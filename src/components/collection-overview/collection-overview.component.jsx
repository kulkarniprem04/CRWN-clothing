import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ShopSelectorForPreview } from "../../Redux/shop/shop.selector";
import "./collection-overview.styles.scss";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

const CollectionOverview = ({ collections }) => (
  <div className="collection-overview">
    <div>
      {collections.map(({ id, ...othercollectionprops }) => (
        <CollectionPreview key={id} {...othercollectionprops} />
      ))}
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: ShopSelectorForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
