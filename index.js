// Code your solution here
function findMatching(drivers, toMatch) {
    return drivers.filter(function(name) {
        if (name.toLowerCase() === toMatch.toLowerCase()) {
            return name
        }
    })
}

function fuzzyMatch(drivers, firstLetterToMatch) {
    return drivers.filter(function(name) {
        if (name.toLowerCase().indexOf(firstLetterToMatch.toLowerCase()) === 0) {
            return name
        }
    })
}

function matchName (drivers, toMatch) {
    return drivers.filter(function(source) {
        if (source.name === toMatch) {
            return ("name", "hometown")
        }
    })

}

// function matchName(source, soughtName) {
//     return source.filter((record) => record.name === soughtName);
//   }