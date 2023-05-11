import { FormWrapper } from "./FormWrapper";

type UserData = {
    firstName: string;
    lastName: string;
    age: string;
};

type UserFormProps = UserData & {
    updateFields: (fields: Partial<UserData>) => void;
};

export function UserForm({
    firstName,
    lastName,
    age,
    updateFields,
}: UserFormProps) {
    return (
        <FormWrapper title="User Details">
            <label>First name</label>
            <input
                autoFocus
                required
                value={firstName}
                onChange={(e) => updateFields({ firstName: e.target.value })}
            />
            <label>Last name</label>
            <input
                required
                value={lastName}
                onChange={(e) => updateFields({ lastName: e.target.value })}
            />
            <label>Age</label>
            <input
                required
                type="number"
                min={1}
                value={age}
                onChange={(e) => updateFields({ age: e.target.value })}
            />
        </FormWrapper>
    );
}
