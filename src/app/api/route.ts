import GetGitInfo from "@/GitManager"





export async function GET() {
    const info = GetGitInfo()
    return new Response(JSON.stringify(info))
}