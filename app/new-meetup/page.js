"use client";
import NewMeetupForm from "@/components/meetups/NewMeetupForm";

const page = () => {
  const newMeetupHandeler = (enteredMeetupData) => {
    console.log(enteredMeetupData);
  };
  return <NewMeetupForm onAddMeetup={newMeetupHandeler} />;
};

export default page;
