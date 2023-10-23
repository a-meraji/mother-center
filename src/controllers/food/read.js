import pb from "@/libs/pocketbase";
import { setFoods } from "@/redux/ducks/foods";
import {
  addLoading,
  notifeColors,
  reduceLoading,
  setNotife,
} from "@/redux/ducks/layoutSlice";

export async function readFoodList({ dispatch }) {
  const collectionName = "food";
  dispatch(addLoading());
  try {
    const resultList = await pb.collection(collectionName).getFullList();
    dispatch(
      setFoods( resultList.map((res) => ({
          id:res.id,
          name: res.name,
          cost: res.cost,
          amount: res.amount,
          buyPrice:res.buyPrice,
        })),
      )
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
