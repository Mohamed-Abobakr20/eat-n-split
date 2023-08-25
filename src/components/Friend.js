import { Button } from "./Button.js";

export function Friend({
  friend,
  handleSelectedFriend,
  selectedFriend,
}) {
  let isSelected = false;
  if (selectedFriend != null) {
    isSelected = selectedFriend.id === friend.id;
  }

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}

      <Button
        name={isSelected ? "Close" : "Select"}
        onclick={() => {
          handleSelectedFriend(friend);
        }}
      />
    </li>
  );
}
