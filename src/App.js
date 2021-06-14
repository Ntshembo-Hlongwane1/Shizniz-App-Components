import FriendInviteCard from "./Components/AddFriends/FriendInviteCard/FriendInviteCard";
import AddFriendToGroup from "./Components/AddFriends/AddFriendToGroup/AddFriendToGroup";

export const App = () => {
  return (
    <div className="App">
      {/* <FriendInviteCard username={"Junior"} /> */}

      <AddFriendToGroup username="Junior" />
    </div>
  );
};
