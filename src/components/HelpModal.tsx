import React from "react";
import { Modal } from "@geist-ui/react";
import { ArrowDownCircle, ArrowLeft, ArrowRight } from "@geist-ui/react-icons";

interface IProps {
  bindings: {
    open: boolean;
    onClose: () => void;
  };
}

const HelpModal = ({ bindings }: IProps) => {
  return (
    <Modal width="35rem" {...bindings}>
      <Modal.Title>Help</Modal.Title>
      <Modal.Content>
        <ul>
          <li>
            click on the <ArrowDownCircle size={20} /> to download image with
            the current filter
          </li>
          <li>
            you can use the left <ArrowLeft size={20} /> and right{" "}
            <ArrowRight size={20} /> to navigate through the different filters
          </li>
        </ul>
      </Modal.Content>
    </Modal>
  );
};

export default HelpModal;
