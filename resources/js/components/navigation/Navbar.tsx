export default function Navbar() {
    return (
        <header className="bg-white border-b border-slate-200 py-4 shadow-sm">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="text-xl font-semibold text-slate-900">SarkariLinks</div>
                <nav className="flex gap-4 text-sm font-medium text-slate-600">
                    <a href="/" className="hover:text-slate-900">Home1111</a>
                    <a href="/jobs" className="hover:text-slate-900">Jobs</a>
                    <a href="/results" className="hover:text-slate-900">Results</a>
                </nav>
            </div>
        </header>
    );
}
