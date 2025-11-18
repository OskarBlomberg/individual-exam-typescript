import { create } from "zustand";
import axios from "axios";

interface bookingInputs {
  when: string;
  lanes: number;
  people: number;
  shoes: number[];
}

interface booking extends bookingInputs {
  price: number; // räknas ut på serversidan
  id: string; // genereras på serversidan
  active: boolean; // anges på serversidan.
}

interface bookingState {
  fishies: any;
  bookings: booking[];
  isLoading: boolean;
  error: string | null;
  fetchBookings: (newBooking: bookingInputs) => Promise<void>;
}

export const useBookingStore = create<bookingState>((set) => ({
  fishies: {},
  bookings: [],
  isLoading: false,
  error: null,
  addBooking: (newConfirmation: booking) =>
    set((state) => ({ bookings: [...state.bookings, newConfirmation] })),
  fetchBookings: async (newBooking: bookingInputs) => {
    const settings = {
      headers: {
        "x-api-key": import.meta.env.VITE_X_API_KEY,
        "Content-Type": "application/json",
      },
    };
    const response = await axios.post(
      "https://731xy9c2ak.execute-api.eu-north-1.amazonaws.com/booking",
      newBooking,
      settings
    );
    set({ fishies: await response.data });
    console.log(response.data);
    /* try {
      const response = await axios.post(
        "https://731xy9c2ak.execute-api.eu-north-1.amazonaws.com/booking",
        newBooking,
        settings
      );
      
    } catch (error) {} */
  },
}));

/* 
const createItem = async (newItem) => {
    try {
      const response = await axios.post(url, newItem);
      setData((prevData) => [...(prevData || []), response.data]);
    } catch (err) {
      setError(err.message);
    }
  };
*/

// landa på laddnignssidan i två sekunder
// skickas vidare till booking
// Antal skor och deras värde sparas i store i en array
// när man trycker på strike verifieras formuläret
// Error handling som modal
// Om den går igenom skickas man till confirmation
// svaret sparas i store i en array

// genomförda bokningar - array med server responses
// fetchhantering loading error data
// Antalet iklickade skor och deras storlekar array med numbers
