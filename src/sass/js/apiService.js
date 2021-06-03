const options = {
  headers: {
    Authorization: '21915448-ca2a23b845d7ec90c85800139',
  },
};

fetch(
  'https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=твой_ключ',
  options,
)
  .then(response => response.json())
  .then(console.log);
