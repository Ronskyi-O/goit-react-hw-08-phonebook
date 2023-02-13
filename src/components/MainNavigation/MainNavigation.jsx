import { useAuth } from "hooks/useAuth"
import { Navigation, NavStyledLink } from "./MainNavigation.styled"

export const MainNavigation = () => {
    const { isLoggedIn } = useAuth()
    return (
        <Navigation>
            <NavStyledLink to="/">
                Home
            </NavStyledLink>
            {isLoggedIn && (
                <NavStyledLink to="/contacts">
                    Contacts
                </NavStyledLink>
            )}
        </Navigation>
    )
}