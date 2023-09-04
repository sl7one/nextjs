import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main lang="en">
      <ul className="flex justify-center">
        <li>
          <Link href="/home/one" className="p-4 block">
            ONE{" "}
          </Link>
        </li>
        <li>
          <Link href="/home/two" className="p-4 block">
            TWO{" "}
          </Link>
        </li>
        <li>
          <Link href="/home/three" className="p-4 block">
            THREE{" "}
          </Link>
        </li>
        <li>
          <Link href="/home/four" className="p-4 block">
            FOUR{" "}
          </Link>
        </li>
        <li>
          <Link href="/home/five" className="p-4 block">
            FIVE{" "}
          </Link>
        </li>
      </ul>
      {children}
    </main>
  );
}
