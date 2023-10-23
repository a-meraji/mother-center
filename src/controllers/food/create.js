import { persianDateDigitall } from "@/libs/converters";
import pb from "@/libs/pocketbase";
import { addFood } from "@/redux/ducks/foods";
import {
  addLoading,
  notifeColors,
  reduceLoading,
  setNotife,
} from "@/redux/ducks/layoutSlice";

export async function createFood({ dispatch, food }) {
  const collectionName = "food";
  dispatch(addLoading());
  try {
    const data = {
      name: food.name,
      cost: food.cost,
      buyPrice: food.buyPrice,
      amount: food.amount,
    };
    const record = await pb.collection(collectionName).create(data);
    const recordOutcome = await pb
      .collection("outcome")
      .create({
        subject: food.name,
        cost: food.cost,
        amount: food.amount,
        perCase: food.buyPrice,
        discount: food.discount,
        persianDate: persianDateDigitall(new Date()),
      });

    dispatch(
      addFood({
        id: record.id,
        name: record.name,
        cost: record.cost,
        amount: record.amount,
        buyPrice: record.buyPrice,
      })
    );
    dispatch(reduceLoading());
    dispatch(
      setNotife({
        message: `سیستم ${food.name} ثبت شد!`,
        color: notifeColors.success,
      })
    );
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
