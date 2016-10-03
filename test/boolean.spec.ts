import {Action} from "abox";
import {Boolean} from "../index";
import {testValue} from "./helper";

@Action({ name: "boolean.action" })
class BooleanAction {

  @Boolean()
  public flag: boolean;

  constructor(flag: any) {
    this.flag = flag;
  }
}


describe('boolean.validator', () => {
  it('should accept true', (done) => {
    testValue(new BooleanAction(true), false, done);
  });

  it('should accept false', (done) => {
    testValue(new BooleanAction(false), false, done);
  });

  it('should accept null', (done) => {
    testValue(new BooleanAction(null), false, done);
  });

  it('should accept undefined', (done) => {
    testValue(new BooleanAction(undefined), false, done);
  });

  it('should not accept string', (done) => {
    testValue(new BooleanAction("true"), true, done);
  });

  it('should not accept number', (done) => {
    testValue(new BooleanAction(1), true, done);
  });

  it('should not accept date', (done) => {
    testValue(new BooleanAction(new Date()), true, done);
  });

  it('should not accept object', (done) => {
    testValue(new BooleanAction({}), true, done);
  });
});
