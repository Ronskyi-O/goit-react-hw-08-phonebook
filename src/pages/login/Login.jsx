import { useDispatch } from "react-redux"
import { login } from "redux/auth/auth.thunk"
import { Form, Label } from "./Login.styled"

const Login = () => {
    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(login({
            email: form.elements.email.value,
            password: form.elements.password.value,
        }));
        form.reset();
    }

    return (
        <Form onSubmit={handleSubmit} autoComplete="off">
            <Label >
                Email
                <input type="email" name="email" />
            </Label>
            <Label >
                Password
                <input type="password" name="password" />
            </Label>
            <button type="submit">Log In</button>
        </Form>
    )
}

export default Login