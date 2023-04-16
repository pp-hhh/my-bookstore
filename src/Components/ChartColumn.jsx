// import { Table, Button, InputNumber } from "antd";
//
// const { Column } = Table;
//
//
// export const imgColumn = ({title, dataIndex, key, width, imgclassName}) => {
//     return (
//         <Column title={title} dataIndex={dataIndex} key={key} width={width}
//                 render={(image) => {
//                     return <img src={image} alt="" className={imgclassName} />;
//             }
//         } />
//     )
// }
//
// export const buttonColumn = ({title, dataIndex, key, width, buttonclassName}) => {
//     return (
//         <Column title={title} dataIndex={dataIndex} key={key} width={width}
//                 render={(title) => {
//                     return <Button type="text" className={buttonclassName}>{title}</Button>;
//                 }
//             } />
//     )
// }
//
// export const inputColumn = ({title, dataIndex, key}) => {
//     return (
//         <Column title={title} dataIndex={dataIndex} key={key}
//                 render={(amount) => {
//                     return <InputNumber style={{width: "25%"}} defaultValue={amount} min={0} />
//                 }
//             } />
//     )
// }
//
// export const textColumn = ({title, dataIndex, key, className}) => {
//     return (
//         <Column title={title} dataIndex={dataIndex} key={key} className={className} />
//     )
// }
//
// export const actionColumn = ({title, dataIndex, key, className, handleDelete}) => {
//     return (
//         <Column title={title} dataIndex={dataIndex} key={key} className={className}
//                 render={(action, book) => {
//                     return action ? (
//                         <Button type="text" className={className} onClick={() => handleDelete(book.id)}>
//                             Delete
//                         </Button>
//                     ) : null;
//                 }
//             } />
//     )
// }