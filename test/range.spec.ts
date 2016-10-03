import {Action} from "abox";
import {Range} from "../index";
import {testValue} from "./helper";

const minimum = 4;
const maximum = 11;

@Action({ name: "number.action" })
class NumberAction {

  @Range(minimum)
  public minCount: number;

  @Range(null, maximum)
  public maxCount: number;

  @Range(minimum, maximum)
  public minMaxCount: number;

  constructor(minCount: number, maxCount: number, minMaxCount: number) {
    this.minCount = minCount;
    this.maxCount = maxCount;
    this.minMaxCount = minMaxCount;
  }
}


describe('range.validator', () => {
  it('should accept null', (done) => {
    testValue(new NumberAction(null, null, null), false, done);
  });

  it('should accept undefined', (done) => {
    testValue(new NumberAction(undefined, undefined, undefined), false, done);
  });

  it('should accept value above minimum', (done) => {
    testValue(new NumberAction(minimum+1, null, null), false, done);
  });

  it('should accept value minimum', (done) => {
    testValue(new NumberAction(minimum, null, null), false, done);
  });

  it('should not accept value below minimum', (done) => {
    testValue(new NumberAction(minimum-1, null, null), true, done);
  });

  it('should accept value below maximum', (done) => {
    testValue(new NumberAction(null, maximum-1, null), false, done);
  });

  it('should accept value maximum', (done) => {
    testValue(new NumberAction(null, maximum, null), false, done);
  });

  it('should not accept value above maximum', (done) => {
    testValue(new NumberAction(null, maximum+1, null), true, done);
  });

  it('should accept value between minimum and maximum', (done) => {
    testValue(new NumberAction(null, null, (maximum - minimum) / 2 + minimum), false, done);
  });

  it('should accept value maximum', (done) => {
    testValue(new NumberAction(null, null, maximum), false, done);
  });

  it('should accept value minimum', (done) => {
    testValue(new NumberAction(null, null, minimum), false, done);
  });

  it('should accept value above minimum', (done) => {
    testValue(new NumberAction(null, null, minimum+1), false, done);
  });

  it('should accept value below maximum', (done) => {
    testValue(new NumberAction(null, null, maximum-1), false, done);
  });

  it('should not accept value below minimum', (done) => {
    testValue(new NumberAction(null, null, minimum-1), true, done);
  });

  it('should not accept value above maximum', (done) => {
    testValue(new NumberAction(null, null, maximum+1), true, done);
  });
});
