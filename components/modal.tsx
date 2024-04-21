import React, { useState } from 'react';
import { Button, Modal, Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';


interface ModalProps {
    title: string;
    tableData: any;
    visible: boolean;
    onClose: () => void;
}

export interface DataType {
    key: string;
    name: string;
    servingSize: string;
    calories: string;
    totalFat: string;
    saturatedFat: string;
    cholesterol: string;
    sodium: string;
    carbohydrates: string;
    fiber: string;
    sugar: string;
    protein: string;
}

const columns: TableProps<DataType>['columns'] = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Serving Size',
        dataIndex: 'servingSize',
        key: 'servingSize',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Calories',
        dataIndex: 'calories',
        key: 'calories',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Total Fat',
        dataIndex: 'totalFat',
        key: 'totalFat',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Saturated Fat',
        dataIndex: 'saturatedFat',
        key: 'saturatedFat',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Cholesterol',
        dataIndex: 'cholesterol',
        key: 'cholesterol',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Sodium',
        dataIndex: 'sodium',
        key: 'sodium',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Carbohydrates',
        dataIndex: 'carbohydrates',
        key: 'carbohydrates',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Fiber',
        dataIndex: 'fiber',
        key: 'fiber',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Sugar',
        dataIndex: 'sugar',
        key: 'sugar',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Protein',
        dataIndex: 'protein',
        key: 'protein',
        render: (text) => <a>{text}</a>,
    },

];

// const data: DataType[] = [
//     {
//         key: '1',
//         name: 'John Brown',
//         age: 32,
//         address: 'New York No. 1 Lake Park',
//         tags: ['nice', 'developer'],
//     },
//     {
//         key: '2',
//         name: 'Jim Green',
//         age: 42,
//         address: 'London No. 1 Lake Park',
//         tags: ['loser'],
//     },
//     {
//         key: '3',
//         name: 'Joe Black',
//         age: 32,
//         address: 'Sydney No. 1 Lake Park',
//         tags: ['cool', 'teacher'],
//     },
// ];


const ModalComp: React.FC<ModalProps> = ({
    title,
    tableData,
    visible,
    onClose
}) => {
    // const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            {/* <Button type="primary" onClick={() => setModalOpen(true)}>
                Open Modal
            </Button> */}
            <Modal
                title={title}
                centered
                open={visible}
                onOk={onClose}
                onCancel={onClose}
                width={1000}
                footer={null}
            >
                <Table
                    columns={columns}
                    dataSource={tableData}
                    scroll={{ x: 'max-content' }}
                />

            </Modal>
        </>
    );
};

export default ModalComp;