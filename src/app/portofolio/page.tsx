import AppIcon from "@/components/AppIcon";
/*import DiscordUserWidget from "@/components/widgets/DiscordUserWidget";*/

export default function Portofolio() {
    return (
        <>
        <div className="page gap-4 overflow-auto">
            <section id="aboutme about" className="portofolioCategory p-4 items-center gap-1">
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
                <div className="flex gap-4">
                    <AppIcon iconUrl="https://www.figma.com/" iconSrc="/assets/images/programs/Figma.svg"/>
                    <AppIcon iconUrl="https://www.adobe.com/products/photoshop.html" iconSrc="/assets/images/programs/adobe/Adobe_Photoshop.svg"/>
                    <AppIcon iconUrl="https://www.adobe.com/products/illustrator.html" iconSrc="/assets/images/programs/adobe/Adobe_Ilustrator.svg"/>
                    <AppIcon iconUrl="https://create.roblox.com/" iconSrc="/assets/images/programs/engines/RobloxStudio_2025.svg"/>
                </div>
            </section>
            <section id="donations" className="portofolioCategory p-4 items-center">
                <h1 className="text-4xl font-bold">Donations</h1>
                <p className="text-2xl">sorry! i dont have any donation methods rn!</p>
            </section>
        </div>
        </>
    );
}