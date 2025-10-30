import { useAudioPlayer } from "./hooks/useAudioPlayer";
import Playlist from "./components/Playlist";
import Header from "./components/Header";
import MainPlayer from "./components/MainPlayer";
import { useEffect } from "react";
import { motion } from "framer-motion";
import "./index.css";


import Particles from "react-tsparticles";


// 🎵 Songs array (make sure files are inside /public/music/)
const songs = [
  {
    title: "At Peace",
    artist: "Artist 1",
    src: "/music/atpeace.mp3",
    cover: "/music/atpeace.jpg",
  },
  {
    title: "Call Aundi",
    artist: "Artist 2",
    src: "/music/callaundi.mp3",
    cover: "/music/callaundi.jpg",
  },
  {
    title: "Knife_Brows.mp3",
    artist: "Artist 3",
    src: "/music/Knife_Brows.mp3",
    cover: "/music/knifebrows.jpg",
  },
  {
    title: "Fell_For_You.mp3",
    artist: "Artist 4",
    src: "/music/Fell_For_You.mp3",
    cover: "/music/fellforyou.jpg",
  },
  {
    title: "MF_Gabhru.mp3",
    artist: "Artist 5",
    src: "/music/MF_Gabhru.mp3",
    cover: "/music/mfgabru.jpg",
  },
  {
    title: "Lose_My_Mind.mp3",
    artist: "Artist 6",
    src: "/music/Lose_My_Mind.mp3",
    cover: "/music/losemy.jpg",
  },
  {
    title: "You_Haunt_Me.mp3",
    artist: "Artist 7",
    src: "/music/You_Haunt_Me.mp3",
    cover: "/music/youhaunt.jpg",
  },
  {
    title: "Ride_It.mp3",
    artist: "Artist 8",
    src: "/music/Ride_It.mp3",
    cover: "/music/rideit.jpg",
  },
  {
    title: "mockingbird.mp3",
    artist: "Artist 9",
    src: "/music/mockingbird.mp3",
    cover: "/music/mockingbird.jpg",
  },
  {
    title: "Blue_Yung_Kai.mp3",
    artist: "Artist 10",
    src: "/music/Blue_Yung_Kai.mp3",
    cover: "/music/yungkai.jpg",
  }


];

export default function App() {
  const {
    currentIndex,
    isPlaying,
    togglePlay,
    playNext,
    playPrev,
    currentSong,
    currentTime,
    duration,
    seek,
    volume,
    changeVolume,
    isMuted,
    toggleMute,
    shuffle,
    toggleShuffle,
    repeat,
    toggleRepeat,
    playSongAtIndex
  } = useAudioPlayer(songs);

  // ⌨️ Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.code) {
        case "Space":
          e.preventDefault();
          togglePlay();
          break;
        case "ArrowRight":
          playNext();
          break;
        case "ArrowLeft":
          playPrev();
          break;
        case "ArrowUp":
          e.preventDefault();
          changeVolume(Math.min(volume + 0.1, 1));
          break;
        case "ArrowDown":
          e.preventDefault();
          changeVolume(Math.max(volume - 0.1, 0));
          break;
        default:
          break;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [togglePlay, playNext, playPrev, volume, changeVolume]);

  return (

    <div
      className="galaxy-bg flex flex-col min-h-screen text-white transition-all duration-700 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-lg"></div>






      {/* Overlay for blur effect */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-lg"></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2E026D] via-[#15162C] to-black opacity-60"></div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col min-h-screen">





        {/* Header */}
        <Header />

        {/* Main Player Section */}
        <motion.main
          className="flex flex-col items-center justify-center flex-1 px-4 md:px-0 pt-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >




          <MainPlayer
            currentSong={currentSong}
            isPlaying={isPlaying}
            togglePlay={togglePlay}
            playNext={playNext}
            playPrev={playPrev}
            shuffle={shuffle}
            toggleShuffle={toggleShuffle}
            repeat={repeat}
            toggleRepeat={toggleRepeat}
            currentTime={currentTime}
            duration={duration}
            seek={seek}
            volume={volume}
            changeVolume={changeVolume}
            isMuted={isMuted}
            toggleMute={toggleMute}
          />
        </motion.main>

        {/* Playlist Section */}
        <aside className="w-full md:max-w-md mx-auto mt-6 mb-20">
          <Playlist
            songs={songs}
            currentIndex={currentIndex}
            playSongAtIndex={playSongAtIndex} // ✅ pass the function here
          />
        </aside>

        <footer className="text-center text-sm text-gray-500 py-4">
          © 2025 LEVELS by Shashank Sharma 🎵
        </footer>



        {/* Mobile Mini-player */}
        <div className="fixed bottom-0 left-0 w-full bg-black/70 backdrop-blur-md px-4 py-2 flex items-center justify-between md:hidden">
          <span className="font-semibold truncate">
            {currentSong.title} - {currentSong.artist}
          </span>
          <button
            onClick={togglePlay}
            className="ml-4 bg-white text-black p-2 rounded-full"
          >
            {isPlaying ? "❚❚" : "▶"}
          </button>
        </div>
      </div>
    </div>

  );
}
