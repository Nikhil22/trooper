const initializeArr = (size, el = 1) => {
  const out = [];
  for (let i = 0; i < size; ++i) {
    out.push(el);
  }
  return out;
};

export default initializeArr;
