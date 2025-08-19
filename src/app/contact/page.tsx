import AppIcon from "@/components/AppIcon";

export default function Contact() {
    return (
        <>
        <div className="page">
            <h1 className="text-2xl font-bold">You can contact me via these platforms:</h1>
            <AppIcon className="w-64" iconUrl="https://discord.com/users/1156977795575070873/" iconSrc="/assets/images/icons/Discord_LogoWhite.svg" iconScale={0.75} iconColor="bg-[#5865f2]"></AppIcon>

        </div>
        </>
    );
}