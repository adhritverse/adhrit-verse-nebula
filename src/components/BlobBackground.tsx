export default function BlobBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
      {/* Subtle blue blob — top left */}
      <div className="blob blob-1 animate-float" style={{
        top: '-10%', left: '-10%', width: '50vw', height: '50vw',
        background: 'radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)'
      }} />
      {/* Subtle violet blob — top right */}
      <div className="blob blob-2 animate-float" style={{
        top: '20%', right: '-20%', width: '60vw', height: '60vw',
        background: 'radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%)',
        animationDirection: 'reverse', animationDuration: '18s'
      }} />
      {/* Subtle cyan blob — bottom */}
      <div className="blob blob-3 animate-float" style={{
        bottom: '-20%', left: '20%', width: '80vw', height: '80vw',
        background: 'radial-gradient(circle, rgba(14,165,233,0.04) 0%, transparent 70%)',
        animationDuration: '20s'
      }} />
    </div>
  );
}
