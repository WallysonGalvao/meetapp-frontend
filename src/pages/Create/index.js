import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { MdAddCircleOutline } from 'react-icons/md';

import history from '~/services/history';
import api from '~/services/api';

import DatePicker from '~/components/DatePickerInput';
import BannerInput from '~/components/BannerInput';
import Loading from '~/components/Loading';

import { Container, TextArea } from './styles';

const schema = Yup.object().shape({
    file_id: Yup.number()
        .transform(value => (!value ? undefined : value))
        .required('Selecione um banner'),
    title: Yup.string().required('Digite o título do meetup'),
    date: Yup.date().required('Selecione uma data'),
    description: Yup.string().required('Digite a descrição'),
    location: Yup.string().required('Digite a localização do evento'),
});

export default function Create() {
    const [loading, setLoading] = useState(false);

    async function handleSubmit(data) {
        setLoading(true);
        try {
            await api.post('meetups', data);
            toast.success('Meetup cadastrado com sucesso');
            history.push(`/dashboard`);
        } catch (err) {
            toast.error(
                'O horário do meetup não pode ser anterior ao horário atual '
            );
        } finally {
            setLoading(false);
        }
    }

    if (loading) return <Loading>Carregando...</Loading>;

    return (
        <Container>
            <Form schema={schema} onSubmit={handleSubmit}>
                <BannerInput name="file_id" />
                <Input name="title" placeholder="Título do Meetup" />
                <TextArea
                    name="description"
                    placeholder="Descrição completa"
                    multiline
                    rows={5}
                />
                <DatePicker name="date" placeholder="Data do meetup" />
                <Input name="location" placeholder="Localização" />
                <button type="submit" disabled={loading}>
                    <MdAddCircleOutline size={20} color="#eee" />
                    {loading ? 'Salvando...' : 'Salvar meetup'}
                </button>
            </Form>
        </Container>
    );
}
