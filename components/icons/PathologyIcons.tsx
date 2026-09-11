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
      className="h-6 w-6 shrink-0"
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
      <circle cx="12" cy="12" r="8" />
      <ellipse cx="12" cy="12" rx="4" ry="2.2" />
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
      <path d="M5 10l2.2-1.4 1.4 2.2-2.2.8zM9 6l1.6-1.6 1.6 1.6-.8 1.6z" />
      <path d="M12 11v8M9 16l3 3 3-3" />
    </Svg>
  ),
  "plaquetas-elevadas": (
    <Svg>
      <path d="M5 16l2.2 1.4 1.4-2.2-2.2-.8zM9 19l1.6 1.6 1.6-1.6-.8-1.6z" />
      <path d="M12 13V5M9 8l3-3 3 3" />
    </Svg>
  ),
  "globulos-blancos-elevados": (
    <Svg>
      <circle cx="12" cy="13" r="5.5" />
      <path d="M12 4v2.2M18.4 7.2l-1.6 1.6M20 13h-2.2M18.4 18.8l-1.6-1.6M12 20v-2.2M5.6 18.8l1.6-1.6M4 13h2.2M5.6 7.2l1.6 1.6" />
      <circle cx="12" cy="13" r="1.6" />
    </Svg>
  ),
  "globulos-blancos-disminuidos": (
    <Svg>
      <circle cx="12" cy="11" r="5.5" />
      <path d="M12 3v2.2M18.4 6.2l-1.6 1.6M20 11h-2.2M4 11h2.2M5.6 6.2l1.6 1.6" />
      <path d="M12 16v5M9 18l3 3 3-3" />
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
  className,
}: {
  id: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#117C70]/10 p-2 ${className ?? ""}`}
    >
      {icons[id] ?? icons.anemia}
    </span>
  );
}
