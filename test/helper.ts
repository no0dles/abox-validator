import {module} from "../index";
import {Api} from "abox";

export const testValue = (action: any, expectError: boolean, done: Function) => {
  const api = new Api();

  api.use(module);

  api
    .emit(action)
    .subscribe(null, err => {
      if(!expectError) {
        done(err);
      } else {
        done();
      }
    }, () => {
      if(expectError) {
        done(new Error("expected error"));
      } else {
        done();
      }
    });
};
