import FriendInviteCard from "./Components/AddFriends/FriendInviteCard/FriendInviteCard";
import AddFriendToGroup from "./Components/AddFriends/AddFriendToGroup/AddFriendToGroup";
import ShowFriends from "./Components/ShowFriends/ShowFriends";
import { AddPlace } from "./Components/AddPlace/AddPlace";
import { FavoritePlaceProfile } from "./Components/FavoritePlaceProfile/FavoritePlaceProfile";

export const App = () => {
  return (
    <div className="App">
      {/* <FriendInviteCard username={"Junior"} /> */}

      {/* <AddFriendToGroup username="Junior" /> */}

      {/* <ShowFriends /> */}

      {/* <AddPlace /> */}

      <FavoritePlaceProfile />
    </div>
  );
};
