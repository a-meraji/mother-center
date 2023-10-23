import { setTransactions } from "@/redux/ducks/transactions";
import { call, put } from "redux-saga/effects";
import { addLoading, reduceLoading, setNotife } from "../../ducks/layoutSlice";
import { fetchTransactions } from "../requests/transactions";

export function* handleTransitions(action) {
  try {
    if (action.payload.id === undefined) {
      throw new Error("id is undefined");
    }
    yield put(addLoading());
    const { items } = yield call(fetchTransactions, action.payload.id);
    yield put(
      setTransactions(
        items.map((item) => ({
          persianDate: item.persianDate,
          cost: item.cost,
          transactionId: item.transactionId,
          createdBy: item.createdBy,
          product: item.product,
          subscribeDate: item.subscribeDate,
          details: item.details,
        }))
      )
    );
    yield put(reduceLoading());
  } catch (error) {
    yield put(reduceLoading());
    console.log(error);
    yield put(
      setNotife({
        message: `can't find any transitions with your given id "${id}"`,
        color: "warning",
      })
    );
  }
}
