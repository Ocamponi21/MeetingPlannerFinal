import { Card, Select, Button, Popconfirm, message, Form, Input } from "antd";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { DataStore } from '@aws-amplify/datastore';
import { Participant, MeetingStatus, Meeting } from '../../models';

const statusToColor = {
    PENDING: 'blue',
    ACCEPTED: 'green',
    DECLINED: 'red',
};
const ParticipantDetails = () => {

    const {id} = useParams();

    const [participant, setParticipant] = useState();
    const [name, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [meetingID, setMeetingID] = useState([]);
    const [meetingUpdate, setMeetingUpdate] = useState ('');

    useEffect(() => {
        if (!id) {
            return;
        } 
        DataStore.query(Participant, id).then(setParticipant);
    }, [id]);

    useEffect(() => {
        DataStore.query(Meeting).then(setMeetingID);
    }, []);

    useEffect(() => {
        if (!participant) {
            return
        } 
        setFullName(Participant.fullname)
        setEmail(Participant.email)
        setMeetingUpdate(Participant.id);
    }, [participant, meetingID]);

    var arry1 = [];

for ( let i = 0; i < meetingID.length; i++){
    arry1.push(meetingID[i].fullName)
}
var uniqueID = [...new Set(arry1)]

const {Option} = Select;

useEffect(() => {
    const sub = DataStore.observeQuery(Participant, (o) =>
        o.id.eq(id)
    ).subscribe(({ items }) => {
        setParticipant(items[0]);
    });

    return () => {
        sub.unsubscribe();
    };
}, [id]);

const deleteData = async () => {
    DataStore.delete(Participant, id).then(setParticipant);
    message.success('Participant has been deleted.');
};

const updateParticipantDetails = async ({fullName}) => {
    if (!name) {
        message.error('Name required!');
        return;
    }
    if (!email) {
        message.error('Email required!');
        return;
    }

    const updateParticipant = await DataStore.save(
        Participant.copyOf(participant, (updated) => {
            updated.fullname = name;
            updated.email = email;
            updated.meetingName = fullName;

            console.log(fullName);
        })
    );
    setParticipant(updateParticipant);
    message.success('Participant updated!');
};

const acceptMeeting = async () => {
    const updatedMeeting = await DataStore.save(Meeting.copyOf(participant, updated => {
        updated.status = MeetingStatus.ACCEPTED;
    }));
    setParticipant (updatedMeeting);
    message.success('Meeting Accepted!');
};
const declineMeeting = async () => {
    const updatedMeeting = await DataStore.save(Meeting.copyOf(participant, updated => {
        updated.status = MeetingStatus.DECLINED;
    }));
    setParticipant (updatedMeeting);
    message.success('Meeting Declined!');
};

return (
    <Card title={`Update Participant:`} style={styles.page}>
        <Form layout="vertical">
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
            <div style={styles.buttonsContainer}>
                <Button
                    block
                    type='primary'
                    size='large'
                    style={styles.button}
                    onClick = {declineMeeting}
                >
                    Decline Meeting
                </Button>
                <Button
                    block
                    type='primary'
                    size='large'
                    style={styles.button}
                    onClick = {acceptMeeting}
                >
                    Accept Meeting
                </Button>
                </div>
                <Form.Item>
                <Button type="primary" htmlType="submit" onClick={updateParticipantDetails}>Update</Button>
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
    buttonsContainer: {
        display: 'flex',
        paddingBottom: 30,
    },
    button: {
        marginRight: 5,
        marginLeft: 5,

    },
}


export default ParticipantDetails;