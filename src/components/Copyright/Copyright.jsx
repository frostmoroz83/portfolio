import React from 'react';
import './copyright.scss'
import {Container} from 'reactstrap'

const Copyright = () => {
    return (
        <div className="copyright">
            <Container>
                <p className="copyright-label">© 2019 Александр Морозов</p>
                <p>Веб-разработчик, занимаюсь версткой и созданием сайтов.</p>
                <p>Этот сайт сделан в рамках прохождения обучения по верстке на курсах от
                    <a href="http://webcademy.ru/" target="_blank">WebCademy.ru</a>
                </p>
            </Container>
        </div>
    )
        ;
};

export default Copyright;