import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Contact } from './Contactos'; // Import the Contact type

interface AddContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddContact: (contact: Omit<Contact, 'id' | 'avatar'>) => void;
}

const AddContactModal: React.FC<AddContactModalProps> = ({ isOpen, onClose, onAddContact }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    status: 'active' as 'active' | 'inactive',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddContact(formData);
    onClose(); // Close modal after submission
    // Reset form for next time
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      jobTitle: '',
      status: 'active',
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 flex items-center justify-center">
      <div className="relative mx-auto p-5 border w-full max-w-2xl shadow-lg rounded-2xl bg-white">
        <div className="flex justify-between items-center pb-3 border-b">
          <h3 className="text-lg font-bold text-gray-900">Añadir Nuevo Contacto</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100">
            <X size={24} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="mt-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre Completo *</label>
              <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
              <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Teléfono</label>
              <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700">Empresa</label>
              <input type="text" name="company" id="company" value={formData.company} onChange={handleChange} className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">Cargo</label>
              <input type="text" name="jobTitle" id="jobTitle" value={formData.jobTitle} onChange={handleChange} className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700">Estado</label>
              <select name="status" id="status" value={formData.status} onChange={handleChange} className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                <option value="active">Activo</option>
                <option value="inactive">Inactivo</option>
              </select>
            </div>
          </div>
          <div className="mt-6 flex justify-end space-x-3">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">
              Cancelar
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Añadir Contacto
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddContactModal;
