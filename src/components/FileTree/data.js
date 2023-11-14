export const faqs = [
  {
    id: 1,
    answerId: 'Anwser1',
    question: 'Lorem ipsum dolor sit amet?',
    answer:
      'Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.',
  },
  {
    id: 2,
    answerId: 'Anwser2',
    question: 'Dignissimos sequi architecto?',
    answer:
      'Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque. Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque.',
  },
  {
    id: 3,
    answerId: 'Anwser3',
    question: 'Voluptas praesentium facere?',
    answer:
      'Blanditiis aliquid adipisci quisquam reiciendis voluptates itaque.',
  },
];

export const tree = [
  {
    anchor: false,
    title: 'Foods',
    path: '/root',
    children: [
      {
        anchor: true,
        title: 'Veg',
        path: '/root/Food',
        children: [
          {
            anchor: true,
            title: 'Carrot',
            path: '/root/Food/Veg',
            children: [
              {
                anchor: true,
                title: 'Ooty carrot',
                path: '/root/Food/Veg/Brinjal',
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    anchor: false,
    title: 'Cloths',
    path: '/root',
    children: [
      {
        anchor: true,
        title: 'T shirt',
        path: '/root/Cloths',
        children: [],
      },
      {
        anchor: true,
        title: 'Shirt',
        path: '/root/Cloths',
        children: [],
      },
    ],
  },
];
