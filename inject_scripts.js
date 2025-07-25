(function() {
    if (typeof self === 'undefined' || !self.document) {
        return;
    }

    var roulette = false;
    function periodicClick() {
        if (roulette) {
            // 点击“轮盘”相关的 SVG 元素
            console.log("点击“轮盘”相关的元素,当前：", window.location.href);
            window.location.href=window.location.href.split("#")[0]+'#category=roulette';
            // clickSvgElement('#category-navigator-roulette > div > div > div'); // 替换为实际的 SVG 选择器
        } else {
            // 点击“百家乐&骰宝”相关的 SVG 元素
            console.log("点击“百家乐&骰宝”相关的元素,当前：", window.location.href);
            window.location.href=window.location.href.split("#")[0]+'#category=baccarat_sicbo';
            // clickSvgElement('#category-navigator-roulette > div > div > div'); // 替换为实际的 SVG 选择器
        }
        roulette = !roulette;
    }

    // 设置定时器，每 X 秒执行一次点击操作
    if (self.interval_id) {
        clearInterval(self.interval_id);
        console.log('Periodic click task has been cancelled.');
    }
    // self.interval_id = setInterval(periodicClick, 15000); // 每 10 秒点击一次

    console.info('injecting scripts successfully.');
    return true;
})();