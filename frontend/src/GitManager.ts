import { execSync } from "child_process"

export default function GetGitInfo() {
    try {
        const curCommit = execSync('git rev-parse HEAD').toString().trim().slice(0,7)
        const latestCommit = execSync('git ls-remote https://github.com/al-ex427/alex-site.git HEAD').toString().trim().slice(0,7)
        return { "commit": curCommit, "latest": latestCommit }
    } catch (e) {
        console.log(`Error occured whilst getting git info:\n${e}`)
        return { "commit": "N/A", "latest": "N/A", "message": "FAILED TO OBTAIN GIT INFO"}  
    }
}
