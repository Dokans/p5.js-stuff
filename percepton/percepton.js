class Percepton {

    constructor() {
      this.weights = [];
      this.learningRate = 0.1;
      this.bias = 1;
  
      for (let j = 0; j < 3; j++) {
        this.weights[j] = random(-1, 1);
      }
  
    }
  
    guess(inputs = []) {
      
      inputs.push(this.bias);

      let sum = 0;
  
      for (let j = 0; j < this.weights.length; j++) {
        sum += this.weights[j] * inputs[j];
      }
  
      if (sum > 0) {
        return 1;
      } else if(sum < 0) {
        return -1;
      }
    }


    train(inputs = [], result){
        let guess = this.guess(inputs);
        inputs.push(this.bias);
        let error = result - guess;
        
        for(let j = 0; j < inputs.length; j++){
            this.weights[j] += inputs[j]*error*this.learningRate;
        }
    }
  
    
  
  }