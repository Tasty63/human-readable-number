const {
    minSatisfying
} = require("semver");

module.exports = function toReadable(number) {
    let arr = number.toString().split('');
    let tens = parseInt(number.toString()[1] + number.toString()[2]);

    let dict = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];

    let humanReadableArr = arr.map((item, index, arr) => {
        let digit = parseInt(item);

        switch (arr.length) {
            case 3:
                if (tens < 10 || index === 0) {
                    item = dict[digit];
                } else if (tens > 10 && tens < 20 && index === 1) {
                    item = dict[tens];
                } else if (tens > 19 && digit !== 0) {
                    item = dict[digit];
                } else if (index === 2) {
                    item = '';
                } else {
                    item = '';
                }

                if (index === 0) {
                    item += ' hundred';
                }
                if (index === 1 && tens < 11 || (tens > 19 && index === 1)) {
                    if (digit > 5 && digit !== 8) {
                        item += 'ty';
                    } else if (digit === 8) {
                        item = 'eighty'
                    } else if (digit === 1) {
                        item = dict[tens];
                    } else if (digit === 5) {
                        item = 'fifty';
                    } else if (digit === 4) {
                        item = 'forty';
                    } else if (digit === 3) {
                        item = 'thirty';
                    } else if (digit === 2) {
                        item = 'twenty';
                    } else if (digit === 0) {
                        item = '';
                    }
                }
                break;
            case 2:
                if (number >= 10 && number < 20 && index === 0) {
                    item = dict[number];
                } else if (number >= 20) {
                    item = dict[digit];
                    if (index === 0) {
                        if (digit > 5 && digit !== 8) {
                            item += 'ty';
                        } else if (digit === 8) {
                            item = 'eighty';
                        } else if (digit === 5) {
                            item = 'fifty';
                        } else if (digit === 4) {
                            item = 'forty';
                        } else if (digit === 3) {
                            item = 'thirty';
                        } else if (digit === 2) {
                            item = 'twenty';
                        } else if (digit === 0) {
                            item = '';
                        }
                    } else {
                        item = dict[digit];
                    }
                } else {
                    item = '';
                }
                break;
            case 1:
                item = dict[digit];
                break;
            default:
                break;
        }
        return item;
    });

    let humanReadableString;
    if (arr.length > 1) {
        humanReadableString =
            humanReadableArr.filter(item => item !== '' && item !== 'zero')
            .join(' ');
    } else {
        humanReadableString =
            humanReadableArr.filter(item => item !== '')
            .join(' ');
    }

    return humanReadableString;
}
