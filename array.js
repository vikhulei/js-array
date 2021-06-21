const people = [
    { firstName: 'Sam', lastName: 'Hughes', DOB: '07/07/1978', department: 'Development', salary: '45000' },
    { firstName: 'Terri', lastName: 'Bishop', DOB: '02/04/1989', department: 'Development', salary: '35000' },
    { firstName: 'Jar', lastName: 'Burke', DOB: '11/01/1985', department: 'Marketing', salary: '38000' },
    { firstName: 'Julio', lastName: 'Miller', DOB: '12/07/1991', department: 'Sales', salary: '40000' },
    { firstName: 'Chester', lastName: 'Flores', DOB: '03/15/1988', department: 'Development', salary: '41000' },
    { firstName: 'Madison', lastName: 'Marshall', DOB: '09/22/1980', department: 'Sales', salary: '32000' },
    { firstName: 'Ava', lastName: 'Pena', DOB: '11/02/1986', department: 'Development', salary: '38000' },
    { firstName: 'Gabriella', lastName: 'Steward', DOB: '08/26/1994', department: 'Marketing', salary: '46000' },
    { firstName: 'Charles', lastName: 'Campbell', DOB: '09/04/1977', department: 'Sales', salary: '42000' },
    { firstName: 'Tiffany', lastName: 'Lambert', DOB: '05/11/1990', department: 'Development', salary: '34000' },
    { firstName: 'Antonio', lastName: 'Gonzalez', DOB: '03/24/1985', department: 'Office Management', salary: '49000' },
    { firstName: 'Aaron', lastName: 'Garrett', DOB: '09/04/1985', department: 'Development', salary: '39000' },
];

const res = (arr) => {
    return Math.round(arr.reduce((a,b) => {
        return a + Number(b.salary)
    }, 0) / arr.length)
}

const older30 = (arr) => {
        let newArr = []
        newArr = arr.filter(value => (new Date().getFullYear() - new Date(value.DOB).getFullYear()) > 30)
        
        return newArr.map(({firstName, lastName}) => `${firstName} ${lastName}`)
}

const fullNamesInArray = (arr) => {
    return arr.map(({firstName, lastName}) => `${firstName} ${lastName}`)
}

const fullNamesInList = (arr) => {
    for(let x in arr) {
        console.log(arr[x].firstName, arr[x].lastName)
    }
}

const getDepartments = arr => {
    return arr.reduce((acc, person) => ({...acc, [person.department]: acc[person.department] + 1 || 1}), {})
    
}

//console.log(getDepartments(people))

const orders = [
    { orderId: '123', customerId: '123', deliveryDate: '01-01-2020', delivered: true, items: [
        { productId: '123', price: 55 },
        { productId: '234', price: 30 },
    ]},
    { orderId: '234', customerId: '234', deliveryDate: '01-02-2020', delivered: false, items: [
        { productId: '234', price: 30 },
    ]},
    { orderId: '345', customerId: '234', deliveryDate: '05-01-2020', delivered: true, items: [
        { productId: '567', price: 30 },
        { productId: '678', price: 80 },
    ]},
    { orderId: '456', customerId: '345', deliveryDate: '12-01-2020', delivered: true, items: [
        { productId: '789', price: 12 },
        { productId: '890', price: 90 },
    ]},
        { orderId: '578', customerId: '456', deliveryDate: '12-01-2020', delivered: true, items: [
        { productId: '901', price: 43 },
        { productId: '123', price: 55 },
    ]},
];

// 1) Get a list of the orders for the customer with the ID 234 that have not been delivered.

let getResults = (arr) => {
  const result = arr.filter(el => el.orderId==='234')
  result.forEach(element => {
      if(element.delivered===false) {
      let items = element.items
      items.forEach(el => {
        console.log(el)
      })
    } 
  });
}

// 2) Create a new property on each order with the total price of items ordered.

getResults = (arr) => {
  return arr.map(value => ({...value, total: value.items.reduce((a,b) => a + b.price, 0)}))
}

// 3) Have all the orders been delivered?

getResults = (arr) => {
  return arr.filter(el => el.delivered===false)
}

getResults = (arr) => {
  return arr.every(el => el.delivered)
}

// 4) Has the customer with ID '123' made any orders?

getResults = (arr) => {
  return arr.filter(el => {
    if(el.customerId==="123") {
     return el
   } else {
     return false
   } 
    })
}

getResults = (arr) => {
    
  return arr.some(el => el.customerId==="123")
}

// 5) Have any products with an id of 123 been sold?

// const orders = [
//   { orderId: '123', customerId: '123', deliveryDate: '01-01-2020', delivered: true, items: [
//       { productId: '123', price: 55 },
//       { productId: '234', price: 30 },
//   ]},
//   { orderId: '234', customerId: '234', deliveryDate: '01-02-2020', delivered: false, items: [
//       { productId: '234', price: 30 },
//   ]},
//   { orderId: '345', customerId: '234', deliveryDate: '05-01-2020', delivered: true, items: [
//       { productId: '567', price: 30 },
//       { productId: '678', price: 80 },
//   ]},
//   { orderId: '456', customerId: '345', deliveryDate: '12-01-2020', delivered: true, items: [
//       { productId: '789', price: 12 },
//       { productId: '890', price: 90 },
//   ]},
//       { orderId: '578', customerId: '456', deliveryDate: '12-01-2020', delivered: true, items: [
//       { productId: '901', price: 43 },
//       { productId: '123', price: 55 },
//   ]},
// ];

getResults = (arr) => {
  return arr.some(val => val.items.some(val => val.productId === "901"))
}

getResults = (arr) => {
  return arr.reduce((a,b) => a + (b.items.reduce((c,d) => c + (d.productId === "123"), 0)), 0)
}

console.log(getResults(orders))