import {IValidatorFunction} from "./validator.function.interface";
import {IValidatorMetadata} from "./validator.metadata.interface";
import {VALIDATOR_METADATA_KEY} from "./consts";
import {Reflection} from "./metadata.reflection";

export function builder(validatorFn: IValidatorFunction<any>) {
  return function(target: any, propertyKey: string | symbol) {

    let metadata = Reflection.getMetadata<IValidatorMetadata>(VALIDATOR_METADATA_KEY, target);
    if(!metadata) {
      metadata = <IValidatorMetadata>{
        fields: {}
      };
    }

    if(!metadata.fields[propertyKey]) {
      metadata.fields[propertyKey] = [];
    }

    metadata.fields[propertyKey].push(validatorFn);

    Reflection.setMetadata(VALIDATOR_METADATA_KEY, target, metadata)
  }
}
