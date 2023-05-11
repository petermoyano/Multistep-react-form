import { FormWrapper } from "./FormWrapper";

export function AddressForm() {
    return (
        <FormWrapper title="Address">
            <label>Street</label>
            <input autoFocus required />
            <label>City</label>
            <input required />
            <label>State</label>
            <input required />
            <label>Zip</label>
            <input required />
        </FormWrapper>
    );
}
