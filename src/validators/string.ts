import {builder} from "../validator.builder";

export function String(message?: string) {
  return builder({
    message: message || '{field} is not a valid string',
    validate: (data: string) => {
      return typeof data === "string" || data === null || data === undefined;
    }
  });
}
