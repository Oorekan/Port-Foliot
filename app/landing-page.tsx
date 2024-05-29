'use client'

import Image from "next/image";
import LandingPicture from "../public/brandon-monge-portfolio-cover-removebg-preview-2-removebg-preview.png"
import Amaryllis_Red_SVG from "../public/amaryllis-red-icon.svg"
import Amaryllis_White_SVG from "../public/amaryllis-white-icon.svg"
import Sparkle_Red_SVG from "../public/sparkle-red-icon.svg"
import Sparkle_White_SVG from "../public/sparkle-white-icon.svg"
import Red_Moon_SVG from "../public/crescent-moon-red-icon.svg"
import Double_Red_Line_SVG from "../public/double-red-line.svg"
import Double_White_Line_SVG from "../public/double-white-line.svg"
import Red_Line_SVG from "../public/red-line.svg"
import White_Line_SVG from "../public/white-line.svg"

export default function LandingPage() {
    return (
        <div className="absolute inset-0 -z-10 h-full w-full bg-[url('../public/noisy-background.png')] bg-[size:5%_10%] overflow-hidden">
            <div className="absolute inset-0 -z-10 h-full w-full bg-transparent bg-[linear-gradient(to_right,rgb(255,255,255,0.2),transparent_1px),linear-gradient(to_bottom,rgb(255,255,255,0.2),transparent_1px)] bg-[size:5%_10%]">
                <div className="absolute w-full bottom-0 z-10">
                    <Image className="mx-auto" src={LandingPicture} width={1280} height={0} alt="brandon-monge-picture"></Image>
                </div>
                <div className="inline-block mt-[80px] ml-[125px]">
                    <h1 className="bg-gradient-to-b from-[#991600] to-scarlet-red inline-block text-transparent bg-clip-text text-[102px] font-japaneseRobot" style={{ WebkitTextStroke: '2px white' }}>
                        Brandon
                    </h1>
                    <h1 className="mt-[-70px] text-transparent text-[102px] font-japaneseRobot" style={{ WebkitTextStroke: '2px white' }}>
                        Monge
                    </h1>
                </div>
                <div className="absolute flex flex-col left-0 bottom-0 mb-[105px] ml-[320px]">
                    <h2 className="bg-gradient-to-b from-[#991600] to-scarlet-red inline-block text-transparent bg-clip-text text-[82px] font-akiraExpanded mb-[-50px]" style={{ WebkitTextStroke: '1px #991600' }}>
                        DEV
                    </h2>
                    <h2 className="bg-gradient-to-b from-[#991600] to-scarlet-red inline-block text-onyx-black bg-clip-text text-[82px] font-akiraExpanded mb-[-50px]" style={{ WebkitTextStroke: '2px transparent' }}>
                        DEV
                    </h2>
                    <h2 className="bg-gradient-to-b from-[#991600] to-scarlet-red inline-block text-onyx-black bg-clip-text text-[82px] font-akiraExpanded" style={{ WebkitTextStroke: '2px transparent' }}>
                        DEV
                    </h2>
                </div>
                <div className="absolute flex flex-col top-0 right-0 mt-[200px] mr-[320px]">
                    <h2 className="bg-gradient-to-b from-[#999999] to-white inline-block text-transparent bg-clip-text text-[82px] font-akiraExpanded mb-[-50px]" style={{ WebkitTextStroke: '1px #999999' }}>
                        CREA
                    </h2>
                    <h2 className="bg-gradient-to-b from-[#999999] to-white inline-block text-onyx-black bg-clip-text text-[82px] font-akiraExpanded mb-[-50px]" style={{ WebkitTextStroke: '2px transparent' }}>
                        CREA
                    </h2>
                    <h2 className="bg-gradient-to-b from-[#999999] to-white inline-block text-onyx-black bg-clip-text text-[82px] font-akiraExpanded" style={{ WebkitTextStroke: '2px transparent' }}>
                        CREA
                    </h2>
                </div>
                <div className="absolute flex flex-col bottom-0 right-0 mb-[200px] mr-[180px]">
                    <h2 className="bg-gradient-to-b from-[#999999] to-white inline-block text-onyx-black bg-clip-text text-[102px] font-akiraExpanded mb-[-50px]" style={{ WebkitTextStroke: '2px transparent' }}>
                        新月
                    </h2>
                    <h2 className="bg-gradient-to-b from-[#991600] to-scarlet-red inline-block text-transparent bg-clip-text text-[102px] font-akiraExpanded">
                        新月
                    </h2>
                </div>
                <div className="absolute left-0 top-0 ml-[296px] mt-[392px]">
                    <Image className="w-[80px]" src={Amaryllis_Red_SVG} alt="sparkle-icon-svg"></Image>
                </div>
                <div className="absolute left-0 bottom-0 ml-[263px] mb-[358px]">
                    <Image className="w-[50px]" src={Sparkle_Red_SVG} alt="sparkle-icon-svg"></Image>
                </div>
                <div className="absolute mt-[268px] ml-[777px]">
                    <Image className="w-[80px]" src={Amaryllis_Red_SVG} alt="sparkle-icon-svg"></Image>
                </div>
                <div className="absolute top-0 right-0 mt-[280px] mr-[780px]">
                    <Image className="w-[120px]" src={Red_Moon_SVG} alt="sparkle-icon-svg"></Image>
                </div>
                <div className="absolute top-0 right-0 mt-[167px] mr-[263px]">
                    <Image className="w-[50px]" src={Sparkle_White_SVG} alt="sparkle-icon-svg"></Image>
                </div>
                <div className="absolute top-0 right-0 mt-[390px] mr-[-40px]">
                    <Image className="w-[80px]" src={Amaryllis_White_SVG} alt="sparkle-icon-svg"></Image>
                </div>
                <div className="absolute top-0 left-0 mt-[70px] ml-[647px]">
                    <Image className="w-[50px]" src={Sparkle_White_SVG} alt="sparkle-icon-svg"></Image>
                </div>
                <div className="absolute top-0 right-0 mt-[88px] mr-[384px]">
                    <Image className="w-[100%]" src={Double_Red_Line_SVG} alt="sparkle-icon-svg"></Image>
                </div>
                <div className="absolute mt-[60px] ml-[680px]">
                    <Image className="w-[100%]" src={Double_Red_Line_SVG} alt="sparkle-icon-svg"></Image>
                </div>
                <div className="absolute bottom-0 left-0 mb-[96px] ml-[427px]">
                    <Image className="w-[100%]" src={Double_Red_Line_SVG} alt="sparkle-icon-svg"></Image>
                </div>
                <div className="absolute bottom-0 right-0 mb-[96px] mr-[138px]">
                    <Image className="w-[100%]" src={Double_White_Line_SVG} alt="sparkle-icon-svg"></Image>
                </div>
                <div className="absolute bottom-0 right-0 mb-[192px] mr-[496px]">
                    <Image className="w-[100%]" src={White_Line_SVG} alt="sparkle-icon-svg"></Image>
                </div>
                <div className="absolute bottom-0 right-0 mb-[384px] mr-[648px]">
                    <Image className="w-[100%]" src={Double_White_Line_SVG} alt="sparkle-icon-svg"></Image>
                </div>
                <div className="absolute bottom-0 left-0 mb-[384px] mr-[648px]">
                    <Image className="w-[100%]" src={Red_Line_SVG} alt="sparkle-icon-svg"></Image>
                </div>
                <div className="absolute top-0 right-0 mt-[73px] mr-[218px]">
                    <h3 className="bg-gradient-to-b from-[#991600] to-scarlet-red inline-block text-transparent bg-clip-text text-[22px] font-akiraExpanded">
                        Contact
                    </h3>
                </div>
            </div>
        </div >
    );
}
