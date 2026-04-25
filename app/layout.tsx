import StyledComponentsRegistry from "@/lib/registry";
import { GlobalStyles } from "@/styles/global-styles";
import type { Metadata } from "next";
import { Jost } from "next/font/google";

const jost = Jost({
  variable: "--primary-font",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Designo",
  description: "Designo agency website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jost.variable}>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
