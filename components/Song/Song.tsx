import { useState } from "react";
import styles from "./styles.module.css";
import LoveButton from "../LoveButton/LoveButton";

type PlaylistProps = {
  id: string;
  title: string;
  artist: string;
  isLiked: boolean;
};

type MainProps = {
  playlist: PlaylistProps[];
  setPlaylist: React.Dispatch<React.SetStateAction<PlaylistProps[]>>;
};

const Song = ({ playlist, setPlaylist }: MainProps) => {
  const toggleLike = (id: string) => {
    setPlaylist((prev) =>
      prev.map((song) =>
        song.id === id ? { ...song, isLiked: !song.isLiked } : song
      )
    );
  };

  const [showFavourites] = useState(false);
  const displaySongs = showFavourites
    ? playlist.filter((song) => song.isLiked === true)
    : playlist;

  return (
    <div className={styles.wrapper}>
      {displaySongs.map((song) => {
        return (
          <div className={styles.songWrapper}>
            <div className={styles.song}>
              <h4>{song.title}</h4>
              <p>{song.artist}</p>
            </div>
            <LoveButton song={song} onToggleLike={toggleLike} />
          </div>
        );
      })}
    </div>
  );
};

export default Song;
