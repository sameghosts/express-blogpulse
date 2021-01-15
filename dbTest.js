
const db = require('./models')

db.comment.create({
  name: 'Paul Allen',
  content: 'This is really neat! Thanks for posting.',
  articleid: 1
})
.then(comment => {
  console.log(comment.get())
})