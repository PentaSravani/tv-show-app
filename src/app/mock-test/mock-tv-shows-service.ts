import { Observable, of } from 'rxjs';

export const SHOW_OBJECT = [
   {
      'id': 2,
      'name': 'Person of Interest',
      'rating': {
         'average': 8.9
      },
      'genres': ['Drama', 'Science-Fiction', 'Thriller']
   },
   {
      'id': 3,
      'name': 'Bitten',
      'rating': {
         'average': 7.5
      },
      'genres': ['Drama', 'Horror', 'Thriller']
   },
   {
      'id': 4,
      'name': 'Arrow',
      'rating': {
         'average': 7.4
      },
      'genres': ['Drama', 'Action', 'Science-Fiction']
   }
];

export const EPISODE_OBJECT = [
   {
      'id': 1189,
      'name': 'Night Zero',
   },
   {
      'id': 1190,
      'name': 'Valar Dohaeris',
   }
];

export const showServiceStub = {
   getShows(): Observable<any> {
      return of(SHOW_OBJECT);
   },
   getPopularShows(): Observable<any> {
      return of(
         [{
            'id': 2,
            'name': 'Person of Interest',
            'rating': {
               'average': 8.9
            },
            'genres': ['Drama', 'Science-Fiction', 'Thriller']
         }]
      );
   },
   getSortedPopularShows(): Observable<any> {
      return of(
         [
            {
               'id': 4,
               'name': 'Arrow',
               'rating': {
                  'average': 7.4
               },
               'genres': ['Drama', 'Action', 'Science-Fiction']
            },
            {
               'id': 3,
               'name': 'Bitten',
               'rating': {
                  'average': 7.5
               },
               'genres': ['Drama', 'Horror', 'Thriller']
            },
            {
               'id': 2,
               'name': 'Person of Interest',
               'rating': {
                  'average': 8.9
               },
               'genres': ['Drama', 'Science-Fiction', 'Thriller']
            }
         ]);
   },
   getGenreShows(): Observable<any> {
      return of(
         [
            {
               'genre': 'Drama',
               'show': [
                  {
                     'id': 4,
                     'name': 'Arrow',
                     'rating': {
                        'average': 7.4
                     },
                     'genres': ['Drama', 'Action', 'Science-Fiction']
                  },
                  {
                     'id': 3,
                     'name': 'Bitten',
                     'rating': {
                        'average': 7.5
                     },
                     'genres': ['Drama', 'Horror', 'Thriller']
                  },
                  {
                     'id': 2,
                     'name': 'Person of Interest',
                     'rating': {
                        'average': 8.9
                     },
                     'genres': ['Drama', 'Science-Fiction', 'Thriller']
                  }
               ]
            }
         ]);
   },
   getEpisodes(): Observable<any> {
      return of([
         {
            'id': 1189,
            'name': 'Night Zero',
         },
         {
            'id': 1190,
            'name': 'Valar Dohaeris',
         }
      ]);
   },
   getShowDetails(): Observable<any> {
      return of([
         {
            'id': 1,
            'name': 'Under the Dome',
            'language': 'English',
            'genres': ['Drama', 'Science-Fiction', 'Thriller']
         },
         {
            'id': 1,
            'name': 'Under the Dome',
            'language': 'English',
            'genres': ['Drama', 'Science-Fiction', 'Thriller']
         }
      ]);
   },
   getAll(): Observable<any> {
      return of([
         {
            '_embedded': {
               'seasons': [
                  {
                     'id': 1,
                     'number': 1
                  }
               ],
               'cast': [{
                  'person': {
                     'id': 1,
                     'name': 'Mike Vogel'
                  }
               }]
            }
         }
      ]);
   }
};
