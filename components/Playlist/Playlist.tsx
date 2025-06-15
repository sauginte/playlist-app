import { useState } from "react";
import styles from "./styles.module.css";
import Song from "../Song/Song";
import AddSong from "../AddSong/AddSong";
import FilterSongs from "../FilterSongs/FilterSongs";

type PlaylistProps = {
  id: string;
  title: string;
  artist: string;
  isLiked: boolean;
};

const Playlist = ({ playlist: newPlaylist }: { playlist: PlaylistProps[] }) => {
  const [allSongs, setAllSongs] = useState<PlaylistProps[]>(newPlaylist);
  const [showFavourites, setShowFavourites] = useState(false);

  const visibleSongs = showFavourites
    ? allSongs.filter((song) => song.isLiked)
    : allSongs;

  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        <h2>My playlist</h2>
        <FilterSongs
          showFavourites={showFavourites}
          setShowFavourites={setShowFavourites}
        />
        <Song playlist={visibleSongs} setPlaylist={setAllSongs} />
        <AddSong addSong={(song) => setAllSongs([...allSongs, song])} />
      </div>
    </div>
  );
};

export default Playlist;
