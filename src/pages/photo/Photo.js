import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { BiLink } from "react-icons/bi";
import Emojis from "./Emojis";

const Photo = () => {
  let { id: idParams } = useParams();
  idParams = parseInt(idParams);
  const photos = JSON.parse(localStorage.getItem("fotografis") || "[]");
  const photo = photos.find((item) => item.id === idParams);

  const { date, name, url } = photo;
  const [showMessage, setShowMessage] = useState(false);
  const [reactions, setReactions] = useState(2);
  const [showReactions, setShowReactions] = useState(false);

  const sharePhoto = () => {
    setShowMessage(true);
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl);
  };

  useEffect(() => {
    setTimeout(() => setShowMessage(false), 3000);
  }, [showMessage]);

  return (
    <section className="section-photo-center">
      <section className="photo-container">
        <header className="header">
          <h3>{name}</h3>
          <p>{date.slice(0, 10)}</p>
        </header>
        <div
          className="photo-body"
          data-reactions={reactions !== 0 ? `${reactions} Reactions` : ""}
        >
          <img src={url} alt={name} className="photo-container__photo" />
        </div>
        <footer className="footer" onMouseLeave={() => setShowReactions(false)}>
          <button className="like-btn">
            <i
              className="fas fa-thumbs-up"
              onMouseEnter={() => setShowReactions(true)}
            ></i>
          </button>
          <button className="comment-btn">
            <i className="fas fa-comment-alt"></i>
          </button>
          <button className="share-btn">
            <i className="fas fa-share-square" onClick={sharePhoto}></i>
          </button>
          <div className={`reactions ${showReactions ? "show-content" : ""}`}>
            <Emojis reactions={reactions} />
          </div>
        </footer>
      </section>

      <div className={`message ${showMessage ? "show-content" : ""}`}>
        <p>
          <BiLink />
          Like copied
        </p>
      </div>
    </section>
  );
};

export default Photo;
