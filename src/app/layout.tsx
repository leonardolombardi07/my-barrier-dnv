import "./globals.css";

import "devextreme/dist/css/dx.light.css";
import "devexpress-diagram/dist/dx-diagram.min.css";
import "devexpress-diagram/dist/dx-diagram.css";

export const metadata = {
  title: "My Barriers",
  description: "Create graphs with DNV.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={"dx-viewport"}>{children}</body>
    </html>
  );
}
