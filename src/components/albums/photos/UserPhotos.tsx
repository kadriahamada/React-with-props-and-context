import { photos } from "../../types/general_types";

type props = {
  photos: photos[];
  // setShow: React.Dispatch<React.SetStateAction<boolean>>;
  setPhotos: React.Dispatch<React.SetStateAction<photos[]>>;
  setShowPhotos: React.Dispatch<React.SetStateAction<boolean>>;
};
const UserPhotos = ({ photos, setPhotos, setShowPhotos }: props) => {
  const HidePhotos = () => {
    setShowPhotos(false);
    setPhotos([]);
  };
  return (
    <div>
      <button onClick={HidePhotos}>Hide Photos</button>
      {photos.map((photo) => (
        <div>
          <h2>Title: {photo.title}</h2>
          <div>
            <p>Album Id: {photo.albumId}</p>
            <p>Id: {photo.id}</p>
            <p>Thumbnail Url: {photo.thumbnailUrl}</p>
          </div>
          <div>
            <img src={photo.url} alt={photo.title} />
          </div>
        </div>
      ))}
    </div>
  );
};
export default UserPhotos;
