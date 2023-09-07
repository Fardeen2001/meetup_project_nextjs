import Image from "next/image";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import Link from "next/link";

function MeetupItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <Image
            src={props.image}
            alt={props.title}
            quality={100}
            priority="false"
            width={900000000}
            height={90000000}
          />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <Link href={`/${props.id}`}>
            <button>Show Details</button>
          </Link>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
