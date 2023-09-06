import MeetupDetails from "@/components/meetups/MeetupDetails";
import image from "../../public/tajmahal.jpg";
import { notFound } from "next/navigation";
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
const fetch = async () => {
  const res = Dummy;
  return res;
};

export async function generateStaticParams() {
  return [{ id: "m1" }, { id: "m2" }, { id: "m3" }];
}
const Details = async ({ params }) => {
  const products = await fetch();
  const id = params.meetupId;
  const det = products.find((item) => item.id === id);
  if (!det) {
    notFound();
  }

  return <MeetupDetails details={det} />;
};

export default Details;
