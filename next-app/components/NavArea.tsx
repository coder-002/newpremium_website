"use client";

import { useRouter } from "next/navigation";
import type { ComponentPropsWithoutRef, ElementType, KeyboardEvent, MouseEvent } from "react";

type Props = {
  as?: ElementType;
  href: string;
} & Omit<ComponentPropsWithoutRef<"div">, "onClick" | "onKeyDown">;

/** A clickable block (e.g. product card) that navigates like a link, ignoring clicks on nested links and buttons. */
export default function NavArea({ as: Tag = "div", href, children, ...rest }: Props) {
  const router = useRouter();

  const go = (e: MouseEvent | KeyboardEvent) => {
    if ((e.target as HTMLElement).closest("a, button")) return;
    router.push(href);
  };

  return (
    <Tag
      {...rest}
      role="link"
      tabIndex={0}
      onClick={go}
      onKeyDown={(e: KeyboardEvent) => {
        if (e.key === "Enter") go(e);
      }}
      onMouseEnter={() => router.prefetch(href)}
    >
      {children}
    </Tag>
  );
}
