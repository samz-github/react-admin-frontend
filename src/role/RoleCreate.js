import React from 'react';
import { Create, required,SimpleForm, DisabledInput, TextInput} from 'react-admin';

export const RoleCreate = props => (
    <Create {...props}>
        <SimpleForm  redirect="list">
            {/*<DisabledInput source='id' label='默认' defaultValue='1' />*/}
            <TextInput source='username'label='用户名' validate={required()}/>
            <TextInput source='roleName' label='角色' validate={required()}/>
        </SimpleForm>
    </Create>
);
