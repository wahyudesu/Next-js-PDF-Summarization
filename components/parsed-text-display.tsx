interface ParsedTextDisplayProps {
  parsedText: string;
}

export default function ParsedTextDisplay({ parsedText }: ParsedTextDisplayProps) {
  return (
    <div className="mt-4 text-center">
      <h2 className="font-bold text-lg">Parsed Text:</h2>
      <pre className="whitespace-pre-wrap border p-4 rounded max-w-2xl mx-auto">
        {parsedText}
      </pre>
    </div>
  );
}
