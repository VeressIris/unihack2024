
const EditButton = ({ isEditing, onSave, onEdit }) => {
  return (
    <div className="-mt-2 flex justify-center space-x-4">
      {isEditing ? (
        <button
          onClick={onSave}
          className="bg-[#e6b71dd2] text-black hover:bg-[#E6B81D] px-4 py-2 rounded"
        >
          Salvează
        </button>
      ) : (
        <button
          onClick={onEdit}
          className="bg-[#e6b71dd2] text-black hover:bg-[#E6B81D] px-4 py-2 rounded"
        >
          Editează profilul
        </button>
      )}
    </div>
  );
};

export default EditButton;
