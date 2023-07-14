import { Button, Card, Col, Form, Input, Row, Typography } from 'antd';
import { Content } from 'antd/es/layout/layout';

const { Title } = Typography;

function Cadastro() {

    return (
        <Content>
            <Row justify='center'>
                <Col xs={24} sm={14} md={12} lg={10} xl={8}>
                    <Card style={{
                        margin: 24
                    }}>
                        <Title level={1}>Cadastre-se</Title>
                        <Form layout='vertical'>
                            <Form.Item
                                label='Nome'
                                name='nome'>
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label='E-mail'
                                name='email'>
                                <Input />
                            </Form.Item>
                            <Form.Item>
                                <Button
                                    block
                                    type='primary'>
                                    Enviar
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Content>
    )
}
export default Cadastro;