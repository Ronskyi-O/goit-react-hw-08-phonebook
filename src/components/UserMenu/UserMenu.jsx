import { useAuth } from "hooks/useAuth"
import { useDispatch } from "react-redux"
import { logOut } from "redux/auth/auth.thunk"
import { Username, Wrapper } from "./UserMenu.styled"

export const UserMenu = () => {
    const { user } = useAuth()
    const dispatch = useDispatch()

    const handleLogOut = () => { dispatch(logOut()) }

    return (
        <Wrapper>
            <Username>Welcome, {user.name}</Username>
            <button type="button" onClick={handleLogOut}>
                Logout
            </button>
        </Wrapper >
    )
}