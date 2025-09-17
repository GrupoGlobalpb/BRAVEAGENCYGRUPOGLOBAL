import React from 'react';
import { X, AlertTriangle } from 'lucide-react';

interface DeleteContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmDelete: () => void;
}

const DeleteContactModal: React.FC<DeleteContactModalProps> = ({ isOpen, onClose, onConfirmDelete }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 flex items-center justify-center">
      <div className="relative mx-auto p-5 border w-full max-w-md shadow-lg rounded-2xl bg-white">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
            <AlertTriangle className="h-6 w-6 text-red-600" />
          </div>
          <h3 className="text-lg leading-6 font-medium text-gray-900 mt-5">
            Eliminar Contacto
          </h3>
          <div className="mt-2 px-7 py-3">
            <p className="text-sm text-gray-500">
              ¿Estás seguro de que quieres eliminar este contacto? Esta acción no se puede deshacer.
            </p>
          </div>
          <div className="items-center px-4 py-3 space-x-4">
            <button
              id="cancel-btn"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 w-full sm:w-auto"
            >
              Cancelar
            </button>
            <button
              id="delete-btn"
              onClick={onConfirmDelete}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 w-full sm:w-auto mt-2 sm:mt-0"
            >
              Sí, Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteContactModal;
