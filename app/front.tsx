import {Link} from "@nextui-org/link";
export default function FrontLayout({
                                        children,
                                    }: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative flex flex-col h-screen bg-gradient-to-b from-primary-900 to-pink-800">
            <main className="container mx-auto max-w-7xl px-6 flex-grow">
                {children}
            </main>
            <footer className="w-full flex items-center h-[6rem] justify-center py-3">
                <Link
                    isExternal
                    className="flex items-center  gap-2 text-current"
                    href="https://avatechnusantara.com/"
                    title="nextui.org homepage"
                >
                    <span className="text-white">Powered by</span>
                    <p className="text-white">Avatech Nusantara</p>
                </Link>
            </footer>
        </div>
    );
}