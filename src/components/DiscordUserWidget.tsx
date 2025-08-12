interface DiscordUserWidgetProps {
    userID: number;
}
export default function DiscordUserWidget(props: DiscordUserWidgetProps) {
    return (
        <div className="w-[100%] h-25 rounded-xl bg-discord-ash">
            <h1>Fetching..</h1>
        </div>
    )
}