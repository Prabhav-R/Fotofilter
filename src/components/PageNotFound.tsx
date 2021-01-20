import React from "react";
import { Row, Col, Text, Spacer } from "@geist-ui/react";

const PageNotFound = () => {
  return (
    <>
      <Spacer y={5} />
      <Row justify="center">
        <Col style={{ textAlign: "center" }}>
          <Text h1>You seem Lost ): Try Reloading the page </Text>
        </Col>
      </Row>
    </>
  );
};

export default PageNotFound;
