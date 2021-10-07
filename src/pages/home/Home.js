import { Link } from "react-router-dom";

const Home = () => {
  const photos = JSON.parse(localStorage.getItem("fotografis") || "[]");
  console.log(photos);
  if (photos.length === 0) {
    return <h3>No Photos Available</h3>;
  }
  return (
    <div className="container">
      {photos.map((photo) => {
        const { id, name, url } = photo;
        return (
          <div className="post" key={id}>
            <Link to={`/photo/${id}`}>{name}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
