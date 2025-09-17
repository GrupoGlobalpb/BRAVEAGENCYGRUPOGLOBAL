import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardHome from '../components/dashboard/DashboardHome';
import Tarjetas from '../components/dashboard/Tarjetas';
import Contactos from '../components/dashboard/Contactos';
import Reportes from '../components/dashboard/Reportes';
import Plantillas from '../components/dashboard/Plantillas';
import Notificaciones from '../components/dashboard/Notificaciones';
import Usuarios from '../components/dashboard/Usuarios';
import Ajustes from '../components/dashboard/Ajustes';

const Dashboard: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardHome />} />
      <Route path="tarjetas" element={<Tarjetas />} />
      <Route path="contactos" element={<Contactos />} />
      <Route path="reportes" element={<Reportes />} />
      <Route path="plantillas" element={<Plantillas />} />
      <Route path="notificaciones" element={<Notificaciones />} />
      <Route path="usuarios" element={<Usuarios />} />
      <Route path="ajustes" element={<Ajustes />} />
    </Routes>
  );
};

export default Dashboard;
