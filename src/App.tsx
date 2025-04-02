import { QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "react-redux";
import { store } from "./store";
import StatePage from "./pages/state";
import { queryClient } from "./query";
import SyncQueryWithRedux from "./SyncQueryWithRedux";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <SyncQueryWithRedux>
          <StatePage/>
        </SyncQueryWithRedux>
      </Provider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
