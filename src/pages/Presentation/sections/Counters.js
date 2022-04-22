/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

function Counters() {
  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              title="첫번째"
              description="Lor ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium vitae erat eget dictum. Nullam placerat dui a erat scelerisque consequat. "
            />
          </Grid>
          <Grid item xs={12} md={4} display="flex">
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} />
            <DefaultCounterCard
              title="두번째"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium vitae erat eget dictum. Nullam placerat dui a erat scelerisque consequat. "
            />
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, ml: 0 }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              title="세번째"
              description="Lor ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium vitae erat eget dictum. Nullam placerat dui a erat scelerisque consequat."
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
