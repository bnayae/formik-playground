import { type } from "os";

const timeout = (ms: number) => new Promise(res => setTimeout(res, ms));

export default timeout;
