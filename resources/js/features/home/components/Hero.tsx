export default function Hero() {
    return (
        <section className="bg-white border-b">

            <div className="max-w-7xl mx-auto px-4 py-14 grid md:grid-cols-2 gap-10 items-center">

                {/* LEFT CONTENT */}
                <div>

                    <span className="inline-block px-3 py-1 text-xs bg-blue-50 text-blue-600 rounded-full">
                        Sarkari Job Portal
                    </span>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4 leading-tight">
                        Find Latest Government Jobs & Updates
                    </h1>

                    <p className="text-gray-500 mt-4 text-sm leading-relaxed">
                        Get real-time updates on government jobs, results, schemes,
                        and notifications all in one place.
                    </p>

                    {/* BUTTONS */}
                    <div className="mt-6 flex gap-3">

                        <button className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                            Browse Jobs
                        </button>

                        <button className="px-5 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition">
                            Latest Results
                        </button>

                    </div>

                </div>

                {/* RIGHT CONTENT */}
                <div className="flex justify-center">

                    <div className="w-full max-w-md bg-gray-50 border rounded-xl p-6">

                        <h2 className="text-lg font-semibold text-gray-800">
                            Latest Updates
                        </h2>

                        <ul className="mt-4 space-y-3 text-sm text-gray-600">

                            <li>📢 SSC CGL Notification Released</li>
                            <li>📢 Railway Group D Apply Now</li>
                            <li>📢 UPSC New Exam Dates Announced</li>
                            <li>📢 State Govt Jobs Updated</li>

                        </ul>

                    </div>

                </div>

            </div>

        </section>
    );
}