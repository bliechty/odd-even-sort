class evenOddBSTConstruct {
    constructor() {
        this.root = new Node('root');
    }

    construct(array) {
        for (let i = 0; i < array.length; i++) {
            let current = this.root;
            while (true) {
                if (current.data === 'root' && array[i] % 2 === 0 ) {
                    if (current.right === null) {
                        current.right = new Node(array[i]);
                        break;
                    } else {
                        current = current.right;
                    }
                } else if (current.data === 'root' && array[i] % 2 !== 0) {
                    if (current.left === null) {
                        current.left = new Node(array[i]);
                        break;
                    } else {
                        current = current.left;
                    }
                } else if (array[i] <= current.data && current.left === null) {
                    current.left = new Node(array[i]);
                    break;
                } else if (array[i] > current.data && current.right === null) {
                    current.right = new Node(array[i]);
                    break;
                } else if (array[i] <= current.data && current.left !== null) {
                    current = current.left;
                } else if (array[i] > current.data && current.right !== null) {
                    current = current.right;
                }
            }
        }

        return this.root;
    }
}

class Node {
    constructor(data) {
        this.left = null;
        this.right = null;
        this.data = data;
    }
}

let bstConstruct = new evenOddBSTConstruct();
let newBST = bstConstruct.construct([9, 4, 1, 3, 6, 2, 5, 7, 8]);
console.log(newBST);