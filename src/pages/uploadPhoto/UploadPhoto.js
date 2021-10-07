import { useState, useRef } from "react";
import { useHistory } from "react-router";
import image from "../../resources/file2.png";

const UploadPhoto = () => {
  const [selected, setSelected] = useState(false);
  const [picture, setPicture] = useState(image);
  const [fileObject, setFileObject] = useState({});
  const inputFile = useRef("");
  const history = useHistory();

  const createObject = (file, url) => {
    const newObject = {
      id: new Date().getTime(),
      name: file.name,
      date: new Date(),
      url: url,
      reactions: 0,
    };
    setFileObject(newObject);
    setSelected(true);
  };

  const handleChange = () => {
    //converting image file to url
    let url;
    const file = inputFile.current.files[0];

    const reader = new FileReader();
    reader.addEventListener("load", () => {
      createObject(file, reader.result);
    });
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // reading and adding current uploaded file
    const fotografis = JSON.parse(localStorage.getItem("fotografis") || "[]");
    fotografis.push(fileObject);
    localStorage.setItem("fotografis", JSON.stringify(fotografis));
    history.push(`/photo/${fileObject.id}`);
  };

  return (
    <section className="upload-photo-section">
      <form className="upload-form" onSubmit={handleSubmit}>
        <div className="image-container">
          <div className="border">
            <img
              src={selected ? fileObject.url : image}
              alt="img"
              className="image"
            />
          </div>
        </div>
        <p className="status">
          {selected ? fileObject.name : "You have not selected any picture"}
        </p>
        <p className="warning">*only jpg/jpeg formate is allowed.</p>
        <input
          type="file"
          id="image-input"
          ref={inputFile}
          accept="image/jpeg"
          onChange={handleChange}
        />
        <div className="button">
          {/* button content */}
          {selected ? (
            <button type="submit" className="btn">
              Upload
            </button>
          ) : (
            <div className="label">
              <label htmlFor="image-input" className="btn">
                Select picture
              </label>
            </div>
          )}
        </div>
      </form>
    </section>
  );
};

export default UploadPhoto;
