import { Link } from "react-router-dom";

const Modal = ({ closeModal, deleteData, handleDeleteSelected, deletedId }) => {
    console.log('dddd', deletedId)
    return (
        <div id="modal" className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-lg w-3/4 xl:w-1/4 md:w-1/3 p-6 shadow-lg ">
                <div className="flex justify-between items-start mb-4">
                    <h2 className="font-semibold text-center w-full text-4xl ">
                        <i className="fa fa-check-circle text-green-300" aria-hidden="true"></i>
                    </h2>
                    <button onClick={() => closeModal()} className="text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
                </div>
                <h2 className="text-gray-700 mt-10 mb-10 text-center text-lg font-semibold">Are you sure to delete this data Successfully?</h2>
                <div className="text-center flex justify-center">
                    <Link className="btn ok-btn px-10 mr-2" onClick={() => handleDeleteSelected(deletedId)}>Yes</Link>
                    <Link className="btn delete-btn px-10" onClick={() => closeModal()}>No</Link>
                </div>

            </div>
        </div>
    )
}

export default Modal;