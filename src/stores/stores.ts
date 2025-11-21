import { create } from "zustand";
import axios from "axios";
import {
  type bookingInputs,
  type bookingState,
  type shoeState,
} from "../interfaces";

export const useBookingStore = create<bookingState>((set) => ({
  bookings: [],
  isLoading: false,
  error: null,
  isSuccess: false,
  setErrorMsg: (msg: string) => set({ error: msg }),
  resetIsSuccess: () => set({ isSuccess: false }),
  resetError: () => set({ error: null }),

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
        bookings: [
          ...state.bookings,
          response.data.bookingDetails || response.data.data.bookingDetails,
        ],
      }));
      set({ isSuccess: true });
    } catch (err: any) {
      console.error(err.message);
      set({
        error: "Something went wrong with your request. Please try again.",
      });
    } finally {
      set({ isLoading: false });
    }
  },
}));

export const useShoeStore = create<shoeState>()((set, get) => ({
  shoes: [],
  addShoes() {
    set((state) => ({ shoes: [...state.shoes, ""] }));
  },
  removeShoes(index: number) {
    set((state) => ({ shoes: state.shoes.filter((_, i) => i !== index) }));
  },
  updateShoe(index: number, size: string) {
    const updatedShoes = [...get().shoes];
    updatedShoes[index] = size;
    set(() => ({ shoes: updatedShoes }));
  },
  emptyShoeStore() {
    set({ shoes: [] });
  },
}));
