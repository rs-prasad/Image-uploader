import { TiWarning } from "react-icons/ti";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="error-container">
      <section className="error">
        <div className="error__message">
          <TiWarning className="error__icon" size={200} />
          <p>Opps! You are not suppose to be here.</p>
        </div>
        <button className="error__button">
          <Link to="/">Back to Home</Link>
        </button>
      </section>
    </section>
  );
};

export default Error;
