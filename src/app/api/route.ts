import GetGitInfo from "@/GitManager"
import { NextRequest } from "next/server"





export async function GET() {
    const info = GetGitInfo()
    return new Response(JSON.stringify(info))
}