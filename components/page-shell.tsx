import type { ReactNode } from "react";
import { CtaSection } from "@/components/cta-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function PageShell({
  children,
  showCta = true,
  compactFooter = false,
  ukFooter = false,
}: {
  children: ReactNode;
  showCta?: boolean;
  compactFooter?: boolean;
  ukFooter?: boolean;
}) {
  return (
    <>
      <SiteHeader />
      {children}
      {showCta ? <CtaSection /> : null}
      <SiteFooter compact={compactFooter} ukContact={ukFooter} />
    </>
  );
}
