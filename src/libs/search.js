import pb from "@/libs/pocketbase";
import { notifeColors, setNotife } from "@/redux/ducks/layoutSlice";

export async function search({ collectionName, filter, dispatch }) {
  try {
    const resultList = await pb.collection(collectionName).getList(1, 100, {
      filter,  sort: '-created',
    });
    const { totalPages, totalItems } = resultList;
    if (totalPages > 1) {
      const totalResultList = await pb
        .collection(collectionName)
        .getList(1, totalItems, {
          filter,
        });
      return totalResultList;
    } else {
      return resultList;
    }
  } catch (e) {
    console.log(e);
    dispatch(
      setNotife({
        message: "خطا در برقراری ارتباط! مجددا تلاش کنید",
        color: notifeColors.error,
      })
    );
    return false;
  }
}
