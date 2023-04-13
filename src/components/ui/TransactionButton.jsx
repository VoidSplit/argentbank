import "./styles/TransactionButton.css";

export default function TransactionButton({label}) {
  return (
    <button className="transaction-button">{label}</button>
  );
};