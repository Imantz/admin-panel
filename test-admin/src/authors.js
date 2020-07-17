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

export const AuthorList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="author" />
    </Datagrid>
  </List>
);

const AuthorTitle = ({ record }) => {
  return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const AuthorEdit = (props) => (
  <Edit title={<AuthorTitle />} {...props}>
    <SimpleForm>
      <TextInput source="author" />
    </SimpleForm>
  </Edit>
);

export const AuthorCreate = (props) => (
  <Create title="Create a Book" {...props}>
    <SimpleForm>
      <TextInput source="author" />
    </SimpleForm>
  </Create>
);
