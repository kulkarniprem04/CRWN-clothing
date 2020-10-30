import React from "react";
import { connect } from "react-redux";
import "./collections.styles.scss";

import { collectionSelector } from "../../Redux/shop/shop.selector";
import CollectionItem from "../../components/collection-item/collection-item.component";

const CollectionsPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="category">
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: collectionSelector(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionsPage);
