import React, { useState } from "react";
import CreateModal from "./modal/CreateModal";
import DeleteAllUsers from "./modal/DeleteAllUsers";

const BannerTable = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [deleteAllOpen, setDeleteAllOpen] = useState(false);

  const openCreateModal = () => {
    setIsOpen(!modalIsOpen);
  };

  const openDeleteAllModal = () => {
    setDeleteAllOpen(!deleteAllOpen);
  };

  return (
    <>
      <div className="d-flex justify-content-between items-center">
        <div className="">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => openDeleteAllModal()}
          >
            Delete All
          </button>
        </div>
        <div className="d-flex">
          <div className=" items-baseline px-2">
            <h3 className="text-primary"> Create New User</h3>
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => openCreateModal()}
          >
            Add User
          </button>
        </div>
      </div>
      {modalIsOpen && (
        <CreateModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
      )}

      {deleteAllOpen && (
        <DeleteAllUsers
          deleteAllOpen={deleteAllOpen}
          setDeleteAllOpen={setDeleteAllOpen}
        />
      )}
    </>
  );
};

export default BannerTable;
