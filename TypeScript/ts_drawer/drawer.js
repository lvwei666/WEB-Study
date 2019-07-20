var Drawer = /** @class */ (function () {
    function Drawer(opt) {
        this._duration = 2;
        this._ease = 'ease';
        this.enterDOM = opt.enterDOM;
        this.leaveDOM = opt.leaveDOM;
        this.initDOMStyle();
    }
    Object.defineProperty(Drawer.prototype, "duration", {
        get: function () {
            return this._duration;
        },
        set: function (duration) {
            this._duration = duration;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Drawer.prototype, "ease", {
        get: function () {
            return this._ease;
        },
        set: function (ease) {
            this._ease = ease;
        },
        enumerable: true,
        configurable: true
    });
    Drawer.prototype.initDOMStyle = function () {
        if (this.enterDOM && this.leaveDOM) {
            this.enterDOM.setAttribute('style', "transition:left " + this.duration + "s " + this.ease);
            this.leaveDOM.setAttribute('style', "transition: margin-left " + this.duration + "s " + this.ease);
        }
    };
    Drawer.prototype.enter = function () {
        if (this.enterDOM && this.leaveDOM) {
            this.enterDOM.setAttribute('style', "left: 0px;transition: left " + this.duration + "s " + this.ease);
            this.leaveDOM.setAttribute('style', "transition: margin-left " + this.duration + "s " + this.ease + "; margin-left: 200px;");
        }
    };
    Drawer.prototype.leave = function () {
        this.initDOMStyle();
    };
    return Drawer;
}());
