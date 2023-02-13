import { Navigation, NavStyledLink } from "./MainNavigation.styled"

export const MainNavigation = () => {
    return (
        <Navigation>
            <NavStyledLink to="/">
                Home
            </NavStyledLink>
            <NavStyledLink to="/contacts">
                Contacts
            </NavStyledLink>
        </Navigation>
    )
}