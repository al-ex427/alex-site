import { NextRequest } from "next/server"


export async function GET(request: NextRequest, { params }: { params: Promise<{id: string}>}) {
    const id = (await params).id
    const discordFetch = await fetch(`https://discord.com/api/users/${id}`, {
        headers: { 
            Authorization: `Bot ${process.env.DISCORD_AUTHTOKEN}`
        },
    })

    const data = await discordFetch.json();
    const transformed = { ...data, source: 'proxied-through-nextjs'};

    return new Response(JSON.stringify(transformed), {
        headers: { 'Content-Type': 'application/json' },
    });

    
}