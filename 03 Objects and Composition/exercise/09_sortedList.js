function foo() {

    class SortedList {
        constructor() {
            this.list = []
            this.size = 0
        }

        sortList = () => (this.list = this.list.sort((a, b) => a - b))

        checkIndex = i => {
            if (this.list[i] === undefined) {
                throw new Error()
            }
        }

        updateSize = () => (this.size = this.list.length)

        add = e => {
            this.list.push(e)
            this.sortList()
            this.updateSize()
        }

        remove = i => {
            this.checkIndex(Number(i))
            this.list.splice(i, 1)
            this.sortList()
            this.updateSize()
        }

        get = i => {
            this.checkIndex(Number(i))
            this.sortList()
            return this.list[i]
        }
    }

    return new SortedList()
}

var myList = foo();
expect(myList.hasOwnProperty('size')).to.equal(true, "Property size was not found");

// Generate random list of 20 numbers
var expectedArray = [];
for (let i = 0; i < 20; i++) {
    expectedArray.push(Math.floor(Math.random() * 200) - 100);
}
// Add to collection
for (let i = 0; i < expectedArray.length; i++) {
    myList.add(expectedArray[i]);
}
expect(myList.size).to.equal(20, "Elements weren't added");
// Sort array
expectedArray.sort((a, b) => a - b);
// Compare with collection
for (let i = 0; i < expectedArray.length; i++) {
    expect(myList.get(i)).to.equal(expectedArray[i], "Array wasn't sorted");
}