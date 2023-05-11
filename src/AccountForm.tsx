import { FormWrapper } from "./FormWrapper";

export function AccountForm() {
    return (
        <FormWrapper title="Account details">
            <label>Email</label>
            <input required autoFocus type="email" />
            <label>Password</label>
            <input required type="password" />
        </FormWrapper>
    );
}
