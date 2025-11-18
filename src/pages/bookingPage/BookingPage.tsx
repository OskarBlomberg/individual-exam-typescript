import "./bookingPage.scss";
import { Logotype } from "../../components/logotype/Logotype";
import { ShoeInput } from "../../components/shoeInput/ShoeInput";
import { useBookingStore } from "../../stores/bookingStore";

export const BookingPage = () => {
  const fetchBooking = useBookingStore((state) => state.fetchBookings);

  const handleSubmit = (formDataObj: any) => {
    const date = formDataObj.get("date");
    const time = formDataObj.get("time");
    const booking = {
      when: date + "T" + time,
      people: Number(formDataObj.get("people")),
      lanes: Number(formDataObj.get("lanes")),
      shoes: formDataObj.getAll("shoes").map(Number),
    };

    fetchBooking(booking);
  };

  return (
    <main className="booking">
      <section className="booking__logo">
        <Logotype>
          <h1 className="booking__logo__heading">booking</h1>
          <></>
        </Logotype>
      </section>

      <form className="booking__form" action={handleSubmit}>
        <fieldset className="booking__form__subsection booking__form__subsection--general">
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

        <fieldset className="booking__form__subsection booking__form__subsection--shoes">
          <legend className="booking__form__subsection__title ">shoes</legend>
          <ShoeInput num={1} />
          <ShoeInput num={2} />
          <ShoeInput num={3} />
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};
