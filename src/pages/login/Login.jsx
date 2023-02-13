import { Form, Label } from "./Login.styled"

const Login = () => {
    return (
        <Form autoComplete="off">
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