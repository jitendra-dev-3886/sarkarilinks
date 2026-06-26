import {
    FaBriefcase,
    FaBell,
    FaBook,
    FaTelegram,
    FaUniversity,
    FaGraduationCap,
    FaFileAlt,
    FaCheckCircle,
    FaMoon,
    FaSun
} from "react-icons/fa";
import { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function UnderDevelopment() {


const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
});

useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
}, [dark]);
    return (
        <div
            className={`min-h-screen transition-all duration-500 ${
                dark
                    ? "bg-slate-950 text-white"
                    : "bg-gradient-to-br from-blue-50 via-white to-cyan-100 text-slate-900"
            }`}
        >
            {/* Animated Background */}
            <div className="fixed inset-0 overflow-hidden -z-10">
                <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse top-10 left-10"></div>
                <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse bottom-10 right-10"></div>
                <div className="absolute w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-bounce left-1/2 top-1/3"></div>
            </div>

            {/* Navbar */}
            <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-6">
                <h1 className="text-3xl font-black">
                    Sarkari
                    <span className="text-blue-500">Links</span>
                    <span className="text-yellow-500">.com</span>
                </h1>

                <button
                    onClick={() => setDark(!dark)}
                    className="w-12 h-12 rounded-full bg-blue-600 text-white hover:scale-110 transition"
                >
                    {dark ? <FaSun /> : <FaMoon />}
                </button>
            </div>

            {/* Hero */}
            <section className="max-w-6xl mx-auto px-8 py-16 text-center">

                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-yellow-500/20 text-yellow-400 border border-yellow-500 mb-8">
                    <i className="fas fa-person-digging text-2xl"></i>
                    Website Under Development
                </div>

                <h2 className="text-6xl md:text-7xl font-extrabold leading-tight">
                    Something
                    <span className="text-blue-500"> Amazing </span>
                    is Coming
                </h2>

                <p className="text-xl mt-8 max-w-3xl mx-auto text-slate-400">
                    We are building a modern Government Job Portal where you can
                    find the latest Sarkari Jobs, Results, Admit Cards, Answer
                    Keys, Admissions, Syllabus, Government Schemes and much
                    more.
                </p>

                <div className="mt-12 flex justify-center gap-5 flex-wrap">

                    <button className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-semibold">
                        <i className="fas fa-bell mr-2"></i>
                        Notify Me
                    </button>

                    <button className="px-8 py-4 rounded-xl border border-blue-500 hover:bg-blue-600 hover:text-white transition">
                        <i className="fab fa-telegram mr-2"></i>
                        Join Telegram
                    </button>

                </div>

            </section>

            {/* Feature Cards */}

            <section className="max-w-7xl mx-auto px-8 pb-20">

                <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">

                    {[
                        ["fa-briefcase", "Latest Jobs"],
                        ["fa-square-poll-vertical", "Results"],
                        ["fa-id-card", "Admit Cards"],
                        ["fa-circle-check", "Answer Keys"],
                        ["fa-book", "Syllabus"],
                        ["fa-building-columns", "Government Schemes"],
                        ["fa-user-graduate", "Admissions"],
                        ["fa-bell", "Instant Alerts"],
                    ].map(([icon, title]) => (
                        <div
                            key={title}
                            className={`rounded-2xl backdrop-blur-xl p-8 transition hover:-translate-y-3 hover:shadow-2xl ${
                                dark
                                    ? "bg-white/5 border border-white/10"
                                    : "bg-white/70 border border-white shadow-lg"
                            }`}
                        >
                            <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center mx-auto text-3xl text-white">
                                <i className={`fas ${icon}`}></i>
                            </div>

                            <h3 className="mt-6 text-xl font-bold text-center">
                                {title}
                            </h3>

                            <p className="mt-3 text-center text-sm text-slate-400">
                                Coming Soon
                            </p>
                        </div>
                    ))}

                </div>

            </section>

            {/* Footer */}

            <footer className="border-t border-slate-700 py-8 text-center">

                <div className="space-x-5 text-2xl">

                    <i className="fab fa-facebook hover:text-blue-500 cursor-pointer"></i>

                    <i className="fab fa-x-twitter hover:text-sky-400 cursor-pointer"></i>

                    <i className="fab fa-instagram hover:text-pink-500 cursor-pointer"></i>

                    <i className="fab fa-youtube hover:text-red-500 cursor-pointer"></i>

                    <i className="fab fa-telegram hover:text-cyan-500 cursor-pointer"></i>

                </div>

                <p className="mt-6 text-slate-400">
                    © {new Date().getFullYear()} SarkariLinks.com
                </p>

                <p className="mt-2 text-sm text-slate-500">
                    Government Jobs • Results • Admit Cards • Answer Keys •
                    Admissions • Government Schemes
                </p>

            </footer>

        </div>
    );
}