'use client'

import Image from "next/image";
import LandingPicture from "../public/brandon-monge-portfolio-cover-removebg-preview-2-removebg-preview.png"

export default function LandingPage() {
    return (
        <div className="absolute inset-0 -z-10 h-full w-full bg-[url('../public/noisy-background.png')] bg-[size:5%_10%]">
            <div className="absolute inset-0 -z-10 h-full w-full bg-transparent bg-[linear-gradient(to_right,rgb(255,255,255,0.2),transparent_1px),linear-gradient(to_bottom,rgb(255,255,255,0.2),transparent_1px)] bg-[size:5%_10%]">
                <div className="absolute bottom-0">
                    <Image src={LandingPicture} width={1477} height={828} alt="brandon-monge-picture"></Image>
                </div>
            </div>
        </div>
    );
}
