// For-in-loop will return to you the KEYS of some collection (everything is an object (key value pair))
// For-of-loop only works with collections that are ordered (iterable key or flag)

let grades = ['A', 'F', 'F-', 'C+', 'B+'];
for (x of 'grades') {
    console.log(x);
}


// long hand



// for-of-loops return to you the VALUE, and can only run on ITERABLES (ordered collection)