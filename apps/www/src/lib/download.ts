import path from "path";
import fs from "fs"

export default function downloadFile(fileName: string) {
    const filePath = path.join(process.cwd(), 'public', fileName);
    if (!fs.existsSync(filePath)) {
        return new Response("File unavailable", {
            status: 400
        })
    }
    const file = fs.readFileSync(filePath);
    return new Response(file, {
        headers: {
            'Content-Type': 'application/pdf'
        }
    })
}