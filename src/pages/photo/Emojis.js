import data from "../../data";

const Emojis = ({ reactions }) => {
  const { emojis } = data;

  const addReaction = (event) => {};

  return (
    <>
      <ul className="emojis-tab">
        {emojis.map((item, index) => {
          const { name, emoji } = item;
          return (
            <li
              key={index}
              className={`reaction__${name}`}
              onClick={addReaction}
            >
              {emoji}
            </li>
          );
        })}
      </ul>

      <ul className="emojis-popup">
        {emojis.map((item, index) => {
          const { name, emoji } = item;
          return (
            <li
              className="emoji"
              key={index}
              className={`reaction__${name}`}
              onClick={addReaction}
            >
              {emoji}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Emojis;
