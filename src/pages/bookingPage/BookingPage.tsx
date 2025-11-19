import "./bookingPage.scss";
import { Logotype } from "../../components/logotype/Logotype";
import { ShoeInput } from "../../components/shoeInput/ShoeInput";
import { useBookingStore } from "../../stores/bookingStore";
import { useNavigate, type NavigateFunction } from "react-router-dom";
import { type bookingInputs } from "../../interfaces";
import { useEffect } from "react";

export const BookingPage = () => {
  const {
    fetchBookings,
    isLoading,
    error,
    isSuccess,
    resetIsSuccess,
    resetError,
  } = useBookingStore();

  const navigate: NavigateFunction = useNavigate();

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    const formDataObj = new FormData(event.target as HTMLFormElement);
    event.preventDefault();
    const date = formDataObj.get("date");
    const time = formDataObj.get("time");
    const booking: bookingInputs = {
      when: date + "T" + time,
      people: Number(formDataObj.get("people")),
      lanes: Number(formDataObj.get("lanes")),
      shoes: formDataObj.getAll("shoes").map(Number),
    };

    await fetchBookings(booking);
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/confirmation");
      resetIsSuccess();
    }
  }, [isSuccess]);

  const stopInside = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };

  const errorSection = (
    <div className="error-section" onClick={resetError}>
      <aside
        className="error-section__modal"
        aria-live="assertive"
        onClick={stopInside}
      >
        <h2 className="error-section__modal__header">Error</h2>
        <p className="error-section__modal__text">
          Something went wrong with your request. Please try again.
        </p>
        <button className="text-btn" onClick={resetError}>
          Close
        </button>
      </aside>
    </div>
  );

  return (
    <main className="booking">
      <section className="booking__logo">
        <Logotype>
          <h1 className="booking__logo__heading">booking</h1>
          <></>
        </Logotype>
      </section>

      <form
        className="booking__form"
        onSubmit={handleSubmit}
        style={
          isLoading || error ? { opacity: 0.6, pointerEvents: "none" } : {}
        }
      >
        <fieldset
          className="booking__form__subsection booking__form__subsection--general"
          disabled={isLoading || error === typeof "string"}
        >
          <legend className="booking__form__subsection__title ">
            when, what & who
          </legend>

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
            min="11:00"
            max="23:00"
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
            min={1}
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
            min={1}
            required
            aria-required
          />
        </fieldset>

        <fieldset
          className="booking__form__subsection booking__form__subsection--shoes"
          disabled={isLoading || error === typeof "string"}
        >
          <legend className="booking__form__subsection__title ">shoes</legend>
          <ShoeInput num={1} />
          <ShoeInput num={2} />
          <ShoeInput num={3} />
          <button
            className="subsection__add-btn"
            type="button"
            title="Add shoes"
            disabled={isLoading || error === typeof "string"}
          >
            +
          </button>
        </fieldset>
        <button
          className="text-btn text-btn--fullwidth"
          type="submit"
          disabled={isLoading || error === typeof "string"}
        >
          strIIIIIike!
        </button>
      </form>
      {error && errorSection}
      {/* isError && modalen */}
    </main>
  );
};
