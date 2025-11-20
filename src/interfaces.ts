export interface bookingInputs {
  when: string;
  lanes: number;
  people: number;
  shoes: number[];
}

export interface booking extends bookingInputs {
  price: number; // räknas ut på serversidan
  bookingId: string; // genereras på serversidan
  active: boolean; // anges på serversidan.
}

export interface bookingState {
  bookings: booking[];
  isLoading: boolean;
  error: string | null;
  isSuccess: boolean;
  setErrorMsg: (msg: string) => void;
  resetIsSuccess: () => void;
  resetError: () => void;
  fetchBookings: (newBooking: bookingInputs) => Promise<void>;
}

export interface shoeState {
  shoes: string[];
  addShoes: (size: string) => void;
}
