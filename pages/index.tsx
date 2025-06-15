import { useState } from "react";
import Playlist from "@/components/Playlist/Playlist";
export default function Home() {
  type PlaylistProps = {
    id: string;
    title: string;
    artist: string;
    isLiked: boolean;
  };

  const [playlist] = useState<PlaylistProps[]>([
    {
      id: "1",
      title: "Back on 74",
      artist: "Jungle",
      isLiked: true,
    },
    {
      id: "2",
      title: "Bohemian Rhapsody",
      artist: "Queen",
      isLiked: false,
    },
    {
      id: "3",
      title: "Busy Earnin'",
      artist: "Jungle",
      isLiked: true,
    },
  ]);
  return (
    <>
      <Playlist playlist={playlist} />
    </>
  );
}
