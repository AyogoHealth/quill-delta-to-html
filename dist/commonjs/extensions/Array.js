function _preferSecond() {
    if (this.length === 0) {
        return null;
    }
    return this.length >= 2 ? this[1] : this[0];
}
;
function _flatten() {
    return this.reduce(function (pv, v) {
        return pv.concat(Array.isArray(v) ? v._flatten() : v);
    }, []);
}
;
function _groupConsecutiveElementsWhile(predicate) {
    var groups = [];
    var currElm, currGroup;
    for (var i = 0; i < this.length; i++) {
        currElm = this[i];
        if (i > 0 && predicate(currElm, this[i - 1])) {
            currGroup = groups[groups.length - 1];
            currGroup.push(currElm);
        }
        else {
            groups.push([currElm]);
        }
    }
    return groups.map(function (g) { return g.length === 1 ? g[0] : g; });
}
;
function _sliceFromReverseWhile(startIndex, predicate) {
    var result = {
        elements: [],
        sliceStartsAt: -1
    };
    for (var i = startIndex; i >= 0; i--) {
        if (!predicate(this[i])) {
            break;
        }
        result.sliceStartsAt = i;
        result.elements.unshift(this[i]);
    }
    return result;
}
;
function _intersperse(item) {
    var _this = this;
    return this.reduce(function (pv, v, index) {
        pv.push(v);
        if (index < (_this.length - 1)) {
            pv.push(item);
        }
        return pv;
    }, []);
}
Object.defineProperty(Array.prototype, '_preferSecond', { value: _preferSecond, enumerable: false, configurable: false });
Object.defineProperty(Array.prototype, '_flatten', { value: _flatten, enumerable: false, configurable: false });
Object.defineProperty(Array.prototype, '_groupConsecutiveElementsWhile', { value: _groupConsecutiveElementsWhile, enumerable: false, configurable: false });
Object.defineProperty(Array.prototype, '_sliceFromReverseWhile', { value: _sliceFromReverseWhile, enumerable: false, configurable: false });
Object.defineProperty(Array.prototype, '_intersperse', { value: _intersperse, enumerable: false, configurable: false });
