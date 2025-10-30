// components/LevelsIcon.jsx
import { motion } from "framer-motion";

export default function LevelsIcon() {
    return (
        <motion.div
            className="w-16 h-16 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 rounded-full shadow-xl"
            whileHover={{ scale: 1.2, boxShadow: "0 0 30px #c084fc" }}
            animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
        >
            <svg
                viewBox="0 0 64 64"
                className="w-full h-full"
                fill="none"
                stroke="white"
                strokeWidth="2"
            >
                <path
                    d="M2 32 C16 12, 48 12, 62 32 C48 52, 16 52, 2 32 Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </motion.div>
    );
}
