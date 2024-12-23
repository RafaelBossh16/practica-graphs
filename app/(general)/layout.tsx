import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Coorporative",
  description: "Description corporative about my company",
};

export default function GeneralLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main lang="en">{children}</main>;
}
