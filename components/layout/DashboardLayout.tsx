"use client"

import HeaderNav from "@/components/layout/Header";
import SidebarNav from "@/components/layout/SideMenu";
import {useDeviceDetect} from "@/components/common/useDeviceDetect";
import {cn} from "@/lib/utils";

export default function DashboardLayout({
                                            children,
                                        }: {
    children: React.ReactNode;
}) {
    const {deviceType} = useDeviceDetect();
    return (
        <>
            <div className="flex min-h-screen max-h-screen bg-slate-100">
                {
                    deviceType === "desktop"  && <SidebarNav/>
                }
                <main className={cn("z-10 h-screen flex-1", deviceType=="desktop" ? "ml-52": "")}>
                    <HeaderNav/>
                   <div className={"text-sm p-2 lg:p-6 mb-6"}>
                       {children}
                   </div>
                </main>
            </div>
        </>
    );
}