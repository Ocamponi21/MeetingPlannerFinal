import { Card, Table, Button, Popconfirm, message, Form, Input, Select } from "antd";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { DataStore } from '@aws-amplify/datastore';
import { Host, Meeting } from '../../models';

const HostDetails = () => {

    const {id} = useParams();

    const [host, setHost] = useState();
    const [name, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [meetingID, setMeetingID] = useState([]);
    const [meetingUpdate, setMeetingUpdate] = useState ('');

    useEffect(() => {
        if (!id) {
            return;
        }
        DataStore.query(Host, id).then(setHost);

    }, [id]);

    useEffect(() => {
        DataStore.query(Meeting).then(setMeetingID);
    }, []);


useEffect(() => {
    if (!host){
        return
    }
    setFullName(Host.fullName);
    setEmail(Host.email);
    setMeetingUpdate(Host.id);
}, [host, meetingID]);

var arry1 = [];

for ( let i = 0; i < meetingID.length; i++){
    arry1.push(meetingID[i].fullName)
}
var uniqueID = [...new Set(arry1)]

const deleteData = async () => {
    DataStore.delete(Host, id).then(setHost);
    message.success('Host has been deleted.');
};

const {Option} = Select;

const updateHostDetails = async ({fullName}) => {
    if (!name) {
        message.error('Name required!');
        return;
    }
    if (!email) {
        message.error('Email required!');
        return;
    }


    const updateHost = await DataStore.save(
        Host.copyOf(host, (updated) => {
            updated.fullName = name;
            updated.email = email;
            updated.meetingName = fullName;
        })
    );
    setHost(updateHost);
    message.success('Host updated!');
};

return (
    <Card title={`Update Host:`} style={styles.page}>
        <Form layout="vertical" onFinish={updateHostDetails}>
            <Form.Item label={'First Name'} required >
                <Input
                    value={name}
                    onChange={(e) => setFullName(e.target.value)}
                />
            </Form.Item>
            <Form.Item label={'Email'} required >
                <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Form.Item>
            <Form.Item name='fullName' label={'Meeting ID'} >

               <Select defaultValue={meetingUpdate} style = {{ width:230, padding: 5, }}> 
               {uniqueID.map(((uniqueID) => {
                    return <Option value = {uniqueID} key ={uniqueID} >{uniqueID} </Option>
               }))}
               </Select>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">Update</Button>
            </Form.Item>
            <Form.Item>
                <Popconfirm
                    placement="topLeft"
                    title={'Are you sure you want to delete this host?'}
                    onConfirm={deleteData}
                    okText="Yes"
                    cancelText="No"
                >
                    <Button type="primary" danger htmlType="submit">Delete</Button>
                </Popconfirm>
                </Form.Item>
        </Form>
    </Card>
);
};

const styles = {
    page: {
        margin: 20,
    },
}


export default HostDetails;