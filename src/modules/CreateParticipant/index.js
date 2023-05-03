import { Card, Input, Button, message, Form} from "antd"
import { DataStore } from '@aws-amplify/datastore';
import { Participant } from '../../models';

const {TextArea} =Input;

const CreateParticipant = () => {

    const onFinish = ({name, email}) => {
            if(!name){
                message.error('Name required!');
                return;
            }
            if(!email){
                message.error('Email required!');
                return;
            }
            DataStore.save(new Participant({
                fullname: name,
                email,
            }));
            message.success('Participant created!');
    };
    return (
        <Card title={'Create New Participant'} style={styles.page}>
            <Form layout="vertical" onFinish={onFinish}> 
                <Form.Item label={'Name'} required name='name'>
                    <Input placeholder="Enter Name"/>
                </Form.Item>
                <Form.Item label={'Email'} required name ={'email'} >
                    <TextArea 
                    rows ={1}
                    placeholder ='Enter Email'
                    />
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

export default CreateParticipant;