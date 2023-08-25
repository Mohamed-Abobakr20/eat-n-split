
export function Button({ name, onclick }) {
  return (
    <button className="button" onClick={onclick}>
      {name}
    </button>
  );
}
