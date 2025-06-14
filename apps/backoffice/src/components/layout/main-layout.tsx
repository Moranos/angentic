import { Sidebar } from "./sidebar"

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-secondary">
        <Sidebar />
      </div>
      <main className="md:pl-72">
        <div className="h-full p-8">
          {children}
        </div>
      </main>
    </div>
  )
} 