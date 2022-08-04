import { CssBaseline } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "../../component/ProductDetail/ProductDetail";

const DetailProductPage = () => {
  //lấy id sản phẩm bằng useParams in react Hook
  const { id } = useParams();
  //id is in {} means that get exact that id from the path, product item id
  //console.log(id); successfully get the id of the product

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        {/* truyen props id cho productDetail */}
        <ProductDetail id={id} />
      </Container>
    </React.Fragment>
  );
};

export default DetailProductPage;
