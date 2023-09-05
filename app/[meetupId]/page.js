import MeetupDetails from "@/components/meetups/MeetupDetails";
import image from "../../public/tajmahal.jpg";
const Dummy = [
  {
    id: "m1",
    title: "First meetup",
    image: image,
    address: "taj mahal,agra",
    description: "our first meetup",
  },
  {
    id: "m2",
    title: "Second meetup",
    image: image,
    address: "taj mahal,agra",
    description: "our second meetup",
  },
];
const Details = ({ params }) => {
  const id = params.meetupId;
  const det = Dummy.find((item) => item.id === id);
  return <MeetupDetails details={det} />;
};

export default Details;
