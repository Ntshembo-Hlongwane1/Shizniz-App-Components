import FriendInviteCard from "./Components/FriendInviteCard/FriendInviteCard";
export const App = () => {
  return (
    <div className="App">
      <FriendInviteCard username={"Junior"} />
      <FriendInviteCard username={"Max"} />
      <FriendInviteCard username={"Shaun"} />
    </div>
  );
};
