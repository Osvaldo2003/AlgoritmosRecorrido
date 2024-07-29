import Node from "./Node.js";

class BST {
    #root;

    constructor() {
        this.#root = null;
    }

    add(value) {
        if (this.#root == null) {
            this.#root = new Node(value);
        } else {
            this.insertNode(this.#root, value);
        }
    }

    insertNode(node, value) {
        if (value.date < node.value.date) {
            if (node.left == null) {
                node.left = new Node(value);
            } else {
                this.insertNode(node.left, value);
            }
        } else {
            if (node.right == null) {
                node.right = new Node(value);
            } else {
                this.insertNode(node.right, value);
            }
        }
    }

    findMinNode(node = this.#root) {
        if (node == null) {
            return null;
        }
        while (node.left != null) {
            node = node.left;
        }
        return node;
    }

    findMaxNode(node = this.#root) {
        if (node == null) {
            return null;
        }
        while (node.right != null) {
            node = node.right;
        }
        return node;
    }

    search(date, node = this.#root) {
        if (node === null) {
            return [];
        }

        if (date < node.value.date) {
            return this.search(date, node.left);
        } else if (date > node.value.date) {
            return this.search(date, node.right);
        } else {
            return [node.value];
        }
    }

    inOrderTraversal(node = this.#root, result = []) {
        if (node !== null) {
            this.inOrderTraversal(node.left, result);
            result.push(node.value);
            this.inOrderTraversal(node.right, result);
        }
        return result;
    }

    reverseInOrderTraversal(node = this.#root, result = []) {
        if (node !== null) {
            this.reverseInOrderTraversal(node.right, result);
            result.push(node.value);
            this.reverseInOrderTraversal(node.left, result);
        }
        return result;
    }
}

export default BST;
