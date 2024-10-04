import { NextRequest, NextResponse } from 'next/server';
import downloadFile from '@/lib/download';

export async function GET(req: NextRequest, res: NextResponse) {
    // TODO: add cover in public and use here
    return downloadFile("Resume.pdf")
};
