module.exports = function toReadable(number) {
    function oneNumber(strNum) {
        switch (strNum) {
            case "0":
                return "zero";
            case "1":
                return "one";
            case "2":
                return "two";
            case "3":
                return "three";
            case "4":
                return "four";
            case "5":
                return "five";
            case "6":
                return "six";
            case "7":
                return "seven";
            case "8":
                return "eight";
            case "9":
                return "nine";
        }
    }

    function twoNumber(strNum) {
        if (strNum[0] === "1") {
            switch (strNum) {
                case "10":
                    return "ten";
                case "11":
                    return "eleven";
                case "12":
                    return "twelve";
                case "13":
                    return "thirteen";
                case "14":
                    return "fourteen";
                case "15":
                    return "fifteen";
                case "16":
                    return "sixteen";
                case "17":
                    return "seventeen";
                case "18":
                    return "eighteen";
                case "19":
                    return "nineteen";
            }
        }

        if (strNum[1] != "0") {
            switch (strNum[0]) {
                case "2":
                    return "twenty " + oneNumber(strNum[1]);
                case "3":
                    return "thirty " + oneNumber(strNum[1]);
                case "4":
                    return "forty " + oneNumber(strNum[1]);
                case "5":
                    return "fifty " + oneNumber(strNum[1]);
                case "6":
                    return "sixty " + oneNumber(strNum[1]);
                case "7":
                    return "seventy " + oneNumber(strNum[1]);
                case "8":
                    return "eighty " + oneNumber(strNum[1]);
                case "9":
                    return "ninety " + oneNumber(strNum[1]);
            }
        } else {
            switch (strNum[0]) {
                case "2":
                    return "twenty";
                case "3":
                    return "thirty";
                case "4":
                    return "forty";
                case "5":
                    return "fifty";
                case "6":
                    return "sixty";
                case "7":
                    return "seventy";
                case "8":
                    return "eighty";
                case "9":
                    return "ninety";
            }
        }
    }

    var strNumber = number.toString();
    var result = "";

    //    Количественные числительные (cardinal numbers) указывают на количество объектов. Отвечают на вопрос «сколько?».

    switch (strNumber.length) {
        case 1:
            result = oneNumber(strNumber);
            return result;

        case 2:
            result = twoNumber(strNumber);
            return result;

        case 3: {
            if (strNumber.substr(1, 2) === "00")
                return oneNumber(strNumber[0]) + " hundred";

            if (strNumber.substr(1, 1) === "0")
                return (
                    oneNumber(strNumber[0]) +
                    " hundred " +
                    oneNumber(strNumber[2])
                );

            return (
                oneNumber(strNumber[0]) +
                " hundred " +
                twoNumber(strNumber.substr(1, 2))
            );
        }

        case 4: {
            if (strNumber.substr(2, 2) === "00")
                return twoNumber(strNumber.substr(0, 2)) + " hundred";

            if (strNumber.substr(2, 1) === "0")
                return (
                    twoNumber(strNumber.substr(0, 2)) +
                    " hundred " +
                    oneNumber(strNumber[2])
                );

            return (
                twoNumber(strNumber.substr(0, 2)) +
                " hundred " +
                twoNumber(strNumber.substr(1, 2))
            );
        }

        //              case 5:
        //              case 6:

        default:
            return strNumber;
    }

/*    
    switch (strNumber) {
        case "1000":
            result = "one thousand";
            break;
        case "1200":
            result = "one thousand two hundred";
            break;
        case "100000":
            result = "one hundred thousand";
            break;
        case "1000000":
            result = "one million";
            break;
        case "1000000000":
            result = "one billion";
            break;
    }
    */
    //    При счете используя сотни, тысячи, миллионы и т.д. к числительным не прибавляется окончание  s, указывающее на множественное число.

    return strNumber;
};
