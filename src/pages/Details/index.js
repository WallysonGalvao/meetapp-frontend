import React, { useState, useEffect } from 'react';
import { MdLocationOn } from 'react-icons/md';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import api from '~/services/api';
import history from '~/services/history';
import { Container, ButtonContainer, Loading } from './styles';

export default function DetailsMeetup({ match }) {
    const { id } = match.params;
    const [meetup, setMeetup] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadMeetup() {
            try {
                const response = await api.get(`/organizing/${id}`);
                const data = response.data.File;
                setMeetup({ ...response.data, ...data });
                setLoading(false);
            } catch (err) {
                toast.error('Error acess meetup details, please try again');
                setLoading(false);
                history.push('/dashboard');
            }
        }

        loadMeetup();
    }, [id]);

    function handleEdit() {
        history.push(`/meetup/edit/${id}`);
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
                    ? `Error cancel: ${errData.error}`
                    : 'Error cancel meetup, try again'
            );
        }
    }

    return loading ? (
        <Loading>Carregando...</Loading>
    ) : (
        <Container>
            <ButtonContainer>
                <strong>{meetup.title}</strong>
                <div>
                    <button type="button" onClick={handleEdit}>
                        Editar
                    </button>
                    <button type="button" onClick={handleCancel}>
                        Cancelar
                    </button>
                </div>
            </ButtonContainer>
            <img src={meetup.url} alt="banner" />
            <p>{meetup.description}</p>
            <div className="teste">
                <span>
                    <MdLocationOn size={18} color="#eee" />
                    {meetup.location}
                </span>
                <span>{new Date(meetup.date).toLocaleString()} </span>
            </div>
        </Container>
    );
}

DetailsMeetup.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
};
