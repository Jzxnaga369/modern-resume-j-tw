"use client"; // Needed for client-side state management

import { Provider } from "react-redux";
import { store } from "./store/store";

export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}

export default Providers