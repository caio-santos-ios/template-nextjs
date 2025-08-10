"use client"

import { Header } from "../Header/Header";
import { SidebarAccount } from "../SidebarAccount/SidebarAccount";
import { SidebarMenu } from "../SidebarMenu/SidebarMenu";
import "./style.css";

export const App = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="app">
            <Header/>
            <SidebarMenu></SidebarMenu>
            <div className="app-content">
                {children}
            </div>
            <SidebarAccount></SidebarAccount>
        </div>
    )
}