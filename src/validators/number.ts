import {builder} from "../validator.builder";

export function Number(message?: string) {
  return builder({
    message: message || '{field} is not a valid number',
    validate: (data: string) => {
      return typeof data === "number" || data === null || data === undefined;
    }
  });
}
