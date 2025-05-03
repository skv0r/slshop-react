import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/shared/ui/navigation-menu";
import { cn } from "@/shared/lib/utils";

const navItems = [
  { href: "/profile", label: "Профиль" },
  { href: "/featured", label: "Избранное" },
  { href: "/cart", label: "Корзина" },
];

export default function MainNav() {
  return (
    <NavigationMenu className="border-1 rounded-[6px]">
      <NavigationMenuList>
        {navItems.map((item) => (
          <NavigationMenuItem key={item.href}>
            <NavigationMenuLink
              className={cn(
                "px-3 py-[6px] text-sm font-medium text-black hover:underline"
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
