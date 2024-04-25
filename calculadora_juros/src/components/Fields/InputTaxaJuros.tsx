import styles from "./FormStyle.module.css";

interface InputProps {
  text: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputTaxaJuros({ text, value, onChange }: InputProps) {
  return (
    <div className={styles.form_group}>
      <label className={styles.form_group_label} htmlFor="taxaJuros">
        {text}
      </label>
      <input
        className={styles.form_group_input}
        value={value}
        onChange={onChange}
        type="text"
        required
      />
    </div>
  );
}
