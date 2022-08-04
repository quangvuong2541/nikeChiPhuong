import React from "react";
import { Container } from "@mui/system";
import CssBaseline from "@mui/material/CssBaseline";
import Body from "./Body/body";

export default function MainContainer(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Body
          carouselImg={props.carouselImg}
          titleTrending={props.titleTrending}
          dataTrending={props.dataTrending}
          titleMoreNike={props.titleMoreNike}
          dataMoreNike={props.dataMoreNike}
          merchMenu={props.merchMenu}
        />
      </Container>
    </React.Fragment>
  );
}
