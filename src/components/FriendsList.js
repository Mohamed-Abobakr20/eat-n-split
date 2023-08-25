import { Friend } from "./Friend.js";

export function FriendsList({
  friends,
  handleSelectedFriend,
  selectedFriend,
}) {
  return (
    <ul>
      {friends.map((friend) => {
        return (
          <Friend
            friend={friend}
            key={friend.id}
            handleSelectedFriend={handleSelectedFriend}
            selectedFriend={selectedFriend}
          />
        );
      })}
    </ul>
  );
}
