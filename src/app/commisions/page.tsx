export default function Commisions() {
    return (
        <>
            <div className="page gap-2 overflow-auto">
                <section className="portofolioCategory p-4 items-center gap-1">
                    <h1 className="text-4xl font-bold">Commisions</h1>
                    <p className="text-2xl">For commisions, I accept USD/EUR, Robux and %</p>
                </section>
                <section className="portofolioCategory p-4 items-center gap-1">
                    <h1 className="text-4xl font-bold">What i can do/can not do</h1>
                    <div className={`text-2xl`}>
                        <p>I can make Beautiful/Advanced UI's, make simple scripts (eg. for UI) </p>
                        <p>I can not: script advanced stuff, make icons/art</p>
                    </div>
                </section>
                <section className="portofolioCategory p-4 items-center gap-1">
                    <h1 className="text-4xl font-bold">How do i commision?</h1>
                    <p className="text-2xl">DM me on Discord, you can find the link to my profile on the contact page, I'l quote a price base on your request.</p>
                    <p className="text-2xl">A reference photo would be nice!</p>
                </section>
                <section>
                     <h1 className="text-4xl font-bold">Extra Info</h1>
                     <p className="text-2xl">I DO NOT ACCEPT REFUNDS!</p>
                </section>
            </div>
        </>
    )
}