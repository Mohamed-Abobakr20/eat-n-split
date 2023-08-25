import { useState } from "react";
import { Button } from "./Button.js";

export function AddFriend({ handleFriendsList }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSumbitAddFriend(e) {
    e.preventDefault();
    if (name === "" || image === "") return;

    const id = crypto.randomUUID();
    const friend = {
      name,
      image: `${image.endsWith("48") ? `${image}?=${id}` : image}`,
      balance: 0,
      id: id,
    };

    handleFriendsList(friend);
    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSumbitAddFriend}>
      <label>Friend Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button name="Add" />
    </form>
  );
}
