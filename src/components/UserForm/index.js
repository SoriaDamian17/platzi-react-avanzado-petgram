import React, { Fragment } from 'react';
import { useInputValue } from '../../hooks/useInputValue';
import { Input, Form, Button } from './styles';

export const UserForm = ({ onSubmit, title }) => {
    const email = useInputValue('');
    const password = useInputValue('');
    
    return (
        <Fragment>
            <h2>{title}</h2>
            <Form onSubmit={onSubmit}>
                <Input placeholder='Email' {...email} />
                <Input placeholder='Password' type='password' {...password} />
                <Button>{title}</Button>
            </Form>
        </Fragment>
    )
}