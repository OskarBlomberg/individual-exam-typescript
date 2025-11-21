import { Logotype } from "../../components/logotype/Logotype";
import { useBookingStore } from "../../stores/stores";
import "../bookingPage/bookingPage.scss";
import "./confirmationPage.scss";
import { useState, type JSX } from "react";
import { type booking } from "../../interfaces";
import Confetti from "../../components/confetti/Confetti";

export const ConfirmationPage = () => {
  const bookingsArr: booking[] = useBookingStore((state) => state.bookings);

  const [showConfetti, setShowConfetti] = useState<boolean>(false);

  const addCelebration = () => setShowConfetti(true);

  const toRender: JSX.Element | JSX.Element[] =
    bookingsArr.length < 1 ? (
      <p>No current bookings</p>
    ) : (
      bookingsArr.map((booking) => {
        const { when, people, lanes, price, bookingId } = booking;
        return (
          <article className="confirmed-booking" key={bookingId}>
            <label
              className="confirmed-booking__label confirmed-booking__label--when"
              htmlFor="when"
            >
              when
            </label>
            <input
              className="confirmed-booking__input confirmed-booking__input--when"
              type="text"
              name="when"
              id="when"
              value={when.split("T").join(", ")}
              readOnly
            />

            <label
              className="confirmed-booking__label confirmed-booking__label--who"
              htmlFor="who"
            >
              who
            </label>
            <input
              className="confirmed-booking__input confirmed-booking__input--who"
              type="text"
              name="who"
              id="who"
              value={`${people} ${people > 1 ? "people" : "person"}`}
              readOnly
            />

            <label
              className="confirmed-booking__label confirmed-booking__label--lanesBooked"
              htmlFor="lanesBooked"
            >
              lanes
            </label>
            <input
              className="confirmed-booking__input confirmed-booking__input--lanesBooked"
              type="text"
              name="lanesBooked"
              id="lanesBooked"
              value={`${lanes} ${lanes > 1 ? "lanes" : "lane"}`}
              readOnly
            />
            <label
              className="confirmed-booking__label confirmed-booking__label--booking-id"
              htmlFor="booking-id"
            >
              booking number
            </label>
            <input
              className="confirmed-booking__input confirmed-booking__input--booking-id"
              type="text"
              name="booking-id"
              id="booking-id"
              value={bookingId}
              readOnly
            />

            <div className="confirmed-booking__input price-total">
              <span className="price-total__text">total</span>
              <span className="price-total__price">{price}sek</span>
            </div>
          </article>
        );
      })
    );

  return (
    <>
      {showConfetti && (
        <Confetti onConfettiComplete={() => setShowConfetti(false)} />
      )}
      <main className="confirmation">
        <section className="confirmation__logo">
          <Logotype>
            <h1 className="confirmation__logo__heading">confirmation</h1>
            <></>
          </Logotype>
        </section>
        <form className="confirmation__form">
          <fieldset className="confirmation__form__subsection">
            <legend className="confirmation__form__subsection__title ">
              see you soon!
            </legend>
          </fieldset>
          {toRender}
          {bookingsArr.length > 0 && (
            <button
              type="button"
              className="text-btn text-btn--fullwidth"
              onClick={addCelebration}
            >
              Sweet, let's go!
            </button>
          )}
        </form>
        <div className="revealer"></div>
      </main>
    </>
  );
};
