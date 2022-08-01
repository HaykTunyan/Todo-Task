import React, { useEffect, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../store/actions";
import selectors from "../store/selectors";
import ChangeModal from "./modal/ChangeModal";
import DeleteModal from "./modal/DeleteModal";

const TableList = () => {
  const dispatch = useDispatch();

  const [modalIsOpen, setIsOpen] = useState(false);
  const [deleteIsOpen, setDeleteIsOpen] = useState(false);
  const [changeState, setChangeState] = useState({
    id: null,
    title: null,
    description: null,
    color: null,
  });
  const [deleteState, setDeleteState] = useState({
    id: null,
  });

  const openChangeModal = (changeState) => {
    setIsOpen(!modalIsOpen);
    setChangeState(changeState);
  };

  const openDeleteModal = (deleteState) => {
    setDeleteIsOpen(!deleteIsOpen);
    setDeleteState(deleteState);
  };

  const getTableData = useCallback(() =>
    dispatch(actions.todo.findGetList({}))
  );

  const { getToDoList } = useSelector(selectors.todoState);

  useEffect(() => {
    getTableData();
  }, [modalIsOpen]);

  return (
    <>
      <div className="mt-5">
        <div className="container w-full px-2">
          <table className="table">
            <thead>
              <tr>
                <th scope="col"># ID</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Color</th>
                <th
                  scope="col"
                  align="right"
                  className="d-flex justify-content-end"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {getToDoList?.map((item) => (
                <tr key={item.id}>
                  <th scope="row">{item.id}</th>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td
                    style={{
                      backgroundColor: item.color,
                    }}
                  >
                    {item.color}
                  </td>
                  <td className="d-flex justify-content-end">
                    <div className="d-flex ">
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={() =>
                          openChangeModal({
                            id: item.id,
                            title: item.title,
                            description: item.description,
                            color: item.color,
                          })
                        }
                      >
                        Edit
                      </button>

                      <div className="px-2" />
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() =>
                          openDeleteModal({
                            id: item.id,
                          })
                        }
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {modalIsOpen && (
          <ChangeModal
            modalIsOpen={modalIsOpen}
            setIsOpen={setIsOpen}
            changeState={changeState}
            id={changeState.id}
            title={changeState.title}
            description={changeState.description}
            color={changeState.color}
            getTableData={getTableData}
          />
        )}
        {deleteIsOpen && (
          <DeleteModal
            deleteIsOpen={deleteIsOpen}
            setDeleteIsOpen={setDeleteIsOpen}
            id={deleteState.id}
          />
        )}
      </div>
    </>
  );
};

export default TableList;
