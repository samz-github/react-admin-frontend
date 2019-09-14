import React from 'react';
import { List, CloneButton,Filter,Datagrid, EditButton,TextField,TextInput} from 'react-admin';

export const RoleFilter = (props) => (
    <Filter {...props}>
        <TextInput label="搜索用户名" source="username" alwaysOn />
    </Filter>
);

export const RoleList = props => (
    <List {...props} filters={<RoleFilter />}  >
        <Datagrid rowClick="edit">
            {/*<TextField source="id" />*/}
            <TextField source="username" label="用户名"/>
            <TextField source="roleName" label="角色"/>
            <EditButton />
            <CloneButton />
        </Datagrid>
    </List>
);
