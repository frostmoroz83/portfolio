import React from 'react';
import './copyright.scss'
import {Container} from 'reactstrap'

const Copyright = () => {
    return (
        <div id="copyright" className="copyright">
            <Container>
                <p className="copyright-label">© 2019 Александр Морозов</p>
                <p>Веб-разработчик, занимаюсь версткой и созданием сайтов.</p>
            </Container>
        </div>
    )
};

export default Copyright;