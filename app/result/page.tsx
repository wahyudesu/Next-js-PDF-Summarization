import { useSearchParams } from 'next/navigation';

export default function ResultPage() {
  const searchParams = useSearchParams();
  const parsedText = searchParams.get('text') || 'No text found.';

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-4">Parsed PDF Text</h1>
      <div className="w-full max-w-2xl p-4 border rounded bg-gray-50">
        <pre className="whitespace-pre-wrap">{parsedText}</pre>
      </div>
    </div>
  );
}
