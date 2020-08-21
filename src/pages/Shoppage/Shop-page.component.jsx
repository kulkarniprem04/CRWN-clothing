import React from "react";
import "./Shop-page.styles.scss";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

import SHOP_DATA from "./Shop.data";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div>
        {collections.map(({ id, ...othercollectionprops }) => (
          <CollectionPreview key={id} {...othercollectionprops} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
