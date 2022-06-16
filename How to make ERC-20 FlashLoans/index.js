const { MerkleTree } = require('merkletreejs');
const keccak256 = require('keccak256');

let whiteListAddress = [
    "a1",
    "b2",
    "c3",
    "d4",
    "e5"
]

const leafNodes = whiteListAddress.map((whiteListItem => keccak256(whiteListItem)))
const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true })

console.log("merkleTree: ", merkleTree.toString())

const rootHash = merkleTree.getRoot();
const hexProof = merkleTree.getHexProof(leafNodes[0]);

console.log("root hash: " + rootHash, "hexProof: " + hexProof)

const TEST = keccak256("lol fuck you")

// console.log(merkleTree.verify(hexProof, leafNodes[0], rootHash))

