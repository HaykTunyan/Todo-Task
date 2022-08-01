import React, { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import actions from "../../store/actions";
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

const DeleteModal = ({ id, deleteIsOpen, setDeleteIsOpen }) => {
  const { setValue } = useForm();
  const dispatch = useDispatch();
  const getTableData = useCallback(() =>
    dispatch(actions.todo.findGetList({}))
  );

  const afterOpenModal = () => {};

  const closeModal = () => {
    setDeleteIsOpen(false);
  };

  const handleDelete = () => {
    dispatch(
      actions.todo.findDeleteId({
        id,
        afterSuccess: () => {
            getTableData();
        },
      })
    );
    closeModal();
  };

  useEffect(() => {
    setValue("id", id);
  }, []);

  return (
    <>
      <div>
        <Modal
          isOpen={deleteIsOpen}
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
          <div className="modal-body">
            <div className="modal-body">
              <p>Are you sure you want to delete the user?</p>
            </div>
          </div>
          <div className="modal-footer d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
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

export default DeleteModal;
