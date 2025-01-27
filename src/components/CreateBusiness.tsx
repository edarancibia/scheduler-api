import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CreateBusiness = () => {
  const [formData, setFormData] = useState({
    category: '',
    name: '',
    address: '',
  });

  const [showSuccessBanner, setShowSuccessBanner] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.category || !formData.name || !formData.address) {
      alert('Todos los campos son obligatorios');
      return;
    }

    console.log('Business Created:', formData);

    setShowSuccessBanner(true);
    setTimeout(() => setShowSuccessBanner(false), 5000);

    // Resetear formulario
    setFormData({
      category: '',
      name: '',
      address: '',
    });
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      {showSuccessBanner && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="bg-green-500 text-white text-center py-2 px-4 rounded mb-4"
        >
          Negocio creado exitosamente
        </motion.div>
      )}
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
            Categoría
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Seleccione una categoría</option>
            <option value="comercio">Comercio</option>
            <option value="salud">Salud</option>
            <option value="servicios">Servicios</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Nombre del Negocio
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Nombre del negocio"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
            Dirección
          </label>
          <input
            id="address"
            name="address"
            type="text"
            value={formData.address}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Dirección del negocio"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Crear Negocio
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBusiness;
