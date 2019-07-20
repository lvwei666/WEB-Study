interface IDrawerConfig {
  enterDOM: HTMLElement | null;
  leaveDOM: HTMLElement | null;
  duration?: number;
  ease?: string;
}
class Drawer implements IDrawerConfig {
  enterDOM: HTMLElement
  leaveDOM: HTMLElement
  _duration:number = 2
  _ease:string = 'ease'
  constructor(opt) {
    this.enterDOM = opt.enterDOM
    this.leaveDOM = opt.leaveDOM
    this.initDOMStyle();
  }
  get duration() {
    return this._duration;
  }
  set duration(duration: number) {
    this._duration = duration;
  }
  get ease() {
    return this._ease;
  }
  set ease(ease: string) {
    this._ease = ease;
  }
  initDOMStyle () {
    if (this.enterDOM && this.leaveDOM) {
      this.enterDOM.setAttribute('style', `transition:left ${this.duration}s ${this.ease}`);
      this.leaveDOM.setAttribute('style', `transition: margin-left ${this.duration}s ${this.ease}`);
    }
  }
  enter () {
    if (this.enterDOM && this.leaveDOM) {
      this.enterDOM.setAttribute('style', `left: 0px;transition: left ${this.duration}s ${this.ease}`);
      this.leaveDOM.setAttribute('style', `transition: margin-left ${this.duration}s ${this.ease}; margin-left: 200px;`);
    }
  }
  leave () {
    this.initDOMStyle();
  }
}