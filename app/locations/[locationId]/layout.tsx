import { Metadata } from "next";



export default function LocationLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <section>
            {children}
        </section>
    );
}
