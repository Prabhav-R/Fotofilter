import React, { useRef } from "react";
import { Row, Col, Text, Spacer, Button, ButtonGroup } from "@geist-ui/react";
import { File, Edit } from "@geist-ui/react-icons";

const Landing = ({
  setFiles,
  files,
  nextStep,
}: {
  setFiles: React.Dispatch<React.SetStateAction<FileList | null>>;
  files: FileList | null;
  nextStep: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const openFileMenu = () => {
    const input = inputRef.current;

    input?.click();
  };

  return (
    <div>
      <div>
        <Spacer y={5} style={{ display: "inline-block" }} />
        <Row justify="center">
          <Col style={{ textAlign: "center" }}>
            <Text h1>Foto-filter</Text>
          </Col>
        </Row>
        <Row justify="center">
          <Col style={{ textAlign: "center" }}>
            <Text h3>Apply 70+ filters to your photos now!</Text>
          </Col>
        </Row>
        <Spacer y={2} />
        <Row justify="center">
          <Col style={{ textAlign: "center" }}>
            <ButtonGroup type="success-light" size="large">
              <Button
                style={{ marginRight: "3px" }}
                onClick={(e) => openFileMenu()}
                icon={<File />}
              >
                Open Image
              </Button>
              {files && files.length > 0 && (
                <Button
                  style={{ marginLeft: "3px" }}
                  onClick={(e) => nextStep(e)}
                  icon={<Edit />}
                >
                  Apply Filter
                </Button>
              )}
            </ButtonGroup>
            <input
              ref={inputRef}
              style={{ display: "none" }}
              type="file"
              onChange={(e) => setFiles(e.target.files)}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Landing;
