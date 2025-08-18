export default function HandDrawnUnderline() {
  return (
    <svg
      className="absolute -bottom-4 left-0 w-full pointer-events-none"
      viewBox="0 0 300 15"
      preserveAspectRatio="none"
      style={{ width: '105%', left: '-2.5%' }}
    >
      {/* Main pencil stroke */}
      <path
        d="M10,10 C30,9 50,11 70,10 C90,9 110,11 130,10 C150,9 170,11 190,10 C210,9 230,11 250,10 C270,9 290,10 290,10"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        opacity="0.9"
        strokeDasharray="0 0"
      >
        <animate
          attributeName="d"
          values="M10,10 C30,9 50,11 70,10 C90,9 110,11 130,10 C150,9 170,11 190,10 C210,9 230,11 250,10 C270,9 290,10 290,10;
                  M10,11 C30,10 50,9 70,11 C90,10 110,9 130,11 C150,10 170,9 190,11 C210,10 230,9 250,11 C270,10 290,11 290,11;
                  M10,10 C30,9 50,11 70,10 C90,9 110,11 130,10 C150,9 170,11 190,10 C210,9 230,11 250,10 C270,9 290,10 290,10"
          dur="6s"
          repeatCount="indefinite"
        />
      </path>
      {/* Secondary stroke for thickness */}
      <path
        d="M10,11 C30,10 50,12 70,11 C90,10 110,12 130,11 C150,10 170,12 190,11 C210,10 230,12 250,11 C270,10 290,11 290,11"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        opacity="0.6"
      >
        <animate
          attributeName="d"
          values="M10,11 C30,10 50,12 70,11 C90,10 110,12 130,11 C150,10 170,12 190,11 C210,10 230,12 250,11 C270,10 290,11 290,11;
                  M10,12 C30,11 50,10 70,12 C90,11 110,10 130,12 C150,11 170,10 190,12 C210,11 230,10 250,12 C270,11 290,12 290,12;
                  M10,11 C30,10 50,12 70,11 C90,10 110,12 130,11 C150,10 170,12 190,11 C210,10 230,12 250,11 C270,10 290,11 290,11"
          dur="6s"
          begin="0.2s"
          repeatCount="indefinite"
        />
      </path>
      {/* Sketchy texture */}
      <path
        d="M15,11 L25,11 M35,10 L40,10 M55,11 L65,11 M80,10 L85,10 M100,11 L108,11 M125,10 L130,10 M145,11 L155,11 M170,10 L175,10 M190,11 L198,11 M215,10 L220,10 M235,11 L245,11 M260,10 L265,10 M280,11 L285,11"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
        opacity="0.4"
        strokeLinecap="round"
      />
    </svg>
  );
}