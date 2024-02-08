import { Avatar, Link, Navbar, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import OpenContactModal from "./OpenContactModal";


function NavbaComponent() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    return (
        <>

            <Navbar onMenuOpenChange={setIsMenuOpen} classNames={{
                item: [
                    "flex",
                    "relative",
                    "h-full",
                    "items-center",
                    "data-[active=true]:after:content-['']",
                    "data-[active=true]:after:absolute",
                    "data-[active=true]:after:bottom-0",
                    "data-[active=true]:after:left-0",
                    "data-[active=true]:after:right-0",
                    "data-[active=true]:after:h-[2px]",
                    "data-[active=true]:after:rounded-[2px]",
                    "data-[active=true]:after:bg-warning",
                ],
            }}   >
                <NavbarContent>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="sm:hidden"
                    />
                </NavbarContent>

                <NavbarContent className="hidden sm:flex gap-8" justify="center">
                    <NavbarItem isActive={location.pathname === "/education"}>
                        <Link href="/education" color="warning">QUALIFICATIONS</Link>
                    </NavbarItem>
                    <NavbarItem isActive={location.pathname === "/skills"} aria-current="page">
                        <Link href="/skills" color="warning">SKILLS</Link>
                    </NavbarItem>
                    <NavbarItem isActive={location.pathname === "/projects"}>
                        <Link href="/projects" color="warning">PROJECTS</Link>
                    </NavbarItem>
                    <NavbarItem isActive={location.pathname === "/hobbies"}>
                        <Link href="/hobbies" color="warning">HOBBIES AND INTERESTS</Link>
                    </NavbarItem>
                    <NavbarItem >
                        <OpenContactModal />
                    </NavbarItem>

                </NavbarContent>
                <NavbarContent justify="end">
                        <Link href="/">
                            <Avatar src="/me.jpg" size="lg" />
                        </Link>
                </NavbarContent>



                <NavbarMenu>
                    <NavbarMenuItem>
                        <Link href="/education" color="warning">QUALIFICATIONS</Link>
                    </NavbarMenuItem>
                    <NavbarMenuItem>
                        <Link href="/skills" color="warning">SKILLS</Link>
                    </NavbarMenuItem>
                    <NavbarMenuItem>
                        <Link href="/hobbies" color="warning">HOBBIES AND INTERESTS</Link>
                    </NavbarMenuItem>
                    <NavbarMenuItem>
                        <Link href="/projects" color="warning">PROJECTS</Link>
                    </NavbarMenuItem>
                    <NavbarMenuItem>
                        <OpenContactModal />
                    </NavbarMenuItem>

                </NavbarMenu>
            </Navbar>

        </>

    )
}

export default NavbaComponent;