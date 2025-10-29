export default function PlayerControls({ isPlaying, togglePlay, playNext, playPrev }) {
    return (
        <div className="flex gap-4 mt-4">
            <button onClick={playPrev} className="px-4 py-2 bg-gray-700 rounded">⏮ Prev</button>
            <button onClick={togglePlay} className="px-4 py-2 bg-blue-500 rounded">
                {isPlaying ? "⏸ Pause" : "▶ Play"}
            </button>
            <button onClick={playNext} className="px-4 py-2 bg-gray-700 rounded">Next ⏭</button>
        </div>
    );
}
