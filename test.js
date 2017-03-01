var testCases = {
    "0": "",
    "02": "दुई",
    "000002": "दुई",
    "9": "नौँ",
    "100": "एक सय",
    "123": "एक सय तेइस",
    "1234": "एक हजार दुई सय चौतीस"
};

for(var key in testCases) {
    testConvertMe(key, testCases[key]);
}