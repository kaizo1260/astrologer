interface ErrorMessageProps {
  message: string;
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="bg-red-900/30 border border-red-700 rounded-lg p-4 mb-6 max-w-2xl mx-auto">
      <p className="text-red-400">⚠️ {message}</p>
    </div>
  );
}
