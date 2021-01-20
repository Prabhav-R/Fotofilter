import React from "react";
import { Text, Row, Col, Link, Spacer } from "@geist-ui/react";
import { HeartFill } from "@geist-ui/react-icons";

const Footer = () => {
  return (
    <>
      <Spacer y={5} />
      <Row justify="center">
        <Col style={{ textAlign: "center" }}>
          <Text p>
            Made with <HeartFill size={12} /> by{" "}
            <Link target="_blank" href="https://github.com/Prabhav-R" underline>
              Prabhav-R
            </Link>
          </Text>
        </Col>
      </Row>
      <Spacer y={1} />
    </>
  );
};

export default Footer;
