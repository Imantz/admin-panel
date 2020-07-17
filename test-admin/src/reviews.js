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

export const ReviewList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="text" />
    </Datagrid>
  </List>
);

const ReviewTitle = ({ record }) => {
  return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const ReviewEdit = (props) => (
  <Edit title={<ReviewTitle />} {...props}>
    <SimpleForm>
      <TextInput source="text" />
    </SimpleForm>
  </Edit>
);

export const ReviewCreate = (props) => (
  <Create title="Create a review" {...props}>
    <SimpleForm>
      <TextInput source="text" />
    </SimpleForm>
  </Create>
);
