import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/shared/ui/components";
import { cn } from "@/shared/lib/utils";

const navItems = [
  { href: "/", label: "Главная" },
  { href: "/catalog", label: "Каталог" },
  { href: "/about", label: "О нас" },
  { href: "/contact", label: "Контакты" },
];

export default function MainNav() {
  return (
    <NavigationMenu className="border-1 rounded-[6px]">
      <NavigationMenuList>
        {navItems.map((item) => (
          <NavigationMenuItem key={item.href}>
            <NavigationMenuLink
              className={cn(
                "px-10 py-6 text-sm font-medium hover:underline text-black"
              )}
              href={item.href}
            >
              {item.label}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
