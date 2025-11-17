import { create } from "zustand";

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
  bookings: booking[];
  isLoading: boolean;
  error: string | null;
  fetchBookings: () => Promise<void>;
}

export const useBookingStore = create<bookingState>((set) => ({
  bookings: [],
  isLoading: false,
  error: null,
  fetchBookings: async () => {},
}));
