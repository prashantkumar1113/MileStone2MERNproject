const { FetchBooks, FetchClubs, FetchUsers, FetchRosters } =  require("./queries/index.js")

const FetchAllBooks = async  () => {
  const books = await FetchBooks()
  console.log('Books:\n', books)
}

const FetchAllClubs = async  () => {
  const clubs = await FetchClubs()
  console.log('Clubs:\n', clubs)
}

const FetchAllRosters = async  () => {
  const rosters = await FetchRosters()
  console.log('Rosters:\n', rosters)
}

const FetchAllUsers = async  () => {
  const users = await FetchUsers()
  console.log('Users:\n', users)
}

FetchAllBooks()
FetchAllClubs()
FetchAllRosters()
FetchAllUsers()
