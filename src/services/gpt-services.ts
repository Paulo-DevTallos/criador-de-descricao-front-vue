import { ApiService } from "./api";

export default {
  createDescription: (content: object) => {
    console.log(content)
    return ApiService.post('/create/description', content)
  }
}
