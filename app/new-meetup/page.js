"use client";
import NewMeetupForm from "@/components/meetups/NewMeetupForm";

const page = () => {
  const newMeetupHandeler = async (enteredMeetupData) => {
    try {
      const res = await fetch("http://localhost:3000/api/meetups", {
        method: "POST",
        body: JSON.stringify(enteredMeetupData),
        headers: {
          "Content-Type": "application/json",
        },
        next: {
          revalidate: 1,
        },
      });
      if (!res.ok) {
        throw new Error("invalid");
      }
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return <NewMeetupForm onAddMeetup={newMeetupHandeler} />;
};

export default page;
