import React from "react";
import Menuitem from "../menu-item/menu-item.component";
import "./Directory.styles.scss";
import { createStructuredSelector } from "reselect";

import { connect } from "react-redux";
import { selectDirectorySections } from "../../Redux/Directory/Directory.selector";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <Menuitem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
