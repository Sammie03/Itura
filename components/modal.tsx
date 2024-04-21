import React from 'react';
import { Modal, Table } from 'antd';
import type { TableProps } from 'antd';
interface ModalProps {
    title: string;
    tableData: any;
    visible: boolean;
    onClose: () => void;
    isTable: boolean;
    recipe: string;
    recipeData: any;
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

const ModalComp: React.FC<ModalProps> = ({
    title,
    tableData,
    visible,
    onClose,
    isTable,
    recipe,
    recipeData
}) => {

    return (
        <>
            <Modal
                title={title}
                centered
                open={visible}
                onOk={onClose}
                onCancel={onClose}
                width={1000}
                footer={null}
            >

                {
                    isTable &&
                    <Table
                        columns={columns}
                        dataSource={tableData}
                        scroll={{ x: 'max-content' }}
                        pagination={false}
                    />

                }

                {
                    !isTable &&
                    <div className="recipe-container" style={{ border: '1px solid red' }}>
                        <div>
                            <h3 id="result-recipe-title">
                                {recipe}
                            </h3>
                        </div>
                        <div id="result-recipe">
                            {
                                recipeData?.map((item: any) => (
                                    <p>{item}</p>
                                ))
                            }
                        </div>
                    </div>
                }

            </Modal>
        </>
    );
};

export default ModalComp;