import type { RouteObject } from "react-router-dom";
import { Layout } from "./Layout";
import { LoadingPage } from "../pages/loadingPage/LoadingPage";
import { BookingPage } from "../pages/bookingPage/BookingPage";
import { ConfirmationPage } from "../pages/confirmationPage/ConfirmationPage";
import { ErrorPage } from "../pages/errorPage/ErrorPage";

export const AppRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LoadingPage />,
      },
      {
        path: "/booking",
        element: <BookingPage />,
      },
      {
        path: "/confirmation",
        element: <ConfirmationPage />,
      },
      {
        path: "/*",
        element: <ErrorPage />,
      },
    ],
  },
];
