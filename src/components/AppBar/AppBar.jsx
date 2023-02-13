import { AuthNavigation } from "components/AuthNavigation/AuthNavigation"
import { MainNavigation } from "components/MainNavigation/MainNavigation"
import { UserMenu } from "components/UserMenu/UserMenu"

import { Header } from "./AppBar.styled"


export const AppBar = () => {
    return (
        <Header>
            <MainNavigation />
            <UserMenu />
            <AuthNavigation />
            {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
        </Header>
    )
}