import { cn } from "@/lib/utils";
import Link from "next/link";

const menuItems = [
    {
        name: 'Home',
        href: '/'
    }, 
    {
        name: 'About',
        href: '/about'
    }, 
    {
        name: 'Articles',
        href: '/articles'
    }, 
    {
        name: 'Freebies',
        href: '/freebies'
    }, 
    {
        name: 'Shop',
        href: '/shop'
    }, 
    {
        name: 'Contact',
        href: '/contact'
    }, 
]

export function Menu({ toggle, isOpen }: any) {
    return (
      <nav 
        className={cn( 
            // !isOpen ? "hidden" : "visible", 
        "fixed top-0 right-0 bottom-0 w-[90%] bg-[#5c6f4d] opacity-95 p-10")}
        >
        <ul className="flex flex-col gap-6 p-6 mt-8">
            {
                menuItems.map((menuItem, idx) => (
                    <li 
                        key={idx}
                        className="text-dialog-foreground block list-none text-2xl"
                    >
                        <Link
                            href={menuItem.href}
                            onClick={toggle}
                        >
                            {menuItem.name}
                        </Link>
                    </li>
                ))
            }
        </ul>
      </nav>
    );
}