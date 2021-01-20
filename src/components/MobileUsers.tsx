import React from "react";
import { Row, Col, Text, Spacer, Button } from "@geist-ui/react";

const MobileUsers = ({
  setStep,
}: {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <>
      <Spacer y={5} />
      <Row justify="center">
        <Col style={{ textAlign: "center" }}>
          <Text h3>
            Hey Thanks for checking out my website. Just wanted to give a heads
            up, its currently not optimized for mobile/tablet users. For the
            best experience I suggest using a laptop or Desktop. Feel free to
            give it a try though
          </Text>
          <Spacer y={2} />
          <Button
            onClick={(e) => setStep((prev) => prev + 1)}
            type="success-light"
          >
            continue
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default MobileUsers;
