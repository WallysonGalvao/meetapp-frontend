import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { parseISO } from 'date-fns';
import { toast } from 'react-toastify';
import { MdAddCircleOutline } from 'react-icons/md';

import history from '~/services/history';
import api from '~/services/api';

import BannerInput from '~/components/BannerInput';
import DatePicker from '~/components/DatePickerInput';
import Loading from '~/components/Loading';

import { Container, TextArea } from './styles';

const schema = Yup.object().shape({
    file_id: Yup.number().transform(value => (!value ? undefined : value)),
    title: Yup.string().required('Digite o título do meetup'),
    date: Yup.date().required('Selecione uma data'),
    description: Yup.string().required('Digite a descrição'),
    location: Yup.string().required('Digite a localização do evento'),
});

export default function Edit({ match }) {
    const { id } = match.params;
    const [meetup, setMeetup] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadMeetup() {
            try {
                const { data } = await api.get(`organizing/${id}`);
                const { title, description, date, location, file_id } = data;
                const { url } = data.File;
                const object = {
                    title,
                    description,
                    location,
                    date: parseISO(date),
                    banner: { file_id, url },
                };
                setMeetup(object);
            } catch (err) {
                toast.error('Erro ao editar meetup, por favor tente novamente');
                history.push('/dashboard');
            } finally {
                setLoading(false);
            }
        }
        loadMeetup();
    }, [id]);

    async function handleSubmit(data) {
        try {
            await api.put(`/meetups/${id}`, data);
            toast.success('Meetup alterado com sucesso');
            history.push(`/dashboard`);
        } catch (err) {
            toast.error('Erro ao editar meetup, por favor tente novamente');
            history.push('/dashboard');
        } finally {
            setLoading(false);
        }
    }

    if (loading) return <Loading>Carregando...</Loading>;

    return (
        <Container>
            <Form schema={schema} initialData={meetup} onSubmit={handleSubmit}>
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

Edit.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
};
