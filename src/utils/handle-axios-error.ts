import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util'
import axios from 'axios'

export const handleAxiosError = (err: unknown) => {
  let status = 400
  let message = 'Unknown error'
  if (axios.isAxiosError(err)) {
    message = err.response.statusText
    status = err.response.status
  }
  throw new HttpErrorByCode[status](message)
}
