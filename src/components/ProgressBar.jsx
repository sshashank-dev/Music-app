export default function ProgressBar({ currentTime, duration, onSeek }) {
    const formatTime = (time) => {
        if (!time) return "0:00";
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60)
            .toString()
            .padStart(2, "0");
        return `${minutes}:${seconds}`;
    };

    const handleClick = (e) => {
        const rect = e.target.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const newTime = (clickX / rect.width) * duration;
        onSeek(newTime);
    };

    const progressPercent = duration ? (currentTime / duration) * 100 : 0;

    return (
        <div className="w-full max-w-md mt-4">
            <div className="flex justify-between text-sm mb-1">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
            </div>
            <div
                className="h-2 bg-gray-700 rounded cursor-pointer"
                onClick={handleClick}
            >
                <div
                    className="h-2 bg-blue-500 rounded"
                    style={{ width: `${progressPercent}%` }}
                />
            </div>
        </div>
    );
}
