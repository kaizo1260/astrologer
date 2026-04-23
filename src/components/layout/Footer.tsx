export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-cosmic-border bg-cosmic-card/40 backdrop-blur-sm py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-cosmic-muted text-sm mb-2">
          © {currentYear} Chiêm Tinh Học. Powered by Astrologer API v5.
        </p>
        <p className="text-cosmic-muted text-xs">
          ⭐ Khám phá bí ẩn của vũ trụ.
        </p>
      </div>
    </footer>
  );
}
