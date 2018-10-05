class NeuralNetwork {

    constructor(input_nodes, hidden_nodes, output_nodes) {

        this.input_nodes = input_nodes;
        this.hidden_nodes = hidden_nodes;
        this.output_nodes = output_nodes;

        this.weight_ih = new Matrix(hidden_nodes, input_nodes).randomize();
        this.weight_ho = new Matrix(output_nodes, hidden_nodes).randomize();

        this.bias_h = new Matrix(hidden_nodes, 1).randomize();
        this.bias_o = new Matrix(output_nodes, 1).randomize();


    }

    postfowrad(inputs_array) {
        let inputs = Matrix.fromArray(inputs_array);

        let hidden = Matrix.multiply(this.weight_ih, inputs);

    }
}