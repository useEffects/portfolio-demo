import { NextRequest, NextResponse } from 'next/server';
import downloadFile from '@/lib/download';

export async function GET(req: NextRequest, res: NextResponse) {
  return downloadFile("Resume.pdf")
};
