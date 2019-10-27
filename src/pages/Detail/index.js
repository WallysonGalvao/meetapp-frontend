import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import {
    MdLocationOn,
    MdModeEdit,
    MdDeleteForever,
    MdEvent,
} from 'react-icons/md';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import api from '~/services/api';
import history from '~/services/history';

import { Container, TitleContainer, InfoContainer } from './styles';

import Loading from '~/components/Loading';

export default function Detail({ match }) {
    const { id } = match.params;
    const [meetup, setMeetup] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadMeetup() {
            try {
                const { data } = await api.get(`/organizing/${id}`);
                const formatted = format(
                    new Date(data.date),
                    "dd 'de' MMMM', às' H:mm'h'",
                    {
                        locale: pt,
                    }
                );
                setMeetup({ ...data, date: formatted, url: data.File.url });
            } catch (err) {
                toast.error('Erro ao recuperar o meetup, tente novamente');
                history.push('/dashboard');
            } finally {
                setLoading(false);
            }
        }

        loadMeetup();
    }, [id]);

    function handleEdit() {
        history.push(`/edit/${id}`);
    }

    async function handleCancel() {
        try {
            await api.delete(`meetups/${id}`);
            toast.success('Meetup cancelado com sucesso');
            history.push(`/dashboard`);
        } catch (err) {
            const errData = err.response.data;
            toast.error(
                errData && errData.error
                    ? `Erro ao deletar: ${errData.error}`
                    : 'Erro ao deletar meetup, tente novamente'
            );
        }
    }

    if (loading) return <Loading>Carregando...</Loading>;

    return (
        <Container>
            <TitleContainer>
                <span>{meetup.title}</span>
                <div>
                    <button type="button" className="edit" onClick={handleEdit}>
                        <MdModeEdit size={20} color="#eee" />
                        Editar
                    </button>
                    <button type="button" onClick={handleCancel}>
                        <MdDeleteForever size={20} color="#eee" /> Cancelar
                    </button>
                </div>
            </TitleContainer>

            <img src={meetup.url} alt="banner" />

            <p>{meetup.description}</p>

            <InfoContainer>
                <span>
                    <MdEvent size={12} color="#eee" />
                    {meetup.date}
                </span>

                <span>
                    <MdLocationOn size={12} color="#eee" />
                    {meetup.location}
                </span>
            </InfoContainer>
        </Container>
    );
}

Detail.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
};
