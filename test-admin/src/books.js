import * as React from 'react';
import {
  List,
  Datagrid,
  Edit,
  Create,
  SimpleForm,
  TextField,
  TextInput,
} from 'react-admin';

export const BookList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
    </Datagrid>
  </List>
);

const BookTitle = ({ record }) => {
  return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const BookEdit = (props) => (
  <Edit title={<BookTitle />} {...props}>
    <SimpleForm>
      <TextInput source="title" />
    </SimpleForm>
  </Edit>
);

export const BookCreate = (props) => (
  <Create title="Create a Book" {...props}>
    <SimpleForm>
      <TextInput source="title" />
    </SimpleForm>
  </Create>
);
