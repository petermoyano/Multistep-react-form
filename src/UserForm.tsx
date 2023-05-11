import { FormWrapper } from "./FormWrapper";

export function UserForm() {
    return (
        <FormWrapper title="User Details">
            <label>First name</label>
            <input autoFocus required />
            <label>Last name</label>
            <input required />
            <label>Age</label>
            <input required type="number" min={1} />
        </FormWrapper>
    );
}
