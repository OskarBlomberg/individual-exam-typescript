import "./shoeInput.scss";

interface shoeProps {
  num: number;
}

export const ShoeInput = ({ num }: shoeProps) => {
  return (
    <article className="shoe-input">
      <label
        className="subsection__label subsection__label--shoes"
        htmlFor="shoes"
      >
        shoe size / person {num}
      </label>
      <input
        className="subsection__input subsection__input--shoes"
        type="number"
        name="shoes"
        id="shoes"
        min={20}
        max={48}
        placeholder="39"
        required
        aria-required
      />
      <button className="remove-shoes-btn">-</button>
    </article>
  );
};
