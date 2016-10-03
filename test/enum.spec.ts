import {Action} from "abox";
import {Enum} from "../index";
import {testValue} from "./helper";

const enumValues = [
  "a", 'b', "c"
];

@Action({ name: "enum.action" })
class EnumAction {

  @Enum(enumValues)
  public data: any;

  constructor(data: any) {
    this.data = data;
  }
}

describe('enum.validator', () => {
  it('should accept null', (done) => {
    testValue(new EnumAction(null), false, done);
  });

  it('should accept undefined', (done) => {
    testValue(new EnumAction(undefined), false, done);
  });

  it('should accept enum value', (done) => {
    testValue(new EnumAction("a"), false, done);
  });

  it('should accept enum value #2', (done) => {
    testValue(new EnumAction("b"), false, done);
  });

  it('should accept enum value #3', (done) => {
    testValue(new EnumAction("c"), false, done);
  });

  it('should not accept unknown value', (done) => {
    testValue(new EnumAction("d"), true, done);
  });
});
