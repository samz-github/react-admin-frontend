import React from "react";
import {
    Edit,
    SimpleForm,
    TextInput
} from "react-admin"

export const RoleEdit = props => (
    <Edit  {...props}>
        <SimpleForm>
            {/*<TextInput source='id' label='id'/>*/}
            <TextInput source='username'label='用户名'/>
            <TextInput source='roleName' label='角色'/>
        </SimpleForm>
    </Edit>
);
