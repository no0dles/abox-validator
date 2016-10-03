import {builder} from "../validator.builder";

export function Length(min?: number, max?: number, message?: string) {
  return builder({
    message: message || '{field} has invalid length',
    validate: (data: string) => {
      if(data === null || data === undefined) {
        return true;
      }

      if(min !== null && min !== undefined && data.length < min) {
        return false;
      }

      if(max !== null && max !== undefined && data.length > max) {
        return false;
      }

      return true;
    }
  });
}
