import Image from "next/image";
import { type Client, CLIENTS } from "@/data/clients";

const ROWS = 2;

function LogoCard({ client, hidden }: { client: Client; hidden?: boolean }) {
  return (
    <div className="client-card" title={client.name} aria-hidden={hidden || undefined}>
      <div className="client-card-logo has-img">
        <Image src={client.logo} alt={`${client.name} logo`} width={160} height={160} />
      </div>
    </div>
  );
}

/** Two marquee rows of client logos; each row is duplicated so the CSS scroll loops seamlessly. */
export default function ClientLogoBar() {
  const clients = CLIENTS.filter((c) => c.logo);
  const rows = Array.from({ length: ROWS }, (_, r) => clients.filter((_, i) => i % ROWS === r));

  return (
    <div className="logo-bar-wrap">
      {rows.map((list, r) => (
        <div
          key={r}
          className={`logo-bar-track${r % 2 ? " logo-bar-track-reverse" : ""}`}
          style={{ animationDuration: `${Math.max(40, list.length * 4)}s` }}
        >
          {[...list, ...list].map((c, i) => (
            <LogoCard key={`${c.name}-${i}`} client={c} hidden={i >= list.length} />
          ))}
        </div>
      ))}
    </div>
  );
}
