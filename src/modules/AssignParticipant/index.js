import { Card, Table, Button, Popconfirm, message } from "antd";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { DataStore } from '@aws-amplify/datastore';
import { Participant } from '../../models';
import { useNavigate } from 'react-router-dom';

const AssignParticipant = () => {

    const [participant, setParticipant] = useState([]);

    useEffect(() => {
        DataStore.query(Participant).then(setParticipant);
    },[]);

    const navigate = useNavigate();

    const AssignParticipant = async () => {
        message.success('Participant Assigned!');
    };

    const tableColumns = [
        {
            title: 'Participant Name',
            dataIndex: 'fullname', 
            key: 'fullname',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Apply Participants',
            key: 'apply',
            dataIndex: 'apply',
            render: () => (
                <Button type="primary" htmlType="submit" onClick={AssignParticipant}>Assign</Button>
            ),
        },
    ];


    return (
        <Card title={'Participants'} style={styles.page}>
            <Table
                dataSource={participant}
                columns={tableColumns}
            />
            </Card>
    );
};

const styles = {
    page: {
        margin: 20,
    },
}

export default AssignParticipant;