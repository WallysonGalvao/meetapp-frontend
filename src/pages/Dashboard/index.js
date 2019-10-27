import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Link } from 'react-router-dom';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';

import api from '~/services/api';

import Loading from '~/components/Loading';

import { Container, Header, ItemMeetup, Wrapper } from './styles';

export default function Dashboard() {
    const [meetups, setMeetups] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadMeetups() {
            const { data } = await api.get('organizing');
            const values = data.map(meetup => {
                const formatted = format(
                    new Date(meetup.date),
                    "dd 'de' MMMM', às' H:mm'h'",
                    {
                        locale: pt,
                    }
                );
                meetup.date = formatted;
                return meetup;
            });

            setMeetups(values);
            setLoading(false);
        }

        loadMeetups();
    }, []);

    if (loading) return <Loading>Carregando...</Loading>;

    return (
        <Container>
            <Header>
                <strong>Meus meetups</strong>

                <Link to="/create">
                    <button type="button">
                        <MdAddCircleOutline size={20} color="#eee" />
                        Novo meetup
                    </button>
                </Link>
            </Header>

            <ul>
                {meetups.map(meetup => (
                    <ItemMeetup key={meetup.id}>
                        <Wrapper>
                            <span> {meetup.title}</span>
                            <div>
                                <span>{meetup.date}</span>
                                <Link to={`/detail/${meetup.id}`}>
                                    <MdChevronRight size={20} color="#fff" />
                                </Link>
                            </div>
                        </Wrapper>
                    </ItemMeetup>
                ))}
            </ul>
        </Container>
    );
}
