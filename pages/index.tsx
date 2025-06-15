import { PlaylistProps } from "@/types/playlist";
import { useState } from "react";
import Playlist from "@/components/Playlist/Playlist";
export default function Home() {
  const [playlist] = useState<PlaylistProps[]>([
    {
      id: "1",
      title: "Back on 74",
      artist: "Jungle",
      isLiked: true,
      imgUrl: "https://i1.sndcdn.com/artworks-DQlymSd1USHZ-0-t500x500.jpg",
    },
    {
      id: "2",
      title: "Bohemian Rhapsody",
      artist: "Queen",
      isLiked: false,
      imgUrl:
        "https://i.scdn.co/image/ab67616d0000b273e8b066f70c206551210d902b",
    },
    {
      id: "3",
      title: "Busy Earnin'",
      artist: "Jungle",
      isLiked: true,
      imgUrl:
        "https://i.scdn.co/image/ab67616d0000b273329efe0c810a570d94393a29",
    },
  ]);
  return (
    <>
      <Playlist playlist={playlist} />
    </>
  );
}
