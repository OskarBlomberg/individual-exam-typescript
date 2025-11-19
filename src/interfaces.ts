export interface bookingInputs {
  when: string;
  lanes: number;
  people: number;
  shoes: number[];
}

export interface booking extends bookingInputs {
  price: number; // räknas ut på serversidan
  id: string; // genereras på serversidan
  active: boolean; // anges på serversidan.
}

export interface bookingState {
  bookings: booking[];
  isLoading: boolean;
  error: string | null;
  isSuccess: boolean;
  resetIsSuccess: () => void;
  resetError: () => void;
  fetchBookings: (newBooking: bookingInputs) => Promise<void>;
}
