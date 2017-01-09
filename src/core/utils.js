function humanizeElapsedTime(date) {

  const SECOND = 1000;
  const MINUTE = SECOND * 60;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;
  const WEEK = DAY * 7;
  const MONTH = WEEK * 4;
  const YEAR = MONTH * 12;

  const fromMillis = [
    YEAR, MONTH, WEEK, DAY, HOUR, MINUTE, SECOND,
  ];

  const units = [
    'year', 'month', 'week', 'day', 'hour', 'minute', 'second',
  ];

  const unitToText = fromMillis.reduce((acc, val, idx) => {
    acc[val] = units[idx];
    return acc;
  }, {});

  const diff = new Date(date).getTime() - Date.now();

  const cands = fromMillis.filter(unit => {
    return diff >= unit;
  });

  const unit = cands[0];
  const unitTxt = unitToText[unit];
  const num = Math.round(diff / unit);
  const pluralSuffix = num > 1 ? 's' : '';

  return diff < 1 ? '~ Due' : `~ ${num} ${unitTxt}${pluralSuffix}`;
}

export {
  humanizeElapsedTime,
};
