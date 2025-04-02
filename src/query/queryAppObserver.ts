import { QueryClient, QueryKey } from "@tanstack/react-query";
import { AppQueryListenersType } from "./types";

const QueryAppObserver = () => {
  const listeners = new Map<
    AppQueryListenersType["key"],
    {
      action: AppQueryListenersType["action"];
      client: QueryClient;
    }
  >(); // Map end
  console.log("Subscribtion has been called");

  function subscribe<P = unknown>(
    key: QueryKey,
    client: QueryClient,
    action?: AppQueryListenersType<P>["action"]
  ) {
    if (action) {
      listeners.set(key, {
        action: action as AppQueryListenersType["action"],
        client,
      }); // subscribe to latest action
    }

    return { unsubscribe };
  }

  function unsubscribe(key: QueryKey) {
    listeners.delete(key);
  }

  return {
    subscribe,
    listeners,
  };
};

export default QueryAppObserver();
