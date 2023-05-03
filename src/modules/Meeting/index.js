import { Card, Table, Button, Popconfirm, message } from "antd";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { DataStore } from '@aws-amplify/datastore';
import { Meeting, Host, Participant } from '../../models';
import { useNavigate } from 'react-router-dom';

const ViewMeeting = () => {

    const [meeting, setMeeting] = useState([]);

    useEffect(() => {
        DataStore.query(Meeting).then(setMeeting);
    }, []);

    const navigate = useNavigate();

    const tableColumns = [
        {
            title: 'Meeting ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Meeting Name',
            dataIndex: 'fullName',
            key: 'fullName',
        },
        {
            title: 'Location',
            dataIndex: 'location',
            key: 'location',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        // {
        //     title: 'Assign Host',
        //     key: 'assign',
        //     dataIndex: 'assign',
        //     render: () => (
        //         <Link to={`assign/${meeting.id}`}>
        //             <Button type="primary">Assign</Button>
        //         </Link>
        //     ),
        // },
        // {
        //     title: 'Assign Participant',
        //     key: 'appl',
        //     dataIndex: 'apply',
        //     render: () => (
                
        //         <Link to={`apply/${meeting.id}`}>
        //             <Button type="primary">Assign</Button>
        //         </Link>
        //     ),
        // },
    ];

    const renderNewItemButton = () => {
        return (
            <Link to={'create'}>
                <Button type="primary">Create Meeting</Button>
            </Link>
        );
    };

    return (
        <Card title={'Meeting'} style={styles.page} extra={renderNewItemButton()}>
            <Table
                dataSource={meeting}
                columns={tableColumns}
                rowKey=''
                onRow={(meeting) => ({
                    onClick: () => navigate(`${meeting.id}`)
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

export default ViewMeeting;