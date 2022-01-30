import { HttpException } from "@nestjs/common"
import axios from "axios"

export const handleAxiosError = (err: unknown) => {
  let error = { message: 'Unknown error' }
  let status = 400
  if(axios.isAxiosError(err)) {
    error.message = err.response.statusText
    status = err.response.status
  }
  throw new HttpException(error, status)
}