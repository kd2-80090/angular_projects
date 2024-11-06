import { Movie } from './movie.model';

describe('Movie', () => {
  it('should create an instance', () => {
    // Create an object that conforms to the Movie interface
    const movie: Movie = {
      id: 1,
      movieName: 'Jawan',
      releaseDate: '2023-09-07'
    };

    expect(movie).toBeTruthy(); // Check that the movie object is truthy
  });
});
