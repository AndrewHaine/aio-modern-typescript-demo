function myFunction<TString extends string>(
  param1: number,
  param2: TString
): TString {
  console.log(`Parameter 1: ${param1}`);
  return param2;
}

const MY_CONSTANT: string = "value";
