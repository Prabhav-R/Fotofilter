import React, { useState, useEffect } from "react";
import Background from "./components/Background";
import Filter from "./components/Filter";
import Landing from "./components/Landing";
import MobileUsers from "./components/MobileUsers";
import PageNotFound from "./components/PageNotFound";

import { isBrowser } from "react-device-detect";

const Application = () => {
  const [files, setFiles] = useState<FileList | null>(null);
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (isBrowser) setStep(1);
  }, []);

  const validInput = () => {
    for (let i = 0; files && i < files.length; i++) {
      const fileType = files[i]["type"];
      const validImageTypes = ["image/gif", "image/jpeg", "image/png"];
      if (!validImageTypes.includes(fileType)) return false;
    }

    return files && files.length > 0;
  };

  const nextStep = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (validInput()) setStep((step) => step + 1);
  };

  switch (step) {
    case 0:
      return <MobileUsers setStep={setStep} />;
    case 1:
      return (
        <>
          <Background />
          <Landing nextStep={nextStep} files={files} setFiles={setFiles} />
        </>
      );

    case 2:
      return <Filter files={files} />;
    default:
      return <PageNotFound />;
  }
};

export default Application;
