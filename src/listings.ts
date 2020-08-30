interface Listing {
  id: string;
  title: string;
  image: string;
  address: string;
  price: number;
  numOfGuests: number;
  numOfBeds: number;
  numOfBaths: number;
  rating: number;
}

export const listings: Listing[] = [
  {
    id: "001",
    title: "title 1",
    image:
      "https://images.unsplash.com/photo-1558980394-4c7c9299fe96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    address: "3210 Scot, valencia city",
    price: 1000,
    numOfGuests: 2,
    numOfBeds: 1,
    numOfBaths: 2,
    rating: 5,
  },
  {
    id: "002",
    title: "title 2",
    image:
      "https://images.unsplash.com/photo-1585672652363-f4e6b7a0d951?ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80",
    address: "3210 Scot, valencia city",
    price: 2000,
    numOfGuests: 2,
    numOfBeds: 1,
    numOfBaths: 2,
    rating: 4,
  },
  {
    id: "003",
    title: "title 3",
    image:
      "https://images.unsplash.com/photo-1585675545282-e533759cf863?ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80",
    address: "3210 Scot, valencia city",
    price: 3000,
    numOfGuests: 2,
    numOfBeds: 1,
    numOfBaths: 2,
    rating: 3,
  },

  {
    id: "004",
    title: "title 4",
    image:
      "https://images.unsplash.com/photo-1585675545559-3b74c5999611?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    address: "3210 Scot, valencia city",
    price: 4000,
    numOfGuests: 2,
    numOfBeds: 1,
    numOfBaths: 2,
    rating: 2,
  },
  {
    id: "005",
    title: "title 5",
    image:
      "https://images.unsplash.com/photo-1558980664-1db506751c6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    address: "3210 Scot, valencia city",
    price: 5000,
    numOfGuests: 2,
    numOfBeds: 1,
    numOfBaths: 2,
    rating: 1,
  },
];
