class Clock {
  constructor() {
    // 1. Create a Date object.
    const time = new Date();
    
    // 2. Store the hours, minutes, and seconds.
    this.hours = time.getHours();
    this.minutes = time.getMinutes();
    this.seconds = time.getSeconds();

    // 3. Call printTime.
    this.printTime();
    
    // 4. Schedule the tick at 1 second intervals.  
    setInterval(this._tick, 100);
  }
  

  printTime() {
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }
  // Format the time in HH:MM:SS
  // Use console.log to print it.

  _tick() {
    // 1. Increment the time by one second.
    this._incrementSeconds();
    // 2. Call printTime.
    this.printTime();
  }
  
  _incrementSeconds() {
    this.seconds += 1;
    if (this.seconds === 60) {
      this.seconds = 0;
      this._incrementMinutes();
    }
  }
  
  _incrementMinutes() {
    this.minutes += 1;
    if (this.minutes === 60) {
      this.minutes = 0;
      this._incrementHours();
    }
  }
  
  _incrementHours() {
    this.hours += 1;
    if (this.hours === 24) {
      this.hours = 0;
    }
  }
}

const clock = new Clock();