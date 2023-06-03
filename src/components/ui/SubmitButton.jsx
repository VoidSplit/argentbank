import "./styles/SubmitButton.css";

export default function SubmitButton({label, handleFunction}) {
  /*const onclickevent = () => {
    console.log(store.getState())
    callApi("LOGIN", "test")
  }*/
  return (
    <div className="sign-in-button" onClick={handleFunction}>{label}</div>
  );
};