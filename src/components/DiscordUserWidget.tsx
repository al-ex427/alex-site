interface DiscordUserWidgetProps {
    userID: number;
}
export default function DiscordUserWidget(props: DiscordUserWidgetProps) {
    return (
        <div className="w-[100%] font-(family-name:--font-ggsans) h-25 rounded-xl bg-discord-ash">
            <div className="bg-white h-[40%] rounded-t-xl"/>
            <span>Username</span>
        </div>
    )
}