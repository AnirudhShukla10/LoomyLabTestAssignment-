export default function CrownIcon() {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className="w-32 h-32"
      fill="none"
      style={{
        width: '150px',
        height: '120px',
        position: 'absolute',
        top: '-60px',
        left: '-55px',
      }}
    >
      <polygon
        points="25,70 20,40 35,55 50,30 65,55 80,40 75,70"
        fill="#F4C542"
        transform="rotate(-35 50 50)"
      />
    </svg>
  );
}