import "./App.css";
import { FriendCard } from "./components/FriendCard";

//page where i want to list my friends

const friends = [
  { name: "Ashwin", address: "coimbatore" },
  { name: "Sid", address: "mumbai" },
  { name: "lotika", address: "nepal" },
  { name: "ash", address: "NYC" },
  { name: "zap", address: "delhi" },
];


//prop drilling in react
function App() {
  return (
    <>
      friends.map(e)=>{
	return <friendcard name=e.name address=e.address/>
    </>
  );
}