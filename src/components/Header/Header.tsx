"use client"

import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUserCircle, faXmark } from "@fortawesome/free-solid-svg-icons";
import { openMenuAtom } from "@/stores/menu/menu.jotai";
import { useAtom } from "jotai";
import { openAccountAtom } from "@/stores/sidebar/sidebar.jotai";
import { useEffect } from "react";

export const Header = () => {
    const [menuOpen, setMenuOpen] = useAtom(openMenuAtom);
    const [accountOpen, setAccountOpen] = useAtom(openAccountAtom);

    useEffect(() => {
        console.log(menuOpen)
        console.log(accountOpen)
    }, [])

    const open = (type: "menu" | "account") => {
        if(type === "menu") {
            setMenuOpen(true);
            setAccountOpen(false);
        } else {
            setMenuOpen(false);
            setAccountOpen(true);
        };
    };

    const close = () => {
        setMenuOpen(false);
        setAccountOpen(false);
    };

    return (
        <header className="header">
            {
                menuOpen ?
                <FontAwesomeIcon size="xl" onClick={close} icon={faXmark} />
                :
                <FontAwesomeIcon size="xl" onClick={() => open('menu')} icon={faBars} />
            }
            {
                accountOpen ?
                <FontAwesomeIcon size="xl" onClick={close} icon={faXmark} />
                :
                <FontAwesomeIcon size="xl" onClick={() => open('account')} icon={faUserCircle} />
            }
        </header>
    )
}