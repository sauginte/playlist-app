import styles from "./styles.module.css";

type filterSongsProps = {
  showFavourites: boolean;
  setShowFavourites: React.Dispatch<React.SetStateAction<boolean>>;
};

const FilterSongs = ({
  showFavourites,
  setShowFavourites,
}: filterSongsProps) => {
  return (
    <div className={styles.buttonsWrapper}>
      <button
        onClick={() => setShowFavourites(false)}
        className={styles.showAll}
      >
        Rodyti visas
      </button>
      <button
        onClick={() => setShowFavourites(true)}
        className={styles.showFavourites}
      >
        Rodyti tik mėgstamas
      </button>
    </div>
  );
};

export default FilterSongs;
