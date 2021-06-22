import React from "react";
import SettingsIcon from "@material-ui/icons/Settings";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import VideoLabelIcon from "@material-ui/icons/VideoLabel";
import CloudDoneIcon from "@material-ui/icons/CloudDone";
import SendIcon from "@material-ui/icons/Send";
import ScheduleIcon from "@material-ui/icons/Schedule";
import ProgressSteppers from "./progressStepper/ProgressSteppers";

export default function Stepper({ status }) {
  function getSteps() {
    return ["step 1", "step 2", "step 3", "step 4", "step 5", "step 6"];
  }

  const listIcons = {
    1: <CloudUploadIcon />,
    2: <CloudDoneIcon />,
    3: <ScheduleIcon />,
    4: <SendIcon />,
    5: <SettingsIcon />,
    6: <VideoLabelIcon />,
  };

  const changeActivStep = () => {
    switch (status) {
      case "status 1":
        return 1;
      case "status 2":
        return 2;
      case "status 3":
        return 3;
      case "status 4":
        return 4;
      case "status 5":
        return 5;
      case "status 6":
        return 6;
      default:
        return null;
    }
  };

  return (
    <ProgressSteppers
      getSteps={getSteps}
      changeActivStep={changeActivStep}
      listIcons={listIcons}
    />
  );
}
