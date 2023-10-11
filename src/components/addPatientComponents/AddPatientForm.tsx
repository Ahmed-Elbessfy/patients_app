// Helpers
import { FC } from "react";

// Nested components
import { Button, Form, Input, InputNumber, Select } from "antd";

const AddPageForm: FC = () => {
  return (
    <>
      <h1>Add New Patient</h1>
      <Form labelCol={{ span: 5 }} wrapperCol={{ span: 15 }}>
        {/* First Name Input  */}
        <Form.Item label="First Name">
          <Input />
        </Form.Item>
        {/* Last Name Input  */}
        <Form.Item label="Last Name">
          <Input />
        </Form.Item>
        {/* Age Input  */}
        <Form.Item label="Age">
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>
        {/* Gender Input  */}
        <Form.Item label="Gender">
          <Select>
            <Select.Option value="male">Male</Select.Option>
            <Select.Option value="female">Female</Select.Option>
          </Select>
        </Form.Item>
        {/* Phon Input  */}
        <Form.Item label="Phone">
          <Input />
        </Form.Item>
        {/* Country Input  */}
        <Form.Item label="Country">
          <Input />
        </Form.Item>
        {/* Submit  */}
        <Form.Item wrapperCol={{ offset: 0 }}>
          <Button type="primary" htmlType="submit">
            Add Patient
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddPageForm;
