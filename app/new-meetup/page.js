"use client";
import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import { useRouter } from "next/navigation";

export const metadata = {
  title: "Add a new meetup",
  description:
    "Add your own meetups and create ammazing networking opportunities",
};
const NewMeetupPage = () => {
  const router = useRouter();
  const newMeetupHandeler = async (enteredMeetupData) => {
    try {
      const res = await fetch("http://localhost:3000/api/meetups", {
        method: "POST",
        body: JSON.stringify(enteredMeetupData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        throw new Error("invalid");
      }
      await res.json();
      if (res.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return <NewMeetupForm onAddMeetup={newMeetupHandeler} />;
};

export default NewMeetupPage;
