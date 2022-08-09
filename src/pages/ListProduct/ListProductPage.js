import React from "react";
import { Container, CssBaseline } from "@mui/material";
import ListProduct from "../../component/ListProduct/ListProduct";

const ListProductPage = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <ListProduct />
      </Container>
    </React.Fragment>
  );
};

export default ListProductPage;
