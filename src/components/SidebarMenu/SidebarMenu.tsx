"use client"

import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAtom } from "jotai";
import { menuAtom, openMenuAtom, selectedMenuAtom } from "@/stores/menu/menu.jotai";
import { useEffect } from "react";
import { getCookie, setCookie } from "cookies-next";

export const SidebarMenu = () => {
    const [menuOpen] = useAtom(openMenuAtom);
    const [menu] = useAtom(menuAtom);
    const [selectedMenu, setSelectedMenu] = useAtom<string | null>(selectedMenuAtom);

    useEffect(() => {
        const menuCookie: any = getCookie("menu");
        if (menuCookie) {
            try {
                console.log(menuCookie)
                setSelectedMenu(menuCookie);
            } catch {
                setSelectedMenu(null);
            }
        }
    }, [setSelectedMenu]);

    const selectItem = (key: string) => {
        setCookie('menu', key);
        setSelectedMenu(key);
    };
    
    return (
        <div className={`sidebar-menu ${menuOpen ? 'sidebar-menu-open' : 'sidebar-menu-close'}`}>
            <ul className="sidebar-menu-list">
               {
                menu.map((item) => (
                    <li onClick={() => selectItem(item.key)} key={item.key} className={`sidebar-item ${selectedMenu === item.key ? 'sidebar-item-active' : 'sidebar-item'}`}>
                        <FontAwesomeIcon icon={item.icon as any} />
                        <span className="sidebar-item-name">{item.name}</span>
                    </li>
                ))
               }
            </ul>
        </div>
    )
}