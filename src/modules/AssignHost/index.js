import { Card, Table, Button, Popconfirm, Typography, message } from "antd";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { DataStore } from '@aws-amplify/datastore';
import { Meeting, Host } from "../../models";
import { useNavigate } from 'react-router-dom';
import { Header } from "antd/es/layout/layout";

const AssignHost = () => {


    const { id } = useParams();

    const [host, setHost] = useState();
    const [fullName, setFullName] = useState([]);
    const [email, setEmail] = useState('');
    const [meetingID, setMeetingID] = useState('');

    useEffect(() => {
        DataStore.query(Host).then(setHost);
    },[]);


    useEffect(() => {
        setFullName(Host.fullName);
        setEmail(Host.email);
        
    }, [host]);
    

    const assignHost = async () => {
        console.log(id);
        const updateHost = await DataStore.save(
            Host.copyOf(host, (updated) => {
                updated.meetingID = 'd18d4add-f63d-49da-a031-4fd13044130a';
            })
        );
        setHost(updateHost);
        message.success('Host Assigned!');
    };

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
            title: 'Apply Host',
            key: 'id',
            dataIndex: 'id',
            render: () => (
                <Button type="primary" htmlType="submit" onClick={assignHost}>Assign</Button>
            ),
        },
    ];



    return (
        <Card title={'Hosts'} style={styles.page}>
            <Table
                dataSource={host}
                columns={tableColumns}
                rowKey='id'
            />
        </Card>
    );
};

const styles = {
    page: {
        margin: 20,
    },
    title: {
        size: 2,
    },
}
export default AssignHost;