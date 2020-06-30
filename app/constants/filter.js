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

const filter = { limitHtml, slugUrl, firstSentence, suffix, formatVndCurrency };

module.exports = filter;
