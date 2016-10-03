import {Action} from "abox";
import {Pattern} from "../index";
import {testValue} from "./helper";

@Action({ name: "pattern.action" })
class PatternAction {

  @Pattern(/^\+41 [0-9]{2} [0-9]{3} [0-9]{2} [0-9]{2}$/)
  public swissTelNo: string;

  constructor(swissTelNo: any) {
    this.swissTelNo = swissTelNo;
  }
}

describe('pattern.validator', () => {
  it('should accept null', (done) => {
    testValue(new PatternAction(null), false, done);
  });

  it('should accept undefined', (done) => {
    testValue(new PatternAction(undefined), false, done);
  });

  it('should accept a valid pattern', (done) => {
    testValue(new PatternAction("+41 78 123 45 67"), false, done);
  });

  it('should not accept an invalid pattern', (done) => {
    testValue(new PatternAction("+41 78 123 45 6a"), true, done);
  });
});
