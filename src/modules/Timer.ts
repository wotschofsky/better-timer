type TimerCallback = () => void;

export default class Timer {
  private callbacks: TimerCallback[] = [];
  private timer: number | undefined;
  private isRunning = false;
  private startedAt: number;
  private timeLeft: number;

  constructor(private duration: number, ...callbacks: TimerCallback[]) {
    this.callbacks.push(...callbacks);

    this.startedAt = this.currentTimestamp;
    this.timeLeft = this.duration;

    this.createTimer(this.duration);
  }

  private execCallbacks() {
    this.callbacks.forEach((callback) => {
      callback();
    });
  }

  public get promise() {
    return new Promise<void>((resolve) => {
      this.callbacks.push(resolve);
    });
  }

  private createTimer(duration: number) {
    if (this.isRunning) {
      return;
    }

    this.timer = setTimeout(() => {
      this.execCallbacks();
      this.isRunning = false;
    }, duration);

    this.isRunning = true;
  }

  public pause() {
    this.cancel();

    const timeElapsed = this.currentTimestamp - this.startedAt;
    const timeLeft = this.duration - timeElapsed;
    this.timeLeft = timeLeft;
  }

  public resume() {
    this.createTimer(this.timeLeft);
  }

  public cancel() {
    clearTimeout(this.timer);
    this.isRunning = false;
  }

  private get currentTimestamp() {
    return window.performance.now();
  }
}
