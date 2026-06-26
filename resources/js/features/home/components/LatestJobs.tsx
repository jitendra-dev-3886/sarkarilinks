export default function LatestJobs() {

    const jobs = [
        {
            title: "SSC CGL Recruitment 2026",
            dept: "Staff Selection Commission",
            date: "New",
        },
        {
            title: "Railway Group D Vacancy",
            dept: "Indian Railways",
            date: "Updated",
        },
        {
            title: "UPSC Civil Services",
            dept: "Union Public Service Commission",
            date: "Trending",
        },
        {
            title: "Bank PO Recruitment",
            dept: "IBPS",
            date: "New",
        },
    ];

    return (
        <section className="bg-gray-50 border-t">

            <div className="max-w-7xl mx-auto px-4 py-12">

                {/* HEADER */}
                <div className="flex justify-between items-end mb-8">

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800">
                            Latest Jobs
                        </h2>
                        <p className="text-sm text-gray-500 mt-1">
                            Fresh government job openings
                        </p>
                    </div>

                    <button className="text-sm text-blue-600 hover:underline">
                        View All
                    </button>

                </div>

                {/* JOB GRID */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">

                    {jobs.map((job, index) => (
                        <div
                            key={index}
                            className="bg-white border rounded-xl p-4 hover:shadow-md transition"
                        >

                            {/* BADGE */}
                            <span className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded-full">
                                {job.date}
                            </span>

                            {/* TITLE */}
                            <h3 className="text-sm font-semibold text-gray-800 mt-3">
                                {job.title}
                            </h3>

                            {/* DEPARTMENT */}
                            <p className="text-xs text-gray-500 mt-1">
                                {job.dept}
                            </p>

                            {/* ACTION */}
                            <button className="mt-4 text-xs text-white bg-blue-600 px-3 py-1 rounded hover:bg-blue-700">
                                View Details
                            </button>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}