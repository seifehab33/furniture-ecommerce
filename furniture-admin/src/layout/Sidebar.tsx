import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  ChevronDown,
  ChevronRight,
  Home,
  DollarSign,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

interface SubItem {
  label: string;
  to: string;
}

interface NavItem {
  label: string;
  icon: React.ElementType;
  to?: string;
  children?: SubItem[];
}

const navItems: NavItem[] = [
  {
    label: "Dashboard",
    icon: Home,
    to: "/dashboard",
  },
  {
    label: "Management",
    icon: Users,
    children: [
      { label: "Currencies", to: "/currencies" },
      { label: "Providers", to: "/providers" },
    ],
  },
  {
    label: "Finance",
    icon: DollarSign,
    children: [
      { label: "Transactions", to: "/transactions" },
      { label: "Reports", to: "/reports" },
    ],
  },
];

export default function Sidebar() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (label: string) => {
    setOpenSections((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <Card className="h-screen w-64 p-4 flex flex-col shadow-md bg-background">
      <h1 className="text-xl font-bold mb-6 px-2">MyApp</h1>
      <nav className="flex flex-col gap-1">
        {navItems.map(({ label, icon: Icon, to, children }) => {
          const isOpen = openSections[label];
          const hasChildren = !!children?.length;

          return (
            <div key={label}>
              {hasChildren ? (
                <button
                  onClick={() => toggleSection(label)}
                  className={cn(
                    "w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted transition-colors"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-4 w-4" />
                    {label}
                  </div>
                  {isOpen ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </button>
              ) : (
                <NavLink
                  to={to!}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-muted"
                    )
                  }
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </NavLink>
              )}

              {hasChildren && isOpen && (
                <div className="ml-8 mt-1 flex flex-col gap-1">
                  {children.map((child) => (
                    <NavLink
                      key={child.to}
                      to={child.to}
                      className={({ isActive }) =>
                        cn(
                          "block px-3 py-1.5 rounded-md text-sm transition-colors",
                          isActive
                            ? "bg-primary text-primary-foreground"
                            : "text-muted-foreground hover:bg-muted"
                        )
                      }
                    >
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </Card>
  );
}
