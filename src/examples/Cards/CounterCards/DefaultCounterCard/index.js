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

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function DefaultCounterCard({ title, description }) {
  return (
    <MKBox p={2} textAlign="center" lineHeight={1}>
      {title && (
        <MKTypography variant="h5" mt={2} mb={1}>
          {title}
        </MKTypography>
      )}
      {description && (
        <MKTypography variant="body2" color="text">
          {description}
        </MKTypography>
      )}
    </MKBox>
  );
}

// Setting default props for the DefaultCounterCard
DefaultCounterCard.defaultProps = {
  color: "dark",
  description: "",
  title: "",
};

// Typechecking props for the DefaultCounterCard
DefaultCounterCard.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  title: PropTypes.string,
  description: PropTypes.string,
};

export default DefaultCounterCard;
