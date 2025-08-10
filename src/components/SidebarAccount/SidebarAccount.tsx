"use client"

import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faGear, faHeadphones, faUserCircle } from "@fortawesome/free-solid-svg-icons";

export const SidebarAccount = () => {    
    return (
        <div className="sidebar-account">
            <div className="sidebar-account-content">
                <div className="sidebar-account-header">
                    <FontAwesomeIcon onClick={() => open('account')} icon={faUserCircle} />
                </div>
                <h1 className="sidebar-account-name">Caio</h1>
                <ul className="sidebar-account-list">
                    <li className="sidebar-account-item">
                        <FontAwesomeIcon size="xl" icon={faGear} />
                    </li>
                    <li className="sidebar-account-item">
                        <FontAwesomeIcon size="xl" icon={faHeadphones} />
                    </li>
                    <li className="sidebar-account-item">
                        <FontAwesomeIcon size="xl" icon={faBell} />
                    </li>
                </ul>
            </div>
        </div>
    )
}