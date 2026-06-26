export default function LatestResults() {

    const results = [
        {
            title: "SSC CGL Result 2026",
            status: "Declared",
            date: "Today",
        },
        {
            title: "Railway Group D Result",
            status: "Coming Soon",
            date: "Expected",
        },
        {
            title: "UPSC Prelims Result",
            status: "Updated",
            date: "Live",
        },
        {
            title: "Bank PO Result",
            status: "Declared",
            date: "New",
        },
    ];

    return (
        <section className="bg-white border-t">

            <div className="max-w-7xl mx-auto px-4 py-12">

                {/* HEADER */}
                <div className="flex justify-between items-end mb-8">

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800">
                            Latest Results
                        </h2>
                        <p className="text-sm text-gray-500 mt-1">
                            Exam results and updates
                        </p>
                    </div>

                    <button className="text-sm text-blue-600 hover:underline">
                        View All
                    </button>

                </div>

                {/* GRID */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">

                    {results.map((item, index) => (
                        <div
                            key={index}
                            className="border rounded-xl p-4 bg-gray-50 hover:shadow-md transition"
                        >

                            {/* STATUS BADGE */}
                            <span className="text-xs px-2 py-1 bg-green-50 text-green-600 rounded-full">
                                {item.date}
                            </span>

                            {/* TITLE */}
                            <h3 className="text-sm font-semibold text-gray-800 mt-3">
                                {item.title}
                            </h3>

                            {/* STATUS */}
                            <p className="text-xs text-gray-500 mt-1">
                                Status: {item.status}
                            </p>

                            {/* BUTTON */}
                            <button className="mt-4 text-xs bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                                Check Result
                            </button>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}