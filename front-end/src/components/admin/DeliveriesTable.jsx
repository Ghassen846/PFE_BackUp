// DeliveriesTable.jsx
import React, { useState, useEffect } from 'react';
import { Table, Button } from 'antd';
import axios from 'axios';

const DeliveriesTable = () => {
  const [deliveries, setDeliveries] = useState([]);
  const [loading, setLoading] = useState(false);

  // Définir les colonnes selon les nouveaux attributs
  const columns = [
    {
      title: 'ID',
      dataIndex: '_id',
      key: '_id',
    },
    {
      title: 'Prénom',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Nom',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Numéro de téléphone',
      dataIndex: 'mobileNumber',
      key: 'mobileNumber',
    },
    {
      title: 'Nom d\'utilisateur',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Button type="primary" onClick={() => handleViewDetails(record._id)}>
          Voir détails
        </Button>
      ),
    },
  ];

  // Récupérer les données depuis le backend
  const fetchDeliveries = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:5000/api/user/getAll');
      setDeliveries(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Erreur lors de la récupération des livreurs:', error);
      setLoading(false);
    }
  };

  // Gérer le clic sur le bouton détails
  const handleViewDetails = (id) => {
    console.log('Voir détails pour le livreur ID:', id);
    // Ajoutez ici la logique pour afficher les détails
  };

  // Charger les données au montage du composant
  useEffect(() => {
    fetchDeliveries();
  }, []);

  return (
    <div style={{ padding: 24 }}>
      <h2>Liste des Livreurs</h2>
      <Table 
        columns={columns}
        dataSource={deliveries}
        loading={loading}
        rowKey="_id"  // Changé de "id" à "_id"
        pagination={{
          pageSize: 10,
          showSizeChanger: true,
          pageSizeOptions: ['10', '20', '30'],
        }}
      />
    </div>
  );
};

export default DeliveriesTable;