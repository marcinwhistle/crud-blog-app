const initialState = {
  posts: [
    {
      id: '1',
      title: 'First Article title',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('02-02-2022'),
      author: 'John Doe',
      category: 'sport',
    },
    {
      id: '2',
      title: 'Second Article title',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('02-02-2022'),
      author: 'John Doe',
      category: 'movies',
    },
    {
      id: '3',
      title: 'Third Article title',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('02-02-2022'),
      author: 'John Doe',
      category: 'news',
    },
    {
      id: '4',
      title: 'Fourth Article title',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('02-02-2022'),
      author: 'John Doe',
      category: 'sport',
    },
  ],
  categories: ['sport', 'news', 'movies'],
};

export default initialState;
