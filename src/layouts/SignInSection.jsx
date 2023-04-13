import "./styles/SignInSection.css";

import Checkbox from "../components/ui/Checkbox";
import PasswordInput from "../components/ui/PasswordInput";
import SubmitButton from "../components/ui/SubmitButton";
import TextInput from "../components/ui/TextInput";

export default function SignInSection() {
  return (
    <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
            <TextInput label={"Username"} />
            <PasswordInput label={"Password"} />
            <Checkbox label={"Remember me"} />
            <SubmitButton label={"Sign In"} />
        </form>
    </section>
  );
};