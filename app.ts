const CalbackFunc = (input1: number, input2: number, cb) => {
  const result = input1 + input2;
  cb(result);
};
CalbackFunc(10, 22, (item) => {
  console.log(item);
});
