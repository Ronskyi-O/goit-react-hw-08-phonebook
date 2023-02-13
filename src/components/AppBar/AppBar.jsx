import { AuthNavigation } from "components/AuthNavigation/AuthNavigation"
import { MainNavigation } from "components/MainNavigation/MainNavigation"
import { UserMenu } from "components/UserMenu/UserMenu"
import { useAuth } from "hooks/useAuth"

import { Header } from "./AppBar.styled"


export const AppBar = () => {
    const { isLoggedIn } = useAuth()
    return (
        <Header>
            <MainNavigation />
            {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
        </Header>
    )
}