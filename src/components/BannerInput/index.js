import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import { MdCameraEnhance } from 'react-icons/md';

import api from '~/services/api';

import { Container } from './styles';

export default function BannerInput() {
    const { defaultValue, registerField } = useField('banner');
    const { error } = useField('file_id');

    const [file, setFile] = useState(defaultValue && defaultValue.id);
    const [preview, setPreview] = useState(defaultValue && defaultValue.url);

    const ref = useRef();

    useEffect(() => {
        if (ref.current) {
            registerField({
                name: 'file_id',
                ref: ref.current,
                path: 'dataset.file',
            });
        }
    }, [ref]);

    async function handleChange(e) {
        const data = new FormData();

        data.append('file', e.target.files[0]);

        const response = await api.post('files', data);

        const { id, url } = response.data;

        setFile(id);
        setPreview(url);
    }

    return (
        <Container>
            <label htmlFor="banner">
                {!preview && (
                    <strong>
                        <MdCameraEnhance size={40} color="#eee" />
                        Selecionar imagem
                    </strong>
                )}
                <img src={preview} alt="" />
                <input
                    type="file"
                    id="banner"
                    data-file={file}
                    accept="image/*"
                    onChange={handleChange}
                    ref={ref}
                />
            </label>
            {error && <span>{error}</span>}
        </Container>
    );
}
