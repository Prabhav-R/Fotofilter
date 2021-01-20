import React, { useState, useMemo, useEffect } from "react";
import { Button, Spacer, Row, Col, Tooltip, useModal } from "@geist-ui/react";
import { HelpCircle, ArrowDownCircle } from "@geist-ui/react-icons";

import Carousel from "react-spring-3d-carousel";
import Canvas from "./Canvas";
import HelpModal from "./HelpModal";
import downloadImage from "../utils/downloadImage";

import PageNotFound from "./PageNotFound";

import pixelsJS from "../utils/pixelsJS";

const Filter = ({ files }: { files: FileList | null }) => {
  const [goToSlide, setGoToSlide] = useState(0);

  const generateSlides = (file: File) => {
    const imageSrc = URL.createObjectURL(file);
    return pixelsJS.getFilterList().map((filter: string, index: number) => {
      return {
        key: index,
        filter: filter,
        content: (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h3 style={{ fontFamily: "'Poppins', sans-serif" }}>
              {filter.split("_").join(" ")}
            </h3>
            <Canvas imageSrc={imageSrc} filter={filter} />
          </div>
        ),
        onClick: () => setGoToSlide(index),
      };
    });
  };
  const slides = useMemo(() => {
    if (files) return generateSlides(files[0]);
  }, [files]);

  useEffect(() => {
    document.onkeydown = (e) => {
      if (e.key === "ArrowRight")
        setGoToSlide((prev) => (prev + 1) % slides.length);
      else if (e.key === "ArrowLeft")
        setGoToSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };
  }, []);

  const { setVisible, bindings } = useModal();

  if (files === null) return <PageNotFound />;

  return (
    <>
      <HelpModal bindings={bindings} />
      <div style={{ width: "80%", height: "500px", margin: "0 auto" }}>
        <Spacer y={2} />
        <Row style={{ marginBottom: "15px" }}>
          <Col>
            <Tooltip
              text={"Help"}
              type="secondary"
              hideArrow
              placement="bottom"
            >
              <Button
                style={{ marginRight: "3px" }}
                iconRight={<HelpCircle />}
                auto
                onClick={() => setVisible(true)}
              />
            </Tooltip>
            <Tooltip
              text={"Save"}
              hideArrow
              type="secondary"
              placement="bottom"
            >
              <Button
                style={{ marginLeft: "3px" }}
                iconRight={<ArrowDownCircle />}
                type="secondary"
                auto
                onClick={(e) =>
                  downloadImage(files[0], slides[goToSlide].filter)
                }
              />
            </Tooltip>
          </Col>
        </Row>

        <Carousel
          offsetRadius={2}
          goToSlide={goToSlide}
          animationConfig={{ tension: 120, friction: 14 }}
          showNavigation={true}
          slides={slides}
        />
      </div>
    </>
  );
};

export default Filter;
