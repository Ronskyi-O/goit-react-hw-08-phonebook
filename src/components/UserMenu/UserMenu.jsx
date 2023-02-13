import { useAuth } from "hooks/useAuth"
import { Username, Wrapper } from "./UserMenu.styled"

export const UserMenu = () => {
    const { user } = useAuth()

    return (
        <Wrapper>
            <Username>Welcome, {user.name}</Username>
            <button type="button">
                Logout
            </button>
        </Wrapper >
    )
}