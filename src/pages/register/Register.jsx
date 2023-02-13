import { Form, Label } from "./Register.styled"

const Register = () => {
    return (
        <Form autocomplete="off">
            <Label >
                Username
                <input type="text" name="name" />
            </Label>
            <Label >
                Email
                <input type="email" name="email" />
            </Label>
            <Label >
                Password
                <input type="password" name="password" />
            </Label>
            <button type="submit">Register</button>
        </Form>
    )
}

export default Register