import React from "react";
import PropTypes from "prop-types";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import clsx from "clsx";
import ColorlibConnector from "../colorlib/ColorlibConnector";
import QontoStepIcon from "../stepIcon/QontoStepIcon";
import styles from "./style";
import styleStepper from "../colorlib/styleStepper";

QontoStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
};

export default function ProgressSteppers({
  getSteps,
  changeActivStep,
  listIcons,
}) {
  const classes = styles();
  const steps = getSteps();

  const ColorlibStepIcon = ({ active, completed, icon }) => {
    const classes = styleStepper();
    const icons = listIcons;

    return (
      <div
        className={clsx(classes.root, {
          [classes.active]: active,
          [classes.completed]: completed,
        })}
      >
        {icons[String(icon)]}
      </div>
    );
  };

  return (
    <div className={classes.root}>
      <Stepper
        classes={{
          alternativeLabel: classes.alternativeLabel,
        }}
        alternativeLabel
        orientation={"horizontal"}
        activeStep={changeActivStep()}
        connector={<ColorlibConnector />}
      >
        {steps.map((label, i) => (
          <Step key={i}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}
