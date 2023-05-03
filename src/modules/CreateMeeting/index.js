import { Card, Input, Button, message, Form} from "antd"
import { DataStore } from '@aws-amplify/datastore';
import { Meeting } from '../../models';

const CreateMeeting = () => {

    const onFinish = ({fullName, location, date}) => {
            if(!fullName){
                message.error('Name required!');
                return;
            }
            if(!location){
                message.error('Location required!');
                return;
            }
            if(!date){
                message.error('Date required!');
                return;
            }
            DataStore.save(new Meeting({
                fullName,
                location,
                date,
            }));
            message.success('Meeting created!');
    };
    return (
        <Card title={'Create New Meeting'} style={styles.page}>
            <Form layout="vertical" onFinish={onFinish}> 
                <Form.Item label={'Meeting Name'} required name='fullName'>
                    <Input placeholder="Enter Meeting Name"/>
                </Form.Item>
                <Form.Item label={'Location'} required name ={'location'} >
                    <Input placeholder="Enter Location"/>
                </Form.Item>
                 <Form.Item label={'Date'} required name ={'date'} >
                    <Input placeholder="Enter Date"/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>
        </Card>
    );
};
 
const styles = {
    page:{
        margin:20, 
    },
}

export default CreateMeeting;