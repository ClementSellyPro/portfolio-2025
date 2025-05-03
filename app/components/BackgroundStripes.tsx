export default function BackgroundStripes() {
  return (
    <div className="fixed inset-0 h-[100vh] z-0 grid grid-cols-4">
        {['#f87171', '#60a5fa', '#34d399', '#facc15'].map((color, i) => (
        <div
          key={i}
          className="transition-colors duration-300"
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = color}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        />
      ))}
    </div>
  )
}