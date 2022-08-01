import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useDispatch} from "react-redux";
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

const CreateModal = ({ modalIsOpen, setIsOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const getTableData = useCallback(() =>
    dispatch(actions.todo.findGetList({}))
  );

  const afterOpenModal = () => {};

  const closeModal = () => {
    setIsOpen(false);
  };

  const onSubmit = (data) => {
    handleCreate(data);
    console.log(data);
  };

  const handleCreate = (data) => {
    dispatch(
      actions.todo.findCreateUser({
        ...data,
        afterSuccess: () => {
          getTableData();
        },
      })
    );
    closeModal();
  };

  return (
    <>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          ariaHideApp={false}
          contentLabel="Example Modal"
        >
          <div className="modal-header">
            <h5 className="modal-title" id="editModalLabel">
              Create Modal
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={closeModal}
            ></button>
          </div>
          <div className="modal-body">
            <form className="" onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3 row">
                <label htmlFor="title" className="col-sm-3 col-form-label">
                  Title
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    {...register("title")}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label
                  htmlFor="description"
                  className="col-sm-3 col-form-label"
                >
                  Description
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    {...register("description")}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label htmlFor="color" className="col-sm-3 col-form-label">
                  Color
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    id="color"
                    {...register("color")}
                  />
                </div>
              </div>
              <div className="mt-5" />
              <div className="d-flex justify-content-end">
                <button type="submit" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default CreateModal;
