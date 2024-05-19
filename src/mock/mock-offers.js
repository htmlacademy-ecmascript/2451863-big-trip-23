const mockOffers = [
  {
    type: 'taxi',
    offers: [
      {
        id: 'taxi1',
        title: 'Upgrade to a comfort class',
        price: 120,
      }
    ]
  },
  {
    type: 'flight',
    offers: [
      {
        id: 'flight1',
        title: 'Business class food',
        price: 40,
      },
      {
        id: 'flight2',
        title: 'Extra luggage',
        price: 80,
      },
      {
        id: 'flight3',
        title: 'On-board TV-station',
        price: 20,
      }
    ]
  },
  {
    type: 'check-in',
    offers: [
      {
        id: 'check-in1',
        title: 'Mini-bar code',
        price: 30,
      },
      {
        id: 'check-in2',
        title: 'Double bedroom',
        price: 160,
      },
    ]
  }
];

const getMockOffers = () => mockOffers;

export {getMockOffers};
