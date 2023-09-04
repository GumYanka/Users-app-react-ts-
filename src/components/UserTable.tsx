import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table, Select } from "antd";
import { UserService } from "../services/UserService";
import { User, UserData } from "../interfaces";

const UserTable = () => {
    const [users, setUsers] = useState<User[]>([]);
  const [genderFilter, setGenderFilter] = useState("");
  const [paginationInfo, setPaginationInfo] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });
  const [loading, setLoading] = useState(false);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text: string, record: User) => (
        <Link to={`/edit/${record.id}`}>{text}</Link>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ];

  useEffect(() => {
    setLoading(true);
  
    UserService.getUsers(
      paginationInfo.current,
      paginationInfo.pageSize,
      genderFilter
    )
      .then((data: UserData) => {
        setUsers(data.data);
        setPaginationInfo({
          current: data.meta.pagination.page,
          pageSize: paginationInfo.pageSize,
          total: data.meta.pagination.total,
        });
  
        setLoading(false);
      })
      .catch((error: Error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [paginationInfo.current, paginationInfo.pageSize, genderFilter]);
  
  const handlePageChange = (newPage: number, pageSize: number) => {
    setPaginationInfo({ ...paginationInfo, current: newPage, pageSize });
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
          flexWrap: "wrap",
        }}
      >
        <h2 style={{ flex: "1 1 auto" }}>Users</h2>
        <Select
          style={{ width: 150, marginBottom: "16px" }}
          value={genderFilter}
          onChange={(value) => setGenderFilter(value)}
        >
          <Select.Option value="">All</Select.Option>
          <Select.Option value="male">Male</Select.Option>
          <Select.Option value="female">Female</Select.Option>
        </Select>
      </div>
      <Table
        columns={columns}
        dataSource={users}
        pagination={{
          current: paginationInfo.current,
          pageSize: paginationInfo.pageSize,
          total: paginationInfo.total,
          onChange: handlePageChange,
          showSizeChanger: true,
          onShowSizeChange: handlePageChange,
        }}
        rowKey="id"
        loading={loading}
      />
    </div>
  );
};

export default UserTable;
