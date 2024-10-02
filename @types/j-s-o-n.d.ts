interface JSON {
  parse(text: string): Object;
  parse(text: string, reviver: Function): Object;
  stringify(value: Object): string;
  stringify(value: Object, replacer: Function): string;
  stringify(value: Object, replacer: Function, space: Object): string;
}
const JSON: JSON;
