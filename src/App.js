import { useState, useEffect } from "react";
import { FriendsList } from "./components/FriendsList.js";
import { AddFriend } from "./components/AddFriend.js";
import { Button } from "./components/Button.js";
import { SplitBill } from "./components/SplitBill.js";

// ---------------------------------------------

export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(
    JSON.parse(localStorage.getItem("friends"))
      ? JSON.parse(localStorage.getItem("friends"))
      : []
  );
  const [selectedFriend, setSelectedFriend] = useState(null);

  useEffect(() => {
    localStorage.setItem("friends", JSON.stringify(friends));
  }, [friends]);

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
    setSelectedFriend(null);
  }

  function handleFriendsList(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }

  function handleSelectedFriend(friend) {
    setSelectedFriend((cur) => (friend.id === cur?.id ? null : friend));
    setShowAddFriend(false);
  }

  function handleOnSplit(balance) {
    setFriends(
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: balance + friend.balance }
          : friend
      )
    );
    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          handleSelectedFriend={handleSelectedFriend}
          selectedFriend={selectedFriend}
        />
        {showAddFriend && <AddFriend handleFriendsList={handleFriendsList} />}
        <Button
          name={showAddFriend ? "Close" : "Add Friend"}
          onclick={handleShowAddFriend}
        />
      </div>
      {selectedFriend && (
        <SplitBill friend={selectedFriend} onSplit={handleOnSplit} />
      )}
    </div>
  );
}
