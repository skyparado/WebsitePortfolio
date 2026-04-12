// REQUIRED GLOBAL LAYOUT - The wrapper for every single page in your app.

// import '../src/styles/globals.css'; <-- Add your Tailwind/global css imports here

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        {/* 1. Global Navigation/Header could go here */}
        <header className="p-4 bg-white shadow-sm font-bold text-center">
          My Awesome App
        </header>

        {/* 2. The actual page content is injected into {children} */}
        <main className="container mx-auto p-4 min-h-screen">
          {children}
        </main>

        {/* 3. Global Footer could go here */}
      </body>
    </html>
  );
}

// Rules:
// - The RootLayout wraps your entire application. Great for Navbar/Footer.
// - It is rendered on the server by default.
