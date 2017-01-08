export default function (cand) {
  return Object.prototype.toString.call(cand) === '[object Array]';
}
