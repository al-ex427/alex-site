import { NextRequest } from "next/server"




export async function GET(request: NextRequest, { params }: { params: Promise<{id: string}>}) {
    console.log(`Proxy API url accessed with the orign: ${request.headers.get("origin")}`) 

    const authKey = request.headers.get("X-Authorization")
    const id = (await params).id

    if (authKey !== process.env.API_AUTHKEY) {
        return new Response(JSON.stringify( { "message": "Unauthorized API access" } ), {status: 401})
    }

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