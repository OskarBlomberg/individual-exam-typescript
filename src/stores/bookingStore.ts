import { create } from "zustand";
import axios from "axios";
import {
  type bookingInputs,
  type booking,
  type bookingState,
} from "../interfaces";

export const useBookingStore = create<bookingState>((set, get) => ({
  bookings: [],
  isLoading: false,
  error: null,
  isSuccess: false,
  resetIsSuccess: () => set({ isSuccess: false }),

  fetchBookings: async (newBooking: bookingInputs) => {
    set({ isLoading: true });
    set({ error: null });
    set({ isSuccess: false });

    const settings = {
      headers: {
        "x-api-key": import.meta.env.VITE_X_API_KEY,
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await axios.post(
        "https://731xy9c2ak.execute-api.eu-north-1.amazonaws.com/booking",
        newBooking,
        settings
      );
      set((state) => ({
        bookings: [...state.bookings, response.data.bookingDetails],
      }));
      set({ isSuccess: true });
    } catch (err: any) {
      set({ error: err.message });
    } finally {
      set({ isLoading: false });
    }
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
