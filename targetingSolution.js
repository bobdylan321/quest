class TargetingSolution {
    constructor(config) {
      this.value = `(${config.x}, ${config.y}, ${config.z})`
      this.target = () => this.value;
    }
  }
  
  let m = new TargetingSolution({
    x: 10,
    y: 15,
    z: 900
  });
  
  console.log(m.target());