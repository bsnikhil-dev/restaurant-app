"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import classes from "./NavLink.module.css";

export default function NavLink({href,children}:{href:string,children:ReactNode}) {
    
    const path = usePathname();
    return (
        <Link href={href} 
        className={path.startsWith(href) ? `${classes.link} ${classes.active}` : undefined}>
           {children}
        </Link>
    );
}