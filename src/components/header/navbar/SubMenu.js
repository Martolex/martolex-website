import React, { useState, useCallback } from "react";
import { buildSubCatUrl, buildCatUrl } from "../../../utils/buildUrl";
import { connect } from "react-redux";
const SubMenu = ({ categories }) => {
  console.log("--------------------");
  console.log(categories);
  return (
    <ul className="submenu">
      {categories.map((category) => (
        <li key={category.id}>
          <a href={buildCatUrl(category.id)}>
            <span>{category.name}</span>
          </a>
          <ul>
            {category.subcategories.map((subCategory) => (
              <a
                key={subCategory.id}
                href={buildSubCatUrl(category.id, subCategory.id)}
              >
                <li>{subCategory.name}</li>
              </a>
            ))}
          </ul>
        </li>
      ))}
      <li>
        <span>item1</span>
        <ul>
          <li>subitem1</li>
          <li>subitem1</li>
          <li>subitem1</li>
          <li>subitem1</li>
        </ul>
      </li>
      <li>
        <span>item1</span>
        <ul>
          <li>subitem1</li>
          <li>subitem1</li>
          <li>subitem1</li>
        </ul>
      </li>
      <li>
        <span>item1</span>
      </li>
    </ul>
  );
};

const mapStateToProps = (state) => ({
  categories: state.categories,
});

export default connect(mapStateToProps)(SubMenu);
