import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../store/actions";
import selectors from "../../store/selectors";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const DeleteAllUsers = ({ deleteAllOpen, setDeleteAllOpen }) => {
  const dispatch = useDispatch();

  const getTableData = useCallback(() =>
    dispatch(actions.todo.findGetList({}))
  );

  const { getToDoList } = useSelector(selectors.todoState);
  const userId = getToDoList.map((item, index) => item.id);
  const allId = userId.map((index, item) => index);

  const afterOpenModal = () => {};

  const closeModal = () => {
    setDeleteAllOpen(false);
  };

  const handleDelete = () => {
    allId.map((id) =>
      dispatch(
        actions.todo.findDeleteId({
          id,
          afterSuccess: () => {
            getTableData();
          },
        })
      )
    );
    closeModal();
  };

  return (
    <>
      <div>
        <Modal
          isOpen={deleteAllOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          ariaHideApp={false}
          contentLabel="Example Modal"
        >
          <div className="modal-header">
            <h5 className="modal-title" id="editModalLabel">
              Delete User
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={closeModal}
            ></button>
          </div>
          <div class="modal-body">
            <div className="modal-body">
              <p>You want to delete the list of all users?</p>
            </div>
          </div>
          <div className="modal-footer d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => handleDelete()}
            >
              Confirmed
            </button>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default DeleteAllUsers;
