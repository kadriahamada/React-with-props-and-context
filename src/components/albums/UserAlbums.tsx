import { useState } from "react";
import { albums, photos } from "../types/general_types";
import UserPhotos from "./photos/UserPhotos";

type props = {
  albums: albums[];
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  setAlbums: React.Dispatch<React.SetStateAction<albums[]>>;
};

const UserAlbums = ({ albums, setShow, setAlbums }: props) => {
  const [photos, setPhotos] = useState<photos[]>([]);
  const [showPhotos, setShowPhotos] = useState<boolean>(false);

  const FetchPhotos = async (id: number) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos?albumId=${id}`,
        {
          method: "GET",
        }
      );
      const data = (await response.json()) as photos[];
      setPhotos(data);
      setShowPhotos(true);
    } catch (error) {
      throw error;
    }
  };
  const HideAlbum = () => {
    setShow(false);
    setAlbums([]);
  };
  return (
    <div>
      <button onClick={HideAlbum}>Hide Albums</button>
      <div>
        {albums.map((album) => (
          <div key={album.id}>
            <h2>{album.title}</h2>
            <div>
              <p>Album ID: {album.id}</p>
              <p>User ID: {album.userId}</p>
              <button onClick={() => FetchPhotos(album.id)}>Get Photos</button>
              {showPhotos && photos.length > 0 && (
                <UserPhotos
                  photos={photos}
                  setShowPhotos={setShowPhotos}
                  setPhotos={setPhotos}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserAlbums;
