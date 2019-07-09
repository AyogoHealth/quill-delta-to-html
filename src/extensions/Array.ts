
interface IArraySlice {
    sliceStartsAt: number,
    elements: any[]
}

interface Array<T> {
    _preferSecond(): T | null,
    _flatten(): any[],
    _groupConsecutiveElementsWhile(
        predicate: (currElm: any, prevElm: any) => boolean): any[],
    _sliceFromReverseWhile(startIndex: number,
        predicate: (currElm: any) => boolean): IArraySlice,
    _intersperse(item: any): any[]
}


function _preferSecond() {
    if (this.length === 0) {
        return null;
    }
    return this.length >= 2 ? this[1] : this[0];
};


function _flatten() {
    return this.reduce((pv: any[], v: any) => {
        return pv.concat(Array.isArray(v) ? v._flatten() : v);
    }, []);
};

/**
 * Returns a new array by putting consecutive elements satisfying predicate into a new 
 * array and returning others as they are. 
 * Ex: [1, "ha", 3, "ha", "ha"] => [1, "ha", 3, ["ha", "ha"]] 
 *      where predicate: (v, vprev) => typeof v === typeof vPrev
 */
function _groupConsecutiveElementsWhile(
    predicate: (currElm: any, prevElm: any) => boolean): any[] {
    var groups = [];

    var currElm, currGroup;
    for (var i = 0; i < this.length; i++) {

        currElm = this[i];

        if (i > 0 && predicate(currElm, this[i - 1])) {
            currGroup = groups[groups.length - 1];
            currGroup.push(currElm);

        } else {
            groups.push([currElm]);
        }

    }
    return groups.map((g) => g.length === 1 ? g[0] : g);
};


/**
 * Returns consecutive list of elements satisfying the predicate starting from startIndex 
 * and traversing the array in reverse order. 
 */
function _sliceFromReverseWhile(startIndex: number,
    predicate: (currElm: any) => boolean): IArraySlice {

    var result = {
        elements: [] as any[],
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
};

function _intersperse(item: any) {
    return this.reduce((pv: any[], v: any, index: number) => {
        pv.push(v);
        if (index < (this.length - 1)) {
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