import React from 'react';
import { Container } from './styles';
import ContentHeader from '../../components/ContentHeader';

import SelectInput from '../../components/SelectInput';

const Dashboard: React.FC = () => {

    const options = [
        {value: 'Samuel', label: 'Samuel'},
        {value: 'Deisy', label: 'Deisy'}
    ];
    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#F7931B">
               // <SelectInput options={options} onChange={() => {}}/>
            </ContentHeader>
        </Container>
    );
}


export default Dashboard;