import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import { v4 as uuidv4 } from 'uuid';
import PDFParser from 'pdf2json';

export async function POST(req: NextRequest) {
  const formData: FormData = await req.formData();
  const uploadedFiles = formData.getAll('filepond');
  let fileName = '';
  let parsedText = '';

  if (uploadedFiles && uploadedFiles.length > 0) {
    const uploadedFile = uploadedFiles[1];
    
    if (uploadedFile instanceof File) {
      fileName = uuidv4();
      const tempFilePath = `E:/Workspace/nextjs-pdf/nextjs-pdf-parser/public/tmp/${fileName}.pdf`;
      const fileBuffer = Buffer.from(await uploadedFile.arrayBuffer());
      await fs.writeFile(tempFilePath, fileBuffer);

      try {
        parsedText = await new Promise((resolve, reject) => {
          const pdfParser = new (PDFParser as any)(null, 1);
          
          pdfParser.on('pdfParser_dataError', (errData: any) => {
            console.log(errData.parserError);
            reject(errData.parserError);
          });

          pdfParser.on('pdfParser_dataReady', () => {
            const text = (pdfParser as any).getRawTextContent();
            resolve(text);
          });

          pdfParser.loadPDF(tempFilePath);
        });
      } catch (error) {
        console.error('Error parsing PDF:', error);
        return NextResponse.json({ error: 'Failed to parse PDF' }, { status: 500 });
      }
    }
  }

  return NextResponse.json({ fileName, parsedText });
}