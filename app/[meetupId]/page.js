import MeetupDetails from "@/components/meetups/MeetupDetails";

import { notFound } from "next/navigation";

const FetchData = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/meetups", {
      cache: "no-cache",
    });
    if (!res.ok) {
      throw new Error("invalid fetch");
    }
    return await res.json();
  } catch (error) {
    console.log(error.message);
  }
};

const Details = async ({ params }) => {
  const products = await FetchData();
  const id = params.meetupId;
  const det = products.result.find((item) => item._id === id);
  if (!det) {
    notFound();
  }

  return <MeetupDetails details={det} />;
};
async function generateMetadata({ params }) {
  const product = await FetchData();

  const id = params.meetupId;
  const det = product.result.find((item) => item._id === id);
  return {
    title: det.title,
    openGraph: {
      title: det.title,
      description: det.description,
    },
  };
}

export default Details;
