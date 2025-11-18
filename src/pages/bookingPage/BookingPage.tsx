import "./bookingPage.scss";
import { Logotype } from "../../components/logotype/Logotype";

export const BookingPage = () => {
  return (
    <main className="booking">
      <section className="booking__logo">
        <Logotype>
          <h1 className="booking__logo__heading">booking</h1>
          <></>
        </Logotype>
      </section>

      <form className="booking__form" action="handleSubmit">
        <fieldset className="booking__form__subsection booking__form__subsection--general">
          {
            <legend className="booking__form__subsection__title ">
              when, what & who
            </legend>
          }

          <label
            className="subsection__label subsection__label--date"
            htmlFor="date"
          >
            date
          </label>
          <input
            className="subsection__input subsection__input--date"
            type="date"
            name="date"
            id="date"
            required
            aria-required
          />

          <label
            className="subsection__label subsection__label--time"
            htmlFor="time"
          >
            time
          </label>
          <input
            className="subsection__input subsection__input--time"
            type="time"
            name="time"
            id="time"
            required
            aria-required
          />

          <label
            className="subsection__label subsection__label--people"
            htmlFor="people"
          >
            number of awesome bowlers
          </label>
          <input
            className="subsection__input subsection__input--people"
            type="number"
            name="people"
            id="people"
            required
            aria-required
          />

          <label
            className="subsection__label subsection__label--lanes"
            htmlFor="lanes"
          >
            number of lanes
          </label>
          <input
            className="subsection__input subsection__input--lanes"
            type="number"
            name="lanes"
            id="lanes"
            required
            aria-required
          />
        </fieldset>
      </form>
    </main>
  );
};
