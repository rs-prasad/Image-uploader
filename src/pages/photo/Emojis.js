import data from "../../data";

const Emojis = ({ addReaction }) => {
  const { emojis } = data;

  return (
    <ul className="emojis-tab">
      {emojis.map((item, index) => {
        const { name, emoji } = item;
        return (
          <li key={index} className={`reaction__${name}`} onClick={addReaction}>
            {emoji}
          </li>
        );
      })}
    </ul>
  );
};

export default Emojis;
