import {builder} from "../validator.builder";

export function Pattern(pattern: RegExp, message?: string) {
  return builder({
    message: message || '{field} is not in a valid format',
    validate: (data: string) => {
      if(data === null || data === undefined)
        return true;

      return pattern.test(data);
    }
  });
}
