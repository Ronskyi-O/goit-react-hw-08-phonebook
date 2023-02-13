import { Navigation, NavStyledLink } from "./AuthNavigation.styled"

export const AuthNavigation = () => {
    return (
        <Navigation>
            <NavStyledLink to="/register">
                Register
            </NavStyledLink>
            <NavStyledLink to="/login">
                Log In
            </NavStyledLink>
        </Navigation>
    )
}