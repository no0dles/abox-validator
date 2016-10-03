import {IValidatorFunction} from "./validator.function.interface";

export interface IValidatorMetadata {
  fields: { [field: string]: IValidatorFunction<any>[] }
}
