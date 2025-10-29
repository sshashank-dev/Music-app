export default function VolumeControl({ volume, changeVolume, isMuted, toggleMute }) {
    return (
        <div className="flex items-center gap-2 mt-4">
            <button
                onClick={toggleMute}
                className="px-2 py-1 bg-gray-700 rounded hover:bg-gray-600"
            >
                {isMuted ? "🔇" : "🔊"}
            </button>
            <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={isMuted ? 0 : volume}
                onChange={(e) => changeVolume(parseFloat(e.target.value))}
                className="w-40 h-2 rounded-lg bg-gray-700 accent-blue-500 cursor-pointer"
            />
        </div>
    );
}
