const express = require('express')
const cors = require('cors')
const app = express();
app.use(express.json());
app.use(cors({
    origin: function(origin, callback){
      return callback(null, true);
    }
}));

const QUOTES = [
    {
        Id: 0,
        Message: `“My Name Is Walter Hartwell White. I Live At 308 Negra Aroya Lane, Albuquerque, New Mexico, 87104.”`
    },
    {
        Id: 1,
        Message: ` "It Can Be Done Exactly As I Want It. The Only Question Is, Are You The Man To Do It."`
    },
    {
        Id: 2,
        Message: `"Because Your Boss Is Going To Need Me. 6353 Juan Tabo, Apartment 6."`
    },
    {
        Id: 3,
        Message: `“Right Now, What I Need, Is For You To Climb Down Out Of My Ass. Can You Do That? Will You Do That For Me, Honey?”`
    },
    {
        Id: 4,
        Message: ` "It's Always Been One Step Forward And Two Steps Back."`
    },
]

app.get('/api/quotes', (req, res) => {
    res.status(200).send(QUOTES)
})

app.get('/api/quotes/:id', (req, res) => {
    const { id } = req.params;
    const quote = QUOTES.find(q => q.Id === +id) || QUOTES[0];
    res.status(200).send(quote)
})

app.listen(3000, () => {
    console.log('App running...');
});