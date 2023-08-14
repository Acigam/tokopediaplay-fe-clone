import ProductItem from "./ProductItem";
import { Grid } from "@chakra-ui/react";

const ProductList = ({ products }) => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={2}>
      {products.map((product) => (
        <ProductItem
          key={product._id}
          title={product.title}
          price={product.price}
          linkProduct={product.linkProduct}
        />
      ))}
    </Grid>
  );
};

export default ProductList;
