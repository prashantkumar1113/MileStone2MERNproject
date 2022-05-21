# MileStone2MERNproject
# Express App
# Entity Relationship Diagram (ERD)
![Tux, the Linux mascot](./assets/images/ERD.png)
# CRUD Routes <br> (All SQL errors result in Server Error 500)
## Create Routes (POST)

## Read Routes (GET)
| Table     | Routes                  | Results 
|-----------|-------------------------|---------
| Books     | /Books                  | Array of Objects
| Books     | /Books/:isbn            | Single Object or NULL
| Clubs     | /Clubs                  | Array of Objects
| Clubs     | /Clubs/:id              | Single Object or NULL
| Rosters   | /Rosters                | Array of Objects
| Rosters   | /Rosters/:id            | Single Object or NULL
| Users     | /Users                  | Array of Objects
| Users     | /Users/:email           | Single Object or NULL
| BookClubs | /BookClubs              | Array of Objects
| BookClubs | /BookClubs/Books/:isbn  | Array of Objects or Empty Array
| BookClubs | /BookClubs/Clubs/:id    | Single Object or NULL
| BookClubs | /BookClubs/Rosters/:id  | Single Object or NULL
| BookClubs | /BookClubs/Users/:email | Single Object or NULL

## Update Routes (PUT)

## Delete Routes (Delete)
