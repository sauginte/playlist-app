import { PlaylistProps } from "@/types/playlist";
import { useState } from "react";
import styles from "./styles.module.css";
import LikeButton from "../LikeButton/LikeButton";

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
            <div className={styles.coverAndSongWrapper}>
              <div className={styles.songCover}>
                <img src={song.imgUrl} />
              </div>
              <div className={styles.song}>
                <h4>{song.title}</h4>
                <p>{song.artist}</p>
              </div>
            </div>
            <LikeButton song={song} onToggleLike={toggleLike} />
          </div>
        );
      })}
    </div>
  );
};

export default Song;
