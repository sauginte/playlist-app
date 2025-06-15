import { useState } from "react";
import styles from "./styles.module.css";
import heartFull from "../../assets/images/heart-full.svg";
import heartOutline from "../../assets/images/heart-outline.svg";

type PlaylistProps = {
  id: string;
  title: string;
  artist: string;
  isLiked: boolean;
};

type likeButtonProps = {
  song: PlaylistProps;
  onToggleLike: (id: string) => void;
};

const LoveButton = ({ song, onToggleLike }: likeButtonProps) => {
  return (
    <button onClick={() => onToggleLike(song.id)} className={styles.likeButton}>
      <img
        src={song.isLiked ? heartFull.src : heartOutline.src}
        className={styles.heart}
      />
    </button>
  );
};

export default LoveButton;
