export default function MainLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">

            {/* HEADER */}
            <header className="bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

                    {/* Logo */}
                    <div className="text-xl font-bold text-blue-600">
                        SarkariLinks
                    </div>

                    {/* Nav */}
                    <nav className="hidden md:flex gap-6 text-sm text-gray-600">
                        <a href="#" className="hover:text-blue-600">Home</a>
                        <a href="#" className="hover:text-blue-600">Jobs</a>
                        <a href="#" className="hover:text-blue-600">Results</a>
                        <a href="#" className="hover:text-blue-600">Schemes</a>
                    </nav>

                    {/* Actions */}
                    <div className="text-sm">
                        <button className="px-4 py-1 border rounded hover:bg-gray-100">
                            Login
                        </button>
                    </div>

                </div>
            </header>

            {/* MAINTENANCE BANNER */}
            <div className="bg-yellow-50 border-b border-yellow-200 text-yellow-700 text-sm text-center py-2">
                ⚠ System Maintenance Mode Active
            </div>

            {/* CONTENT */}
            <main className="flex-1">
                {children}
            </main>

            {/* FOOTER */}
            <footer className="bg-white border-t mt-10">
                <div className="max-w-7xl mx-auto px-4 py-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between">

                    <p>© {new Date().getFullYear()} SarkariLinks. All rights reserved.</p>

                    <div className="flex gap-4 mt-2 md:mt-0">
                        <a href="#">Privacy</a>
                        <a href="#">Terms</a>
                        <a href="#">Support</a>
                    </div>

                </div>
            </footer>

        </div>
    );
}