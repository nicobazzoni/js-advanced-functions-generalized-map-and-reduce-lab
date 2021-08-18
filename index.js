// Add your functions here
function map(root, call) {
const num = []

for ( let i = 0; i < root.length; i++){
    const element = root[i]
    num.push(call(element))

}
return num
}