import pb from "@/libs/pocketbase";
import { changeFoods } from "@/redux/ducks/foods";
import {
  addLoading,
  notifeColors,
  reduceLoading,
  setNotife,
} from "@/redux/ducks/layoutSlice";

export async function updateFood({ dispatch, data }) {
  const collectionName = "food";
  dispatch(addLoading());
  try {
    const res = await pb.collection(collectionName).update(data.id, data);
    dispatch(
      changeFoods({
        name: res.name,
        id: res.id,
        cost: res.cost,
        amount: res.amount,
        buyPrice:res.buyPrice
      })
    );
    dispatch(reduceLoading());
    return true;
  } catch (e) {
    console.log(e);
    dispatch(
      setNotife({
        message: "خطا در برقراری ارتباط! مجددا تلاش کنید",
        color: notifeColors.error,
      })
    );
    dispatch(reduceLoading());
    return false;
  }
}
