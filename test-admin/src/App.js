import * as React from 'react';
import { Admin, Resource} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { BookList, BookEdit, BookCreate } from './books';
import { AuthorList, AuthorEdit, AuthorCreate } from './authors';
import { ReviewList, ReviewEdit, ReviewCreate } from './reviews';
import authProvider from './authProvider';
const dataProvider = jsonServerProvider('https://test-api-for-task.herokuapp.com');
const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource
      name="books"
      list={BookList}
      edit={BookEdit}
      create={BookCreate}
    />
    <Resource
      name="authors"
      list={AuthorList}
      edit={AuthorEdit}
      create={AuthorCreate}
    />

    <Resource
      name="reviews"
      list={ReviewList}
      edit={ReviewEdit}
      create={ReviewCreate}
    />
  </Admin>
);

export default App;
