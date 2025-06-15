import { PlaylistProps } from "@/types/playlist";
import styles from "./styles.module.css";
import heartFull from "../../assets/images/heart-full.svg";
import heartOutline from "../../assets/images/heart-outline.svg";

type likeButtonProps = {
  song: PlaylistProps;
  onToggleLike: (id: string) => void;
};

const LikeButton = ({ song, onToggleLike }: likeButtonProps) => {
  return (
    <button onClick={() => onToggleLike(song.id)} className={styles.likeButton}>
      <img
        src={song.isLiked ? heartFull.src : heartOutline.src}
        className={styles.heart}
      />
    </button>
  );
};

export default LikeButton;
