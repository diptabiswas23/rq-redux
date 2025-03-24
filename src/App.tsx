import { QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import HomePage from "./pages/home";
import { queryClient } from "./utils";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <HomePage />
      </Provider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
