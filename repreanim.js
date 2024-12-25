class Node {
    constructor(fields) {
        this.fields = fields;
    }
}

class Child {
    constructor() {
        this.dimensions = [];
    }

    addDimensions(fields) {
        // Assuming fields is an array of dimension names
        this.dimensions.push(...fields);
        console.log(`Added dimensions: ${fields}`);
    }
}
