import { useReducer, Reducer, useMemo } from "react";
import axios from "axios";

interface State<T> {
  loading: boolean;
  error: boolean;
  data: T | null;
}

type Start = { type: "start" };
type Finish<T> = { type: "finish"; data: State<T>["data"] };
type Error = { type: "error" };

type Action<T> = Start | Finish<T> | Error;

const initialState: State<any> = { loading: false, error: false, data: null };

const reducer = <T>(state: State<T>, action: Action<T>) => {
  switch (action.type) {
    case "start":
      return { ...initialState, loading: true };
    case "finish":
      return { ...state, loading: false, data: action.data };
    case "error":
      return { ...state, loading: false, error: true };
    default:
      return { ...state, loading: false, error: true };
  }
};

export const useHandlePromise = <T = any, Args = any>(
  promise: (...args: Args[]) => Promise<T>
): [State<T>, (...args: Args[]) => Promise<T>] => {
  const [state, dispatch] = useReducer<Reducer<State<T>, Action<T>>>(
    reducer,
    initialState
  );

  // dispatch start to the reducer, once promise either returns or errors then dispatch corresponding action
  const fetch = (...args: Args[]): Promise<T> => {
    dispatch({ type: "start" });
    return promise(...args)
      .then(data => {
        dispatch({ type: "finish", data });
        return data;
      })
      .catch(e => {
        dispatch({ type: "error" });
        throw e;
      });
  };
  return [state, fetch];
};

// memoize the value using the given arguments in the dependency array
export const usePromise = <T, Args>(
  promise: (...args: Args[]) => Promise<T>,
  args: Args[]
) => {
  const [state, fetch] = useHandlePromise(promise);

  useMemo(() => fetch(...args), [...args]);

  return state;
};

export default axios.create({
  baseURL: "http://localhost:3001"
});
