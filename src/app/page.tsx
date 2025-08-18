import DiscordServerWidget from "@/components/widgets/DiscordServerWidget";


export default function Home() {
  return (
    <>
    <div className="page">
      <div className="w-full bg-cover bg-center bg-no-repeat bg-local  h-128 bg-[url(/assets/images/backgrounds/space_02.jpg)]">
        <div className="flex flex-col justify-center content-center backdrop-blur-2xl h-full w-full">
            <h1 className="text-6xl font-black">Welcome to my Website<br />[NOTICE: THIS WEBSITE IS IN BETA]</h1>
        </div>
      </div>
      
      <div className="h-full flex flex-col justify-center content-center">
        <iframe src="https://discord.com/widget?id=1373259502555631669&theme=dark" width="350" height="500" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
        <DiscordServerWidget></DiscordServerWidget>
      </div>
      
       
        
    </div>

    </>
  );
}
