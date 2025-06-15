import { PlaylistProps } from "@/types/playlist";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./styles.module.css";

type AddSong = {
  addSong: (newSong: PlaylistProps) => void;
};

const Add = ({ addSong }: AddSong) => {
  const [titleInput, setTitleInput] = useState("");
  const [artistInput, setArtistInput] = useState("");
  const [imgInput, setImgInput] = useState("");
  const [error, setError] = useState("");

  const onClick = () => {
    if (
      titleInput.length < 5 ||
      artistInput.length < 5 ||
      imgInput.length < 5
    ) {
      setError("Please fill all fields");
    } else {
      const newSong = {
        id: uuidv4(),
        title: titleInput,
        artist: artistInput,
        isLiked: false,
        imgUrl: imgInput,
      };

      addSong(newSong);
    }

    setTitleInput("");
    setArtistInput("");
    setImgInput("");
  };
  return (
    <div>
      <h3 className={styles.headline}>Add new Song</h3>
      <div className={styles.inputsWrapper}>
        <input
          type="text"
          placeholder="Song name"
          value={titleInput}
          onChange={(e) => setTitleInput(e.target.value)}
        />
        <input
          type="text"
          placeholder="Singer"
          value={artistInput}
          onChange={(e) => setArtistInput(e.target.value)}
        />
        <input
          type="text"
          placeholder="Song cover URL"
          value={imgInput}
          onChange={(e) => setImgInput(e.target.value)}
        />
      </div>
      <div className={styles.addSong}>
        <button onClick={onClick} className={styles.addButton}>
          Add Song
        </button>
      </div>
      {error != "" && (
        <div className={styles.errorMessage}>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default Add;
