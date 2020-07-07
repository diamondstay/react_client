const limitHtml = (text, limit) => {
  const changedString = String(text).replace(/<[^>]+>/gm, '');
  return changedString.length > limit ? changedString.substr(0, limit - 1) + ' ...' : changedString;
};

const slugUrl = (str) => {
  return str.toLowerCase()
            .replace(/ /g,'-')
            .replace(/[^\w-]+/g,'');
};

const firstSentence = (text) => {
  return text.substr(0, text.indexOf('.')) + '.';
};

const suffix = (i) => {
  if (!i || isNaN(parseInt(i))) {
    return i;
  }
  let j = i % 10,
    k = i % 100;
  if (j === 1 && k !== 11) {
    return i + "st";
  }
  if (j === 2 && k !== 12) {
    return i + "nd";
  }
  if (j === 3 && k !== 13) {
    return i + "rd";
  }
  return i + "th";
};

const formatVndCurrency = (str) => {
  return str.toLocaleString('vi', {style : 'currency', currency : 'VND'});
};

const formatPrice = str => {
  const newStr = parseInt(str).toFixed();
  return formatVndCurrency(parseInt(newStr));
};

const getReviewStars = (number) => {
  let stars = '';
  let nostars = '';
  for (let i = 0; i < number; i ++) {
    stars += '<i class="icon star" /></i>';
  }
  if (number < 5) {
    let minus = 5 - number;
    for (let i = 0; i < minus; i ++) {
      nostars += '<i class="icon star no-star" /></i>';
    }
  }
  return number === 0 ? '' : stars + nostars;
};

const filter = { limitHtml, slugUrl, firstSentence, suffix, formatVndCurrency, formatPrice, getReviewStars };

module.exports = filter;
