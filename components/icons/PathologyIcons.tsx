const stroke = {
  fill: "none" as const,
  stroke: "#117C70",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Svg({ children }: { children: React.ReactNode }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      aria-hidden="true"
      {...stroke}
    >
      {children}
    </svg>
  );
}

const icons: Record<string, React.ReactNode> = {
  anemia: (
    <Svg>
      <path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-13-7-13S5 10.7 5 15a7 7 0 0 0 7 7z" />
      <circle cx="12" cy="13" r="1" />
      <circle cx="10" cy="16" r="1" />
      <circle cx="14" cy="16" r="1" />
    </Svg>
  ),
  trombosis: (
    <Svg>
      <path d="M3 8h18M3 16h18" />
      <path
        d="M12 6a3 3 0 0 1 3 3v6a3 3 0 0 1-6 0V9a3 3 0 0 1 3-3z"
        fill="#117C70"
        fillOpacity="0.2"
      />
    </Svg>
  ),
  "alteraciones-coagulacion": (
    <Svg>
      <path d="M12 3v18M3 12h18M5.5 5.5l13 13M18.5 5.5l-13 13" />
      <circle cx="12" cy="12" r="3" fill="#117C70" fillOpacity="0.1" />
    </Svg>
  ),
  "plaquetas-bajas": (
    <Svg>
      <path d="M4 11l3-2 2 3-3 1zM9 5l2-2 2 2-1 2zM14 12l2-1 1 2-2 1z" />
      <path d="M19 15v6M16 18l3 3 3-3" />
    </Svg>
  ),
  "plaquetas-elevadas": (
    <Svg>
      <path d="M3 14l2-1 1 2-2 1zM7 16l2-2 1 2-2 1zM5 9l2-1 1 2-2 1zM10 10l2-2 1 2-2 1z" />
      <path d="M19 9V3M16 6l3-3 3 3" />
    </Svg>
  ),
  "globulos-blancos-elevados": (
    <Svg>
      <circle cx="10" cy="12" r="7" />
      <path d="M9 10a2 2 0 0 1 2 2v1a1 1 0 0 0 1 1h1" strokeDasharray="1 1" />
      <path d="M19 9V3M16 6l3-3 3 3" />
    </Svg>
  ),
  "globulos-blancos-disminuidos": (
    <Svg>
      <circle cx="10" cy="12" r="7" />
      <path d="M9 10a2 2 0 0 1 2 2v1a1 1 0 0 0 1 1h1" strokeDasharray="1 1" />
      <path d="M19 15v6M16 18l3 3 3-3" />
    </Svg>
  ),
  policitemia: (
    <Svg>
      <circle cx="9" cy="10" r="3.2" />
      <circle cx="15" cy="10" r="3.2" />
      <circle cx="12" cy="15" r="3.2" />
    </Svg>
  ),
  "mieloma-multiple": (
    <Svg>
      <path d="M5 20c2-6 4-10 7-14 3 4 5 8 7 14" />
      <path d="M7 16h10" />
      <circle cx="12" cy="10" r="1.5" fill="#117C70" fillOpacity="0.2" />
    </Svg>
  ),
  leucemias: (
    <Svg>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 4v2M12 18v2M4 12h2M18 12h2M6.3 6.3l1.4 1.4M16.3 16.3l1.4 1.4M17.7 6.3l-1.4 1.4M7.7 16.3l-1.4 1.4" />
    </Svg>
  ),
  linfomas: (
    <Svg>
      <circle cx="8" cy="8" r="3" />
      <circle cx="16" cy="9" r="2.5" />
      <circle cx="11" cy="16" r="3.2" />
      <path d="M10.2 10.2l2.2 1.2M13.6 11.2l-1.2 2.2" />
    </Svg>
  ),
  "trastornos-hierro": (
    <Svg>
      <path d="M9 3h6M10 3v5l-3.5 10h11L14 8V3" />
      <circle cx="12" cy="16" r="1.2" fill="#117C70" fillOpacity="0.35" />
    </Svg>
  ),
};

export function PathologyIcon({
  id,
  className = "h-10 w-10",
}: {
  id: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full p-2 ${className}`}
      style={{ backgroundColor: "rgba(17, 124, 112, 0.08)" }}
    >
      {icons[id] ?? icons.anemia}
    </span>
  );
}
