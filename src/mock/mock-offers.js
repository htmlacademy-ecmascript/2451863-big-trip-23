const mockOffers = [
  {
    type: 'taxi',
    offers: [
      {
        id: 't1',
        title: 'Upgrade to a comfort class',
        price: 120,
      }
    ]
  },
  {
    type: 'flight',
    offers: [
      {
        id: 'f1',
        title: 'Business class food',
        price: 40,
      },
      {
        id: 'f2',
        title: 'Extra luggage',
        price: 80,
      },
      {
        id: 'f3',
        title: 'On-board TV-station',
        price: 20,
      }
    ]
  },
  {
    type: 'check-in',
    offers: [
      {
        id: 'c1',
        title: 'Mini-bar code',
        price: 30,
      },
      {
        id: 'c2',
        title: 'Double bedroom',
        price: 160,
      },
    ]
  }
];

const getMockOffers = () => mockOffers;

export {getMockOffers};
