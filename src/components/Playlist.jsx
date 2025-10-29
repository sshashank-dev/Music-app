export default function Playlist({ songs, currentIndex, playSongAtIndex }) {
    return (
        <div className="p-4">
            {songs.map((song, index) => (
                <div
                    key={index}
                    onClick={() => playSongAtIndex(index)} // ✅ triggers playback
                    className={`flex items-center p-2 rounded cursor-pointer transition hover:bg-zinc-700 ${currentIndex === index ? "bg-zinc-800" : ""
                        }`}
                >
                    <img
                        src={song.cover}
                        alt={song.title}
                        className="w-10 h-10 mr-3 rounded"
                    />
                    <div>
                        <p className="font-semibold">{song.title}</p>
                        <p className="text-sm text-zinc-400">{song.artist}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
