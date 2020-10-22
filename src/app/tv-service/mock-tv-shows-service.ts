import { of } from 'rxjs';

export const SHOW_OBJECT = [
   {
      "id": 2,
      "name": "Person of Interest",
      "rating": {
         "average": 8.9
      },
      "genres": ["Drama", "Science-Fiction", "Thriller"]
   },
   {
      "id": 3,
      "name": "Bitten",
      "rating": {
         "average": 7.5
      },
      "genres": ["Drama", "Horror", "Thriller"]
   },
   {
      "id": 4,
      "name": "Arrow",
      "rating": {
         "average": 7.4
      },
      "genres": ["Drama", "Action", "Science-Fiction"]
   }
]

export const showServiceStub = {
   getShows() {
      return of(SHOW_OBJECT)
   },

   getPopularShows() {
      return of(
         [{
            "id": 2,
            "name": "Person of Interest",
            "rating": {
               "average": 8.9
            },
            "genres": ["Drama", "Science-Fiction", "Thriller"]
         }]
      )
   },
   getSortedPopularShows() {
      return of(
         [
            {
               "id": 4,
               "name": "Arrow",
               "rating": {
                  "average": 7.4
               },
               "genres": ["Drama", "Action", "Science-Fiction"]
            },
            {
               "id": 3,
               "name": "Bitten",
               "rating": {
                  "average": 7.5
               },
               "genres": ["Drama", "Horror", "Thriller"]
            },
            {
               "id": 2,
               "name": "Person of Interest",
               "rating": {
                  "average": 8.9
               },
               "genres": ["Drama", "Science-Fiction", "Thriller"]
            }
         ]
      )
   },
   getGenreShows() {
      return of(
         [
            {
               "genre": "Drama",
               "show" : [
                  {
                     "id": 4,
                     "name": "Arrow",
                     "rating": {
                        "average": 7.4
                     },
                     "genres": ["Drama", "Action", "Science-Fiction"]
                  },
                  {
                     "id": 3,
                     "name": "Bitten",
                     "rating": {
                        "average": 7.5
                     },
                     "genres": ["Drama", "Horror", "Thriller"]
                  },
                  {
                     "id": 2,
                     "name": "Person of Interest",
                     "rating": {
                        "average": 8.9
                     },
                     "genres": ["Drama", "Science-Fiction", "Thriller"]
                  }
               ]
            },
            {
               "genre": "Action",
               "show" : [
                  {
                     "id": 4,
                     "name": "Arrow",
                     "rating": {
                        "average": 7.4
                     },
                     "genres": ["Drama", "Action", "Science-Fiction"]
                  }
               ]
            },
            {
               "genre": "Horror",
               "show" : [
                  {
                     "id": 3,
                     "name": "Bitten",
                     "rating": {
                        "average": 7.5
                     },
                     "genres": ["Drama", "Horror", "Thriller"]
                  }
               ]
            }

         ]
      )
   }
      
}