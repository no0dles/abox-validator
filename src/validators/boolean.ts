import {builder} from "../validator.builder";

export function Boolean(message?: string) {
  return builder({
    message: message || '{field} is not a valid boolean',
    validate: (data: string) => {
      return typeof data === "boolean" || data === null || data === undefined;
    }
  });
}
