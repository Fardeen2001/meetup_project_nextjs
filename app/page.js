import MeetupList from "../components/meetups/MeetupList";
import image from "../public/tajmahal.jpg";

const Dummy = [
  {
    id: "m1",
    title: "First meetup",
    image: image,
    description: "our first meetup",
    address: "taj mahal,agra",
  },
  {
    id: "m2",
    title: "Second meetup",
    image: image,
    description: "our second meetup",
    address: "taj mahal,agra",
  },
];
const Meetups = async () => {
  const res = await Dummy;
  return res;
};
async function Home(props) {
  const meetups = await Meetups();
  return <MeetupList meetups={meetups} />;
}

export default Home;
