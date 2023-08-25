import { useState } from "react";
import { Button } from "./Button.js";

export function SplitBill({ friend, onSplit }) {
  const [billValue, setBillValue] = useState("");
  const [userExpense, setUserExpense] = useState("");
  const friendExpense =
    billValue && userExpense ? Number(billValue - userExpense) : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSplitBillSubmit(e) {
    e.preventDefault();
    if (!billValue || !userExpense) return;
    onSplit(whoIsPaying === "user" ? friendExpense : -userExpense);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSplitBillSubmit}>
      <h2>Split a bill with {friend.name}</h2>
      <label>Bill Value</label>
      <input
        type="number"
        value={billValue}
        onChange={(e) => setBillValue(e.target.value)}
      />

      <label>Your expense</label>
      <input
        type="number"
        value={userExpense}
        onChange={(e) =>
          setUserExpense(
            Number(e.target.value) > Number(billValue)
              ? userExpense
              : e.target.value
          )
        }
      />

      <label>{friend.name} expense</label>
      <input type="number" disabled value={friendExpense} />

      <label>Who is paying the bill?</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{friend.name}</option>
      </select>
      <Button name="Split bill" />
    </form>
  );
}
