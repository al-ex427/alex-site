import AppIcon from "@/components/AppIcon";
import Link from "next/link";
/*import DiscordUserWidget from "@/components/widgets/DiscordUserWidget";*/

export default function Portofolio() {
    return (
        <>
        <div className="page gap-2 overflow-auto">
            <section id="about" className="portofolioCategory p-4 items-center gap-1">
                <h1 className="text-4xl font-bold">About me</h1>
                <p className="text-2xl">Hey! My name is Alex; im also known as al_ex427. </p>
                <p className="text-2xl">Im a UI Designer from Romania</p>
                <p className="text-2xl">I do stuff in Roblox, Unity</p>
            </section>
            <section id="stuff" className="portofolioCategory p-4 items-center gap-1">
                <h1 className="text-4xl font-bold">Stuff i made/ i can make</h1>
                <p className="text-2xl">this page (even if responsive page is broken)</p>
            </section>
            <section id="programs" className="portofolioCategory p-4  items-center gap-2">
                <h1 className="text-4xl font-bold">Programs I work in</h1>
                <div className="flex gap-4 flex-row flex-wrap  justify-center h-auto">
                    <AppIcon iconScale={1.5}iconColor="bg-black" iconDescription="Figma" iconUrl="https://www.figma.com/" iconSrc="/assets/images/icons/Figma.svg"/>
                    <AppIcon iconScale={1} iconColor="bg-stone-850" iconDescription="Adobe Photoshop" iconUrl="https://www.adobe.com/products/photoshop.html" iconSrc="/assets/images/icons/adobe/Adobe_Photoshop.svg"/>
                    <AppIcon iconScale={1} iconColor="bg-stone-850" iconDescription="Adobe Illustrator" iconUrl="https://www.adobe.com/products/illustrator.html" iconSrc="/assets/images/icons/adobe/Adobe_Ilustrator.svg"/>
                    <AppIcon iconScale={1} iconColor="bg-black" iconDescription="Roblox Studio" iconUrl="https://create.roblox.com/" iconSrc="/assets/images/icons/engines/RobloxStudio_2025.svg"/>
                    <AppIcon iconScale={0.75} iconColor="bg-[#0d1016]" iconDescription="Visual Studio Code" iconUrl="https://create.roblox.com/" iconSrc="/assets/images/icons/vscode.svg"/>
                </div>
                <span>Other programs that i could not find a good icon for: Unity Engine    </span>
            </section>
            <section id="commisions" className="portofolioCategory p-4 items-center">
                <h1 className="text-4xl font-bold">Commisions</h1>
                <p className="text-2xl">View <Link className="underline" href="/commisions">Commisions Page</Link> for info</p>
            </section>
            <section id="donations" className="portofolioCategory p-4 items-center">
                <h1 className="text-4xl font-bold">Donations</h1>
                <div className="flex gap-4 flex-row flex-wrap  justify-center h-auto">
                    <AppIcon iconScale={0.75} iconUrl="https://www.patreon.com/c/al_ex427" iconColor="bg-black" iconSrc="/assets/images/icons/Patreon_2023.svg"/>
                    <AppIcon iconColor="bg-white" iconScale={0.75} iconUrl="https://ko-fi.com/al_ex427" iconSrc="/assets/images/icons/Kofi.svg"/>
                </div>

            </section>
        </div>
        </>
    );
}