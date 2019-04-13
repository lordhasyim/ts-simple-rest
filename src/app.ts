import * as express from "express";
import * as bookController from './controllers/bookController';
import * as bodyParser from 'body-parser';

const app = express();
app.set("port", 3000);

app.use(bodyParser.json());

app.get('/books', bookController.allBooks);
app.get('/book/:id', bookController.getBook);
app.put('/book', bookController.addBook);
app.delete('/book/:id', bookController.deleteBook);
app.post('/book/:id', bookController.updateBook);




app.listen(app.get("port"), () => {
    console.log("App is running on http://localhost:%d", app.get("port"))
})