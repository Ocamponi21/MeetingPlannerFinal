import { Card, Input, Button, message, Form} from "antd"
import { DataStore } from '@aws-amplify/datastore';
import { Host } from '../../models';

const {TextArea} =Input;

const CreateHost = () => {

    const onFinish = ({name, email}) => {
            if(!name){
                message.error('Name required!');
                return;
            }
            if(!email){
                message.error('Email required!');
                return;
            }
            DataStore.save(new Host({
                fullName: name,
                email,
            }));
            message.success('Host created!');
    };
    return (
        <Card title={'Create New Host'} style={styles.page}>
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

export default CreateHost;