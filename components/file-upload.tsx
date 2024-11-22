'use client';

import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import { useState } from 'react';

interface FileUploadProps {
  onUploadComplete: (parsedText: string) => void;
}

export default function FileUpload({ onUploadComplete }: FileUploadProps) {

  return (
    <div className="w-full text-center">
      <FilePond
        server={{
          process: {
            url: '/api/upload',
            onload: (response) => {
              try {
                const parsedResponse = JSON.parse(response);
                onUploadComplete(parsedResponse.parsedText || 'No text found.')
                return parsedResponse.parsedText || 'No text found.';
              } catch {
                onUploadComplete('Failed to parse server response.');
              }
            },
            onerror: () => {
              onUploadComplete('Error uploading file.');
            },
          },
        }}
      />
    </div>
  );
}
