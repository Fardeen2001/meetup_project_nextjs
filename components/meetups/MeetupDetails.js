import React from "react";
import Card from "../ui/Card";
import Image from "next/image";
import classes from "./MeetupDetails.module.css";

const MeetupDetails = (props) => {
  return (
    <Card>
      {" "}
      <div className={classes.image}>
        <Image
          src={props.details.image}
          alt={props.details.title}
          quality={100}
        />
      </div>
      <div className={classes.content}>
        <h1>{props.details.title}</h1>
        <h3>{props.details.description}</h3>
        <address>{props.details.address}</address>
      </div>
    </Card>
  );
};

export default MeetupDetails;
