import {builder} from "../validator.builder";

export function Required(message?: string) {
  return builder({
    message: message || '{field} is required',
    validate: (data: any) => {
      return data !== null && data !== undefined;
    }
  });
}
