import pb from '@/libs/pocketbase';

export function fetchTransactions(id) {
  return pb.collection('transactions').getList(1, 50, {
    filter: `createdBy = "${id}"`,
});
}
