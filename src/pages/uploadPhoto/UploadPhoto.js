import { BsCardImage, BsCode } from "react-icons/bs";
import { IconContext } from "react-icons/lib";

const UploadPhoto = () => {
  return (
    <section className="upload-photo-section">
      <section className="upload-photo">
        <form className="upload-form">
          <div className="upload-form__image-icon">
            <IconContext.Provider
              value={{ className: "upload-form__image-icon" }}
            >
              <BsCardImage />
            </IconContext.Provider>
          </div>
        </form>
      </section>
    </section>
  );
};

export default UploadPhoto;
