export const metadata = {
  title: 'Куда пицца | Дашборд',
  description: 'Dashboard page pizza-app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
