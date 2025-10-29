import { Play, Pause, SkipBack, SkipForward, Shuffle, Repeat, Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

export default function MainPlayer({
    currentSong, isPlaying, togglePlay, playNext, playPrev,
    shuffle, toggleShuffle, repeat, toggleRepeat,
    currentTime, duration, seek, volume, changeVolume, isMuted, toggleMute
}) {
    const formatTime = (t) => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, '0')}`;

    return (
        <div className="flex flex-col items-center text-center space-y-6">
            {/* Album Art */}
            <motion.img
                key={currentSong.cover}
                src={currentSong.cover}
                alt={currentSong.title}
                className="w-64 h-64 rounded-2xl shadow-xl object-cover"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{
                    opacity: 1,
                    scale: isPlaying ? 1.05 : 1,  // 🔹 Slight zoom when playing
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            />

            {/* Song Info */}
            <div>
                <h2 className="text-2xl font-bold">{currentSong.title}</h2>
                <p className="text-gray-400">{currentSong.artist}</p>
            </div>

            {/* Progress Bar */}
            <div className="w-full max-w-md flex items-center space-x-3">
                <span className="text-sm">{formatTime(currentTime)}</span>
                <input
                    type="range"
                    min="0"
                    max={duration || 0}
                    value={currentTime}
                    onChange={(e) => seek(e.target.value)}
                    className="w-full h-1 bg-gray-600 rounded-lg cursor-pointer accent-white"
                />
                <span className="text-sm">{formatTime(duration)}</span>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center space-x-5 mt-3">
                <button onClick={toggleShuffle} className={`${shuffle ? "text-blue-400" : "text-gray-300"} hover:text-white`}>
                    <Shuffle size={22} />
                </button>
                <button onClick={playPrev} className="hover:text-white"><SkipBack size={28} /></button>
                <button onClick={togglePlay} className="p-4 bg-white text-black rounded-full hover:scale-105 transition">
                    {isPlaying ? <Pause size={28} /> : <Play size={28} />}
                </button>
                <button onClick={playNext} className="hover:text-white"><SkipForward size={28} /></button>
                <button onClick={toggleRepeat} className={`${repeat ? "text-blue-400" : "text-gray-300"} hover:text-white`}>
                    <Repeat size={22} />
                </button>
            </div>

            {/* Volume */}
            <div className="flex items-center space-x-3 mt-3">
                <button onClick={toggleMute}>
                    {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </button>
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={isMuted ? 0 : volume}
                    onChange={(e) => changeVolume(parseFloat(e.target.value))}
                    className="w-24 accent-white cursor-pointer"
                />
            </div>
        </div>
    );
}
