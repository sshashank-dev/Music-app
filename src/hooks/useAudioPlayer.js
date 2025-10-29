import { useState, useRef, useEffect } from "react";

export function useAudioPlayer(songs) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(false);
    const [shuffle, setShuffle] = useState(false);
    const [repeat, setRepeat] = useState(false);

    const audioRef = useRef(new Audio(songs[0].src));

    // 🎧 Update song when index changes
    useEffect(() => {
        const audio = audioRef.current;
        audio.src = songs[currentIndex].src;
        if (isPlaying) audio.play();
    }, [currentIndex]);

    // 🕒 Track time and duration
    useEffect(() => {
        const audio = audioRef.current;

        const updateTime = () => setCurrentTime(audio.currentTime);
        const updateDuration = () => setDuration(audio.duration);
        const handleEnded = () => {
            if (repeat) {
                audio.currentTime = 0;
                audio.play();
            } else {
                playNext();
            }
        };

        audio.addEventListener("timeupdate", updateTime);
        audio.addEventListener("loadedmetadata", updateDuration);
        audio.addEventListener("ended", handleEnded);

        return () => {
            audio.removeEventListener("timeupdate", updateTime);
            audio.removeEventListener("loadedmetadata", updateDuration);
            audio.removeEventListener("ended", handleEnded);
        };
    }, [repeat, shuffle]);

    // ▶️ PLAY / PAUSE
    const togglePlay = () => {
        const audio = audioRef.current;
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    // ⏩ NEXT / ⏪ PREV
    const playNext = () => {
        setCurrentIndex((prev) => {
            if (shuffle) return Math.floor(Math.random() * songs.length);
            return prev + 1 < songs.length ? prev + 1 : 0;
        });
    };

    const playPrev = () => {
        setCurrentIndex((prev) => (prev - 1 >= 0 ? prev - 1 : songs.length - 1));
    };

    // 🎶 SEEK
    const seek = (time) => {
        const audio = audioRef.current;
        audio.currentTime = time;
        setCurrentTime(time);
    };

    // 🔊 VOLUME
    const changeVolume = (val) => {
        const audio = audioRef.current;
        audio.volume = val;
        setVolume(val);
    };

    const toggleMute = () => {
        const audio = audioRef.current;
        audio.muted = !audio.muted;
        setIsMuted(audio.muted);
    };

    // 🔁 SHUFFLE / REPEAT
    const toggleShuffle = () => setShuffle((s) => !s);
    const toggleRepeat = () => setRepeat((r) => !r);

    // 🎵 PLAY SONG BY INDEX (for Playlist clicks)
    const playSongAtIndex = (index) => {
        const audio = audioRef.current;
        audio.pause();
        audio.src = songs[index].src;
        audio.currentTime = 0;
        audio.play();
        setCurrentIndex(index);
        setIsPlaying(true);
    };

    // Return all controls and info
    return {
        currentIndex,
        currentSong: songs[currentIndex],
        isPlaying,
        togglePlay,
        playNext,
        playPrev,
        playSongAtIndex, // ✅ added
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
    };
}

