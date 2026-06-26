import Hero from "@/features/home/components/Hero";
import Categories from "@/features/home/components/Categories";
import LatestJobs from "@/features/home/components/LatestJobs";
import LatestResults from "@/features/home/components/LatestResults";
import Schemes from "@/features/home/components/Schemes";

export default function Home() {
    return (
        <>
            <Hero />
            <Categories />
            <LatestJobs />
            <LatestResults />
            <Schemes />
        </>
    );
}