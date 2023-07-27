import React from "react";
import { connect } from "react-redux";

const ProductList = ({ products }) => {
  // Use the products state here
  return (
    <div>
      {/* Display the list of products */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products, // Access the products state from the Redux store
});

export default connect(mapStateToProps)(ProductList);
