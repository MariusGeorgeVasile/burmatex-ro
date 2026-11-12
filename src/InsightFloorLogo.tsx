// InsightFLOOR logo, redrawn as SVG from the brand artwork (line skyline, walking figure with a red head).
export function InsightFloorLogo({ color = "#1c1b1a", className, title = "InsightFLOOR" }: { color?: string; className?: string; title?: string }) {
  return <svg className={className} viewBox="0 0 670 384" role="img" aria-label={title} xmlns="http://www.w3.org/2000/svg">
    <g fill="none" stroke={color} strokeWidth="5" strokeLinejoin="miter" strokeLinecap="butt">
      <path d="M5 237H63V195L118 176L178 203V237" />
      <path d="M147 237H300L420 208H516V57H576V237" />
      <path d="M558 237V6H613V236H660" />
      <path d="M576 236H613" />
      <path d="M324 184L318 202M324 184L332 199L338 198M324 184L320 196M324 188L328 208L337 224M324 190L314 222" strokeWidth="3.5" />
    </g>
    <circle cx="325" cy="175" r="6" fill="#e3123b" />
    <text x="2" y="355" fill={color} fontFamily="Jost, Manrope, Arial, sans-serif" fontSize="78" fontWeight="300" letterSpacing="17">insight<tspan fontWeight="700" letterSpacing="15">FLOOR</tspan></text>
  </svg>;
}
