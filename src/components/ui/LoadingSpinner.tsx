export function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center py-12">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full border-4 border-cosmic-border border-t-cosmic-gold animate-spin" />
        <div className="absolute inset-2 rounded-full border-2 border-cosmic-purple opacity-30 animate-spin-slow" />
      </div>
      <span className="ml-4 text-cosmic-gold">Đang tải...</span>
    </div>
  );
}
