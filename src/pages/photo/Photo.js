import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { BiLink } from "react-icons/bi";
import Emojis from "./Emojis";

const Photo = () => {
  const [showMessage, setShowMessage] = useState(false);

  let { id: idParams } = useParams();
  idParams = parseInt(idParams);
  // console.log(idParams);
  const photos = JSON.parse(localStorage.getItem("fotografis") || "[]");
  const photo = photos.find((item) => item.id === idParams);
  //console.log(photo);

  const { date, name, url, reactions } = photo;
  //console.log(url);

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
        <div className="photo-body" data-reactions={`${2} Reactions`}>
          <img src={url} alt={name} className="photo-container__photo" />
        </div>
        <footer className="footer">
          <button className="like-btn">
            <i class="fas fa-thumbs-up"></i>
          </button>
          <button className="comment-btn">
            <i class="fas fa-comment-alt"></i>
          </button>
          <button className="share-btn">
            <i
              class="fas fa-share-square"
              onClick={() => setShowMessage(true)}
            ></i>
          </button>
          <div className="reactions show-content">
            <Emojis />
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
