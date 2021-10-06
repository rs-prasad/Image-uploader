import { useState, useRef } from "react";
import { useHistory } from "react-router";
import image from "../../resources/file2.png";

const UploadPhoto = () => {
  const [selected, setSelected] = useState(false);
  const [picture, setPicture] = useState(image);
  const [fileName, setFileName] = useState("You have not selected any picture");
  const [fileObject, setFileObject] = useState({});
  const inputFile = useRef("");
  const history = useHistory();

  const handleChange = () => {
    const file = inputFile.current.files[0];
    setFileName(file.name);
    const url = URL.createObjectURL(file);
    setPicture(url);
    setSelected(true);

    const newObject = {
      key: file.lastModified,
      name: file.name,
      url: url,
      reactions: [],
    };
    setFileObject(newObject);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const fotografis = JSON.parse(localStorage.getItem("fotografis") || "[]");
    fotografis.push(fileObject);
    localStorage.setItem("fotografis", JSON.stringify(fotografis));
    history.push(`/photo/${fileObject.key}`);
  };
  return (
    <section className="upload-photo-section">
      <form className="upload-form" onSubmit={handleSubmit}>
        <div className="image-container">
          <div className="border">
            <img src={picture} alt="img" className="image" />
          </div>
        </div>
        <p className="status">{fileName}</p>
        <p className="warning">*only .jpeg formate is allowed.</p>
        <input
          type="file"
          id="image-input"
          ref={inputFile}
          accept="image/jpeg"
          onChange={handleChange}
        />
        <div className="button">
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
