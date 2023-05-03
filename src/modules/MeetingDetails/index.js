import { Card, Table, Button, Popconfirm, message, Form, Input } from "antd";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { DataStore } from '@aws-amplify/datastore';
import { Meeting } from '../../models';

const MeetingDetails = () => {

    const {id} = useParams();

    const [meeting, setMeeting] = useState();
    const [fullName, setFullName] = useState([]);
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');

    useEffect(() => {
        if (!id) {
            return;
        }
        DataStore.query(Meeting, id).then(setMeeting);

    }, [id]);

useEffect(() => {
    if (!meeting){
        return
    }
    setFullName(Meeting.fullName);
    setLocation(Meeting.location);
    setDate(Meeting.date);
}, [meeting]);

const deleteData = async () => {
    DataStore.delete(Meeting, id).then(setMeeting);
    message.success('Meeting has been deleted.');
};

const updateMeetingDetails = async () => {
    if (!fullName) {
        message.error('Name required!');
        return;
    }
    if (!location) {
        message.error('Location required!');
        return;
    }
    if (!date) {
        message.error('Date required!');
        return;
    }

    const updateMeeting = await DataStore.save(
        Meeting.copyOf(meeting, (updated) => {
            updated.fullName = fullName;
            updated.location = location;
            updated.date = date;
        })
    );
    setMeeting(updateMeeting);
    message.success('Meeting updated!');
};

return (
    <Card title={`Update Meeting:`} style={styles.page}>
        <Form layout="vertical">
            <Form.Item label={'First Name'} required >
                <Input
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />
            </Form.Item>
            <Form.Item label={'Location'} required >
                <Input
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
            </Form.Item>
            <Form.Item label={'Date'} required >
                <Input
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" onClick={updateMeetingDetails}>Update</Button>
            </Form.Item>
            <Form.Item>
                <Popconfirm
                    placement="topLeft"
                    title={'Are you sure you want to delete this meeting?'}
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


export default MeetingDetails;