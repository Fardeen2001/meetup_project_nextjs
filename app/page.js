import MeetupList from "../components/meetups/MeetupList";

const Meetups = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/meetups", {
      cache: "no-cache",
    });
    if (!res.ok) {
      throw new Error("fetching failed");
    }
    return await res.json();
  } catch (error) {
    console.log(error.message);
  }
};
async function Home(props) {
  const meetups = await Meetups();
  console.log(meetups);
  return <MeetupList meetups={meetups.result} />;
}

export default Home;
