import {Action} from "abox";
import {Number} from "../index";
import {testValue} from "./helper";

@Action({ name: "number.action" })
class NumberAction {

  @Number()
  public count: number;

  constructor(count: any) {
    this.count = count;
  }
}


describe('number.validator', () => {
  it('should not accept true', (done) => {
    testValue(new NumberAction(true), true, done);
  });

  it('should not accept false', (done) => {
    testValue(new NumberAction(false), true, done);
  });

  it('should accept null', (done) => {
    testValue(new NumberAction(null), false, done);
  });

  it('should accept undefined', (done) => {
    testValue(new NumberAction(undefined), false, done);
  });

  it('should not accept string', (done) => {
    testValue(new NumberAction("lorem"), true, done);
  });

  it('should accept integer', (done) => {
    testValue(new NumberAction(1), false, done);
  });

  it('should accept double', (done) => {
    testValue(new NumberAction(3.14), false, done);
  });

  it('should accept NaN', (done) => {
    testValue(new NumberAction(NaN), false, done);
  });

  it('should not accept date', (done) => {
    testValue(new NumberAction(new Date()), true, done);
  });

  it('should not accept object', (done) => {
    testValue(new NumberAction({}), true, done);
  });
});
