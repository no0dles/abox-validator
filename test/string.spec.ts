import {Action} from "abox";
import {String} from "../index";
import {testValue} from "./helper";

@Action({ name: "string.action" })
class StringAction {

  @String()
  public message: boolean;

  constructor(message: any) {
    this.message = message;
  }
}


describe('string.validator', () => {
  it('should not accept true', (done) => {
    testValue(new StringAction(true), true, done);
  });

  it('should not accept false', (done) => {
    testValue(new StringAction(false), true, done);
  });

  it('should accept null', (done) => {
    testValue(new StringAction(null), false, done);
  });

  it('should accept undefined', (done) => {
    testValue(new StringAction(undefined), false, done);
  });

  it('should accept string', (done) => {
    testValue(new StringAction("lorem"), false, done);
  });

  it('should not accept number', (done) => {
    testValue(new StringAction(1), true, done);
  });

  it('should not accept date', (done) => {
    testValue(new StringAction(new Date()), true, done);
  });

  it('should not accept object', (done) => {
    testValue(new StringAction({}), true, done);
  });
});
