import { Card, Table, Button, Popconfirm, Tag } from "antd";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { DataStore } from '@aws-amplify/datastore';
import { Participant } from '../../models';
import { useNavigate } from 'react-router-dom';

const ViewParticipant = () => {

    const [participant, setParticipant] = useState([]);

    useEffect(() => {
        DataStore.query(Participant).then(setParticipant);
    },[]);

    const navigate = useNavigate();

    const renderMeetingStatus = (meetingStatus) => {
        const statusToColor = {
            PENDING: 'blue',
            ACCEPTED: 'orange',
            DECLINED: 'red',
        };

        return <Tag color={statusToColor[meetingStatus]}>{meetingStatus}</Tag>
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
            title: 'Meeting Name',
            dataIndex: 'meetingName',
            key: 'meetingName',
        },
        {   
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: renderMeetingStatus
        },
    ];

    const renderNewItemButton = () => {
        return (
            <Link to={'create'}>
                <Button type="primary">Create Participant</Button>
            </Link>
        );
    };

    return (
        <Card title={'Participant'} style={styles.page} extra={renderNewItemButton()}>
            <Table
                dataSource={participant}
                columns={tableColumns}
                rowKey=''
                onRow={(participant) => ({
                    onClick: () => navigate(`${participant.id}`)
                })}
            />
        </Card>
    );
};

const styles = {
    page: {
        margin: 20,
    },
}

export default ViewParticipant;