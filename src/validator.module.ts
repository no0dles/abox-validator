import {VALIDATOR_METADATA_KEY} from "./consts";
import {IValidatorMetadata} from "./validator.metadata.interface";
import {Api} from "abox";
import {Reflection} from "./metadata.reflection";

export var module = new Api();

module
  .on("**")
  .handle((context, data) => {
    let validatorMetadata = Reflection.getMetadata<IValidatorMetadata>(VALIDATOR_METADATA_KEY, data);
    if(!validatorMetadata) {
      return context.done();
    }

    for(let field in validatorMetadata.fields) {
      for(let validator of validatorMetadata.fields[field]) {

        if(!validator.validate((<any>data)[field])) {
          let message = validator.message || "";

          message = message.replace("{field}", field);
          message = message.replace("{value}", (<any>data)[field]);

          context.done(new Error(message));

          return;
        }
      }
    }

    context.done();
  });
