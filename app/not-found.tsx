"use client"

import Link from 'next/link';
import React, {FC} from 'react';
import {Button} from "@nextui-org/button";
import {Image} from "@nextui-org/react";
import {AiOutlineHome} from "react-icons/ai";

const Custom404: FC = () => {
    return (
        <div className={"h-screen bg-primary text-white "}>
            <div className={"flex flex-col h-full justify-center items-center"}>
                <div className={"flex flex-col h-full items-center justify-center"}>
                    <Image
                        sizes={"100vw"}
                        className="w-64 sm:w-72 object-cover mb-6 animate-appearance-in"
                        src={"/images/404.png"}
                        alt="Logo"
                    />
                    <p className={"max-w-md mb-4 text-center"}>
                        Sepertinya halaman yang Anda cari tidak tersedia atau mungkin telah dipindahkan. Silakan periksa kembali URL atau kembali ke halaman utama.</p>
                    <Link href={"/"}>
                        <Button><AiOutlineHome size={"20"} className={"mr-2"}/> Halaman Utama</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Custom404;