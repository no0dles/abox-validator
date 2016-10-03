import {Action} from "abox";
import {Length} from "../index";
import {testValue} from "./helper";

const minimum = 1;
const maximum = 4;

@Action({ name: "length.action" })
class LengthAction {

  @Length(minimum)
  public minMessage: any;

  @Length(null, maximum)
  public maxMessage: any;

  @Length(minimum, maximum)
  public minMaxMessage: any;

  constructor(minMessage: any, maxMessage: any, minMaxMessage: any) {
    this.minMessage = minMessage;
    this.maxMessage = maxMessage;
    this.minMaxMessage = minMaxMessage;
  }
}

const getString = (len: number) => {
  return Array(len+1).join("a");
};


describe('boolean.validator', () => {
  it('should accept null', (done) => {
    testValue(new LengthAction(null, null, null), false, done);
  });

  it('should accept undefined', (done) => {
    testValue(new LengthAction(undefined, undefined, undefined), false, done);
  });

  it('should accept above minimum', (done) => {
    testValue(new LengthAction(getString(minimum+1), null, null), false, done);
  });

  it('should accept minimum', (done) => {
    testValue(new LengthAction(getString(minimum), null, null), false, done);
  });

  it('should not accept below minimum', (done) => {
    testValue(new LengthAction(getString(minimum-1), null, null), true, done);
  });

  it('should accept below maximum', (done) => {
    testValue(new LengthAction(null, getString(maximum-1), null), false, done);
  });

  it('should accept maximum', (done) => {
    testValue(new LengthAction(null, getString(maximum), null), false, done);
  });

  it('should not accept above maximum', (done) => {
    testValue(new LengthAction(null, getString(maximum+1), null), true, done);
  });
});
