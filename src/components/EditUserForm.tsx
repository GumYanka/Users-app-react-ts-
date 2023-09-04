import React, { useEffect } from "react";
import { Form, Input, Select, Button } from "antd";
import { toast } from "react-toastify";
import { UserService } from "../services/UserService";
import "react-toastify/dist/ReactToastify.css";
import { EditUserFormProps, User } from "../interfaces";

const { Option } = Select;

function EditUserForm({ userId, navigate }: EditUserFormProps) {
  const [form] = Form.useForm();

  useEffect(() => {
    UserService.getUser(userId)
      .then((user: User) => {
        form.setFieldsValue(user);
      })
      .catch((error: Error) => {
        console.error("Error fetching user data:", error);
      });
  }, [userId, form]);

  const handleSubmit = async (values: User) => {
    try {
      await UserService.updateUser(userId, values);
      toast.success("User data updated successfully");
      navigate("/users");
    } catch (error) {
      console.error("Error updating user data:", error);
      toast.error("Failed to update user data");
    }
  };

  return (
    <Form
      form={form}
      onFinish={handleSubmit}
      labelCol={{ flex: "110px" }}
      labelAlign="left"
      labelWrap
      wrapperCol={{ flex: 1 }}
      colon={false}
      style={{ maxWidth: 600 }}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please enter a name" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: "Please enter an email", type: "email" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Gender"
        name="gender"
        rules={[{ message: "Please select a gender" }]}
      >
        <Select>
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Status"
        name="status"
        rules={[{ message: "Please select a status" }]}
      >
        <Select>
          <Option value="active">Active</Option>
          <Option value="inactive">Inactive</Option>
        </Select>
      </Form.Item>

      <Form.Item label=" ">
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
  );
}

export default EditUserForm;
