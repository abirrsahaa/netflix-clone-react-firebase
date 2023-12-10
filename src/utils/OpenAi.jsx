import OpenAI from "openai";
import { open_ai_key } from "./Constants";

const openai = new OpenAI({
  apiKey: open_ai_key,
  dangerouslyAllowBrowser: true,
});

export default openai;
