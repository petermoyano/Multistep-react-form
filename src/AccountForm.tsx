import { FormWrapper } from "./FormWrapper";

type AccountData = {
    mail: string;
    password: string;
};

type AccountFormProps = AccountData & {
    updateFields: (fields: Partial<AccountData>) => void;
};

export function AccountForm({
    mail,
    password,
    updateFields,
}: AccountFormProps) {
    return (
        <FormWrapper title="Account details">
            <label>Email</label>
            <input
                required
                autoFocus
                type="email"
                value={mail}
                onChange={(e) => updateFields({ mail: e.target.value })}
            />
            <label>Password</label>
            <input
                required
                type="password"
                value={password}
                onChange={(e) => updateFields({ password: e.target.value })}
            />
        </FormWrapper>
    );
}
