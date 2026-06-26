export default function Categories() {
    const categories = [
        { name: "Government Jobs", count: "120+" },
        { name: "Bank Jobs", count: "80+" },
        { name: "Railway Jobs", count: "65+" },
        { name: "Teaching Jobs", count: "50+" },
        { name: "Police Jobs", count: "40+" },
        { name: "Defense Jobs", count: "30+" },
    ];

    return (
        <section className="bg-white border-t border-b">

            <div className="max-w-7xl mx-auto px-4 py-12">

                {/* HEADER */}
                <div className="text-center mb-10">
                    <h2 className="text-2xl font-semibold text-gray-800">
                        Job Categories
                    </h2>
                    <p className="text-sm text-gray-500 mt-2">
                        Browse government jobs by category
                    </p>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">

                    {categories.map((cat, index) => (
                        <div
                            key={index}
                            className="border rounded-lg p-4 text-center hover:shadow-md transition bg-gray-50"
                        >
                            <h3 className="text-sm font-semibold text-gray-800">
                                {cat.name}
                            </h3>

                            <p className="text-xs text-gray-500 mt-1">
                                {cat.count} openings
                            </p>
                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}