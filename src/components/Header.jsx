// export default function Header() {
//     return (
//         <header className="w-full fixed top-0 z-20 flex items-center justify-between px-6 py-4 bg-black/40 backdrop-blur-md shadow-md">
//             <h1 className="text-xl md:text-2xl font-bold tracking-wide">LEVELS</h1>
//             <nav className="flex items-center space-x-4">
//                 <button className="px-3 py-1 rounded hover:bg-white/20 transition">Browse</button>
//                 <button className="px-3 py-1 rounded hover:bg-white/20 transition">Library</button>
//                 <button className="px-3 py-1 rounded hover:bg-white/20 transition">Search</button>
//             </nav>
//         </header>
//     );
// }
import { motion, useAnimation } from "framer-motion";

export default function Header() {
    const controls = useAnimation();

    return (
        <header className="w-full fixed top-0 z-20 flex items-center justify-between px-6 py-4 bg-black/40 backdrop-blur-md shadow-md">

            <div className="flex items-center space-x-2">
                {/* Spooky Ghost Emoji */}
                <motion.span
                    className="text-3xl cursor-pointer text-white drop-shadow-lg"
                    onHoverStart={() => {
                        controls.start({
                            y: [0, -6, -12, -6, 0],
                            x: [0, 3, -3, 1, 0],
                            rotate: [0, 5, -5, 3, 0],
                            scale: [1, 1.1, 1.05, 1.1, 1],
                            transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                        });
                    }}
                    onHoverEnd={() => {
                        controls.stop();
                        controls.set({ x: 0, y: 0, rotate: 0, scale: 1 });
                    }}
                    animate={controls}
                >
                    💀
                </motion.span>

                {/* App Name */}
                <h1 className="text-xl md:text-2xl font-bold tracking-wide text-white">
                    LEVELS
                </h1>
            </div>

            {/* Navigation */}
            <nav className="flex items-center space-x-4">
                <button className="px-3 py-1 rounded hover:bg-white/20 transition">Browse</button>
                <button className="px-3 py-1 rounded hover:bg-white/20 transition">Library</button>
                <button className="px-3 py-1 rounded hover:bg-white/20 transition">Search</button>
            </nav>
        </header>
    );
}
