export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <main className="flex flex-col items-center justify-center w-full h-full">{children}</main>;
}
