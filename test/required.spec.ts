import {Action} from "abox";
import {testValue} from "./helper";
import {Required} from "../index";

@Action({ name: "required.action" })
class RequiredAction {

  @Required()
  public data: any;

  constructor(data: any) {
    this.data = data;
  }
}


describe('requried.validator', () => {
  it('should accept true', (done) => {
    testValue(new RequiredAction(true), false, done);
  });

  it('should accept false', (done) => {
    testValue(new RequiredAction(false), false, done);
  });

  it('should not accept null', (done) => {
    testValue(new RequiredAction(null), true, done);
  });

  it('should not accept undefined', (done) => {
    testValue(new RequiredAction(undefined), true, done);
  });

  it('should accept string', (done) => {
    testValue(new RequiredAction("lorem"), false, done);
  });

  it('should accept number', (done) => {
    testValue(new RequiredAction(1), false, done);
  });

  it('should accept date', (done) => {
    testValue(new RequiredAction(new Date()), false, done);
  });

  it('should accept object', (done) => {
    testValue(new RequiredAction({}), false, done);
  });
});
