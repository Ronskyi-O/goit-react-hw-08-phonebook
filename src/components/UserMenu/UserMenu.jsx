import { Username, Wrapper } from "./UserMenu.styled"

export const UserMenu = () => {
    return (
        <Wrapper>
            <Username>Welcome User</Username>
            <button type="button">
                Logout
            </button>
        </Wrapper >
    )
}