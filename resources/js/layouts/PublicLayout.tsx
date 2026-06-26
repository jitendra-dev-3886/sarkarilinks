import { ReactNode } from "react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";

interface PublicLayoutProps {
    children: ReactNode;
}

export default function PublicLayout({ children }: PublicLayoutProps) {
    return (
        <>
            <Navbar /> 

            <main className="min-h-screen">
                {children}
            </main>

            <Footer />
        </>
    );
}