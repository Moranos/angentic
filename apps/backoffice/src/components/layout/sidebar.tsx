import { cn } from "../../lib/utils"
import { Link, useLocation } from "react-router-dom"
import { 
  LayoutDashboard, 
  Settings, 
  Users, 
  FileText,
  BarChart,
  Bot
} from "lucide-react"

const routes = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/',
  },
  {
    label: 'Analytics',
    icon: BarChart,
    href: '/analytics',
  },
  {
    label: 'Users',
    icon: Users,
    href: '/users',
  },
  {
    label: 'Documents',
    icon: FileText,
    href: '/documents',
  },
  {
    label: 'Agents',
    icon: Bot,
    href: '/agents',
  },
  {
    label: 'Settings',
    icon: Settings,
    href: '/settings',
  },
]

export function Sidebar() {
  const location = useLocation()

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-secondary">
      <div className="px-3 py-2 flex-1">
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              to={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                location.pathname === route.href ? "text-primary bg-primary/10" : "text-muted-foreground"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3")} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 