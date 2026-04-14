import "./globals.css";

export const metadata = {
  title: "Great Lakes Outdoor Care",
  description:
    "Professional lawn care, leaf cleanup, snow removal, and pressure washing in Ionia County.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
