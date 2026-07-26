export default function DoodleFilters() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden>
      <defs>
        <filter id="roughen1" x="-30%" y="-30%" width="160%" height="160%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.05 0.07"
            numOctaves={2}
            seed={7}
            result="n"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="n"
            scale={5.5}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
        <filter id="roughen2" x="-30%" y="-30%" width="160%" height="160%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.06 0.05"
            numOctaves={2}
            seed={21}
            result="n"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="n"
            scale={6.5}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
        <filter id="roughen3" x="-30%" y="-30%" width="160%" height="160%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.045 0.08"
            numOctaves={2}
            seed={42}
            result="n"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="n"
            scale={5}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  );
}
