import PocketBase from "pocketbase"

// const pb = new PocketBase("http://127.0.0.1:8090");
// export default pb;

const url = 'https://mycenter.pockethost.io/'
const pb = new PocketBase(url)
export default pb
