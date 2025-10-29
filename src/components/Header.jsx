export default function Header() {
    return (
        <header className="w-full fixed top-0 z-20 flex items-center justify-between px-6 py-4 bg-black/40 backdrop-blur-md shadow-md">
            <h1 className="text-xl md:text-2xl font-bold tracking-wide">LEVELS</h1>
            <nav className="flex items-center space-x-4">
                <button className="px-3 py-1 rounded hover:bg-white/20 transition">Browse</button>
                <button className="px-3 py-1 rounded hover:bg-white/20 transition">Library</button>
                <button className="px-3 py-1 rounded hover:bg-white/20 transition">Search</button>
            </nav>
        </header>
    );
}
