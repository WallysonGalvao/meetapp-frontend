import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { Container } from './styles';

import { updateProfileResquest } from '~/store/modules/user/actions';

const schema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Mínimo 3 caracteres')
        .required('Nome é obrigatório'),
    email: Yup.string()
        .email('Insira um e-mail válido')
        .required('O e-mail é obrigatório'),
    oldPassword: Yup.string(),
    password: Yup.string().when('oldPassword', (oldPassword, field) =>
        oldPassword
            ? field.required().min(6, 'A senha deve possuir 6 caracteres')
            : field
    ),
    confirmPassword: Yup.string().when('password', (password, field) =>
        password
            ? field
                  .required()
                  .oneOf([Yup.ref('password'), null], 'Senhas devem ser iguais')
            : field
    ),
});

export default function Profile() {
    const dispatch = useDispatch();
    const profile = useSelector(state => state.user.profile);

    function handleUpdateUser(data, { resetForm }) {
        dispatch(updateProfileResquest(data));
        resetForm();
    }

    return (
        <Container>
            <Form
                schema={schema}
                initialData={profile}
                onSubmit={handleUpdateUser}
            >
                <Input name="name" placeholder="Nome completo" />
                <Input
                    name="email"
                    type="email"
                    placeholder="Seu endereço de e-mail"
                />

                <hr />

                <Input
                    type="password"
                    name="oldPassword"
                    placeholder="Sua senha atual"
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Nova senha"
                />
                <Input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirmação de senha"
                />

                <button type="submit">Salvar perfil</button>
            </Form>
        </Container>
    );
}
