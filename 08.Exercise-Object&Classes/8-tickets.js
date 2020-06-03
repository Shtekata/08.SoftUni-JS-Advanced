// function solve(tickets, criteria) {
//   class Ticket {
//     constructor(descriptor) {
//       const [destination, price, status] = descriptor.split('|');
//       this.destination = destination;
//       this.price = +price;
//       this.status = status;
//     }
//   }

//   //   return tickets.map((x) => new Ticket(x)).sort(comparator[criteria]);
//   //   const comparator = {
//   //     destination: (x, y) => x.destination.localeCompare(y.destination),
//   //     price: (x, y) => x - y,
//   //     status: (x, y) => x.status.localeCompare(y.status),
//   //   };
//   // }

//   return tickets.map(a => new Ticket(a)).sort(comparator);
//   function comparator(x, y) {
//     try {
//       return x[criteria].localeCompare(y[criteria]);
//     } catch (e) {
//       return x - y;
//     }
//   }
// }

function solve(data, criteria) {
    let arr = data.map(x => {
        x = x.split('|');
        const obj = {};
        obj.destination = x[0];
        obj.price = +x[1];
        obj.status = x[2];
        return obj;
    });

    return criteria == 'price'
        ? arr.sort((x, y) => x[criteria] - y[criteria])
        : arr.sort((x, y) => x[criteria].localeCompare(y[criteria]));
}

console.log(
  solve(
    [
      'Philadelphia|94.20|available',
      'New York City|95.99|available',
      'New York City|95.99|sold',
      'Boston|126.20|departed',
    ],
    'destination'
  )
);