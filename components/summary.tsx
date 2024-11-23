import ReactMarkdown from 'react-markdown';

interface SummaryDisplayProps {
    summary: string;
  }
  
export default function SummaryDisplay({ summary }: SummaryDisplayProps) {
  return (
    <div className="mt-4 text-center">
      <h2 className="font-bold text-lg">AI Summary:</h2>
      <div className="whitespace-pre-wrap border p-4 rounded max-w-2xl mx-auto">
        <ReactMarkdown>{summary}</ReactMarkdown>
      </div>
    </div>
  );
}
