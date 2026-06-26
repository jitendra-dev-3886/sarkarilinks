export default function Schemes() {

    const schemes = [
        {
            title: "PM Kisan Samman Nidhi",
            desc: "Financial support for farmers across India.",
            tag: "Popular",
        },
        {
            title: "Ayushman Bharat Yojana",
            desc: "Health insurance scheme for families.",
            tag: "Health",
        },
        {
            title: "Digital India Initiative",
            desc: "Promoting digital infrastructure and services.",
            tag: "Digital",
        },
        {
            title: "Startup India Scheme",
            desc: "Support for startups and entrepreneurs.",
            tag: "Business",
        },
    ];

    return (
        <section className="bg-gray-50 border-t">

            <div className="max-w-7xl mx-auto px-4 py-12">

                {/* HEADER */}
                <div className="flex justify-between items-end mb-8">

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800">
                            Government Schemes
                        </h2>
                        <p className="text-sm text-gray-500 mt-1">
                            Benefits and welfare programs
                        </p>
                    </div>

                    <button className="text-sm text-blue-600 hover:underline">
                        View All
                    </button>

                </div>

                {/* GRID */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">

                    {schemes.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white border rounded-xl p-4 hover:shadow-md transition"
                        >

                            {/* TAG */}
                            <span className="text-xs px-2 py-1 bg-purple-50 text-purple-600 rounded-full">
                                {item.tag}
                            </span>

                            {/* TITLE */}
                            <h3 className="text-sm font-semibold text-gray-800 mt-3">
                                {item.title}
                            </h3>

                            {/* DESCRIPTION */}
                            <p className="text-xs text-gray-500 mt-2">
                                {item.desc}
                            </p>

                            {/* BUTTON */}
                            <button className="mt-4 text-xs bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700">
                                Read More
                            </button>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}