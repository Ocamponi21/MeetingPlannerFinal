import { Card, Table, Button, Popconfirm, message } from "antd";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { DataStore } from '@aws-amplify/datastore';
import { Host } from '../../models';
import { Meeting } from "../../models"; 
import { useNavigate } from 'react-router-dom';


const ViewHost = () => {

    const [host, setHost] = useState([]);

    useEffect(() => {
        DataStore.query(Host).then(setHost);
    },[]);
    
    const navigate = useNavigate();


    const tableColumns = [
        {
            title: 'Host Name',
            dataIndex: 'fullName',
            key: 'fullName',
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
    ];

    const renderNewItemButton = () => {
        return (
            <Link to={'host'}>
                <Button type="primary">Create Host</Button>
            </Link>
        );
    };

    return (
        <Card title={'Host'} style={styles.page} extra={renderNewItemButton()}>
            <Table
                dataSource={host}
                columns={tableColumns}
                rowKey='id'
                onRow={(host) => ({
                    //passing the host id
                    onClick: () => navigate(`host/${host.id}`)
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

export default ViewHost;