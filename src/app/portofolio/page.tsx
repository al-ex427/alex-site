import AppIcon from "@/components/AppIcon";
import Image from "next/image";

export default function Portofolio() {
    return (
        <>
        <div className="page">
            <section id="aboutme" className="p-4">
                <h1 className="text-4xl font-bold">About me</h1>
                <p className="text-2xl">hey, im al_ex427. a UI Designer<br/>i do random ass stuff in roblox, unity, etc</p>
            </section>
            <section id="stuff">
                <h1 className="text-4xl font-bold">Stuff i made</h1>
                <p className="text-2xl">this page</p>
            </section>
            <section id="programs" className="flex p-4 flex-col gap-2">
                <h1 className="text-4xl font-bold">Programs I work in</h1>
                <div className="flex gap-4">
                    <AppIcon iconSrc="/assets/images/programs/Figma.svg"/>
                    <AppIcon iconSrc="/assets/images/programs/adobe/Adobe_Photoshop.svg"/>
                    <AppIcon iconSrc="/assets/images/programs/adobe/Adobe_Ilustrator.svg"/>
                    <AppIcon iconSrc="/assets/images/programs/engines/RobloxStudio_2025.svg"/>
                </div>
            </section>
            <section id="commisions">
                <h1 className="text-4xl font-bold">Commisions</h1>
                <p className="text-2xl">You can commision me on <a className="underline" href="httpadiscord.com">Discord!</a></p>
            </section>
            <section id="donations">
                <h1 className="text-4xl font-bold">Donations</h1>
            </section>
        </div>
        </>
    );
}