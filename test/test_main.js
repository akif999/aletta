QUnit.test("isMobile unit test", function(assert) {
    var chromeMac = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3864.0 Safari/537.36";
    var chromeWin = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100";
    var fireFoxMac = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:68.0) Gecko/20100101 Firefox/68.0";
    var fireFoxWin = "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:62.0) Gecko/20100101 Firefox/62.0";
    var iE = "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko";
	var edge = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/17.17134";
	var safariMac = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Safari/605.1.15";
    var safariIos12 = "Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1";
    var chromeAndroidAQUOS = "Mozilla/5.0 (Linux; Android 9; SHV43) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Mobile Safari/537.36k";
    var chromeAndroidXperia = "Mozilla/5.0 (Linux; Android 9; SOV40) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Mobile Safari/537.36";

    assert.ok(isMobile(chromeMac) === false, "pass");
    assert.ok(isMobile(chromeWin) === false, "pass");
    assert.ok(isMobile(fireFoxMac) === false, "pass");
    assert.ok(isMobile(fireFoxWin) === false, "pass");
    assert.ok(isMobile(iE) === false, "pass");
    assert.ok(isMobile(edge) === false, "pass");
    assert.ok(isMobile(safariMac) === false, "pass");
    assert.ok(isMobile(safariIos12) === true, "pass");
    assert.ok(isMobile(chromeAndroidAQUOS) === true, "pass");
    assert.ok(isMobile(chromeAndroidXperia) === true, "pass");
});
