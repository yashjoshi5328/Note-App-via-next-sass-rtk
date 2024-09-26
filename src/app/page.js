'use client'
import AddNote from "./components/AddNote";
import DisplayNote from "./components/DisplayNote";
import './styles/home.scss';

export default function Home() {
  return (
    <>
      <AddNote/>
      <DisplayNote/>
    </>
  );
}
