import AppIcon from "@/components/AppIcon";
import DiscordUserWidget from "@/components/DiscordUserWidget";
import Image from "next/image";

export default function Portofolio() {
    return (
        <>
        <div className="page gap-4 overflow-auto">
            <section id="aboutme about" className="flex p-4 flex-col items-center gap-1">
                <h1 className="text-4xl font-bold">About me</h1>
                <p className="text-2xl">hey, im al_ex427. a UI Designer<br/>i do random ass stuff in roblox, unity, etc.<br/>im intresed in tech too (eg. rooting)</p>
            </section>
            <section id="stuff" className="flex p-4 flex-col items-center gap-1">
                <h1 className="text-4xl font-bold">Stuff i made</h1>
                <p className="text-2xl">this page (even if responsive page is broken)</p>
            </section>
            <section id="programs" className="flex p-4 flex-col items-center gap-2">
                <h1 className="text-4xl font-bold">Programs I work in</h1>
                <div className="flex gap-4">
                    <AppIcon iconUrl="https://www.figma.com/" iconSrc="/assets/images/programs/Figma.svg"/>
                    <AppIcon iconUrl="https://www.adobe.com/products/photoshop.html" iconSrc="/assets/images/programs/adobe/Adobe_Photoshop.svg"/>
                    <AppIcon iconUrl="https://www.adobe.com/products/illustrator.html" iconSrc="/assets/images/programs/adobe/Adobe_Ilustrator.svg"/>
                    <AppIcon iconUrl="https://create.roblox.com/" iconSrc="/assets/images/programs/engines/RobloxStudio_2025.svg"/>
                </div>
            </section>
            <section id="commisions" className="flex p-4 flex-col items-center gap-2">
                <h1 className="text-4xl font-bold">Commisions</h1>
                <p className="text-2xl">You can commision me on <a className="underline" href="https://discord.com">Discord!</a></p>
                <DiscordUserWidget userID={1156977795575070873} />
                
            </section>
            <section id="donations" className="flex p-4 flex-col items-center">
                <h1 className="text-4xl font-bold">Donations</h1>
                <p className="text-2xl">sorry! i dont have any donation methods rn!</p>
            </section>
        </div>
        </>
    );
}