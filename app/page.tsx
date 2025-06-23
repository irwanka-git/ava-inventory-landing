"use client"

import FrontLayout from "@/components/layout/FrontLayout";
import React from "react";
import {Image} from "@nextui-org/react";
import {useEffectOnce} from "@/lib/utils";
import Link from "next/link";

export default function Login() {

    useEffectOnce(() => {
        document.title = "Landing";
    });

    return (
        <>
            <FrontLayout>
                <div className="container mx-auto px-8">
                    <div className={"grid grid-cols-1 gap-6"}>
                        <div className="col-auto md:block hidden">
                            <div
                                className={"flex flex-col items-center w-full h-screen-minus-footer justify-center"}>
                                <span className={"px-2 text-2xl lg:text-3xl text-white"}>GDY x JLU Inventory</span>
                                <span className={"px-2 text-xl lg:text-2xl text-white mb-4 italic"}>Kelola Stok, Maksimalkan Profit</span>

                                <p className={"text-white text-lg font-medium py-3"}>Pilih Company: </p>
                                <div className={"flex flex-row gap-4"}>
                                    <Link href="https://guideyuk.gdyjlu.com">
                                        <Image
                                            width={130}
                                            className="w-full object-cover"
                                            src={`/images/guideyuk.png`}
                                            alt="Logo"
                                        />
                                    </Link>
                                    <Link href="https://jelucerna.gdyjlu.com">
                                        <Image
                                            width={120}
                                            className="w-full object-cover"
                                            src={`/images/jelucerna.png`}
                                            alt="Logo"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </FrontLayout>
        </>
    );
}
