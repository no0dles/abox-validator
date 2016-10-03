import {Api, Action} from "abox";
import {module} from "../index";

@Action({ name: "non.validation.action" })
class NonValidation {
  public message: string;
}

describe('module', () => {
  it('should do nothing on actions without validations', (done) => {
    const api = new Api();

    api.use(module);

    api
      .emit(new NonValidation())
      .subscribe(res => {
        done(new Error("should not be called"));
      }, err => {
        done(err);
      }, () => {
        done();
      });
  });
});
