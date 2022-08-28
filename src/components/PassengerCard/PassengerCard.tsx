import React, { FC } from "react";
import { IPassengerProps } from "../../interfaces";

import "./PassengerCard.scss";

export const PassengerCard = React.forwardRef<HTMLDivElement, IPassengerProps>(
  (props, ref) => {
    return (
      <div ref={ref} className="passenger-card">
        <div className="passenger-card__airline-logo">
          <img src={props.passenger.airlineLogo} alt="logo" />
        </div>
        <div className="passenger-card__name">{props.passenger.name}</div>
      </div>
    );
  }
);
