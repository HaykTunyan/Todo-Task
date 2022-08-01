import React, { useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
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

const ChangeModal = ({
  setIsOpen,
  modalIsOpen,
  id,
  title,
  description,
  color,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
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
    handleChange(data);
    console.log(data);
  };

  const handleChange = (data) => {
    dispatch(
      actions.todo.findChangeUser({
        ...data,
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
    setValue("title", title);
    setValue("description", description);
    setValue("color", color);
  }, []);

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
              Change Modal
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
                    defaultValue={title}
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
                    defaultValue={description}
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
                    defaultValue={color}
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

export default ChangeModal;
