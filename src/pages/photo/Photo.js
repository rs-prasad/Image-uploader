import { useEffect, useState } from "react";
import { BiLink } from "react-icons/bi";
import Emojis from "./Emojis";

const Photo = () => {
  const curPhoto = JSON.parse(localStorage.getItem("fotografis") || "{}");
  const { date, name, url } = curPhoto;
  const [showMessage, setShowMessage] = useState(false);
  const [photoObject, setPhotoObject] = useState(curPhoto);
  const [showReactions, setShowReactions] = useState(false);

  const sharePhoto = () => {
    setShowMessage(true);
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl);
  };
  const addReaction = () => {
    let newPhoto = { ...photoObject, reactions: photoObject.reactions + 1 };
    setPhotoObject(newPhoto);
    setShowReactions(false);
  };

  useEffect(() => {
    setTimeout(() => setShowMessage(false), 3000);
  }, [showMessage]);
  useEffect(() => {
    localStorage.setItem("fotografis", JSON.stringify(photoObject));
  }, [photoObject]);

  return (
    <section className="section-photo-center">
      <section className="photo-container">
        <header className="header">
          <h3>{name}</h3>
          <p>{date.slice(0, 10)}</p>
        </header>
        <div
          className="photo-body"
          data-reactions={
            photoObject.reactions !== 0
              ? `${photoObject.reactions} Reactions`
              : ""
          }
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
            <Emojis addReaction={addReaction} />
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
