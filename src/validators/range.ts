import {builder} from "../validator.builder";

export function Range(min?: number, max?: number, message?: string) {
  return builder({
    message: message || '{field} is not in range',
    validate: (data: number) => {
      if(data === null || data === undefined) {
        return true;
      }

      if(min !== null && min !== undefined && data < min) {
        return false;
      }

      if(max !== null && max !== undefined && data > max) {
        return false;
      }

      return true;
    }
  });
}
