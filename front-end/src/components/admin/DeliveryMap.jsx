import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const DeliveryMap = () => {
  const [deliveries, setDeliveries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDeliveries = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get('http://localhost:5000/api/deliveries');
      setDeliveries(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Erreur lors de la récupération des livraisons:', error);
      setError('Erreur lors du chargement des données');
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDeliveries();
  }, [fetchDeliveries]);

  if (loading) {
    return <div>Chargement des livreurs...</div>;
  }

  if (error) {
    return <div style={{ color: 'red', padding: 24 }}>{error}</div>;
  }

  return (
    <div style={{ padding: 24 }}>
      <h2>Liste des Livreurs</h2>
      <ul>
        {deliveries.map((delivery) => (
          <li key={delivery._id}>
            <strong>{delivery.firstName} {delivery.lastName}</strong> - {delivery.email} - {delivery.mobileNumber} - {delivery.username}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeliveryMap;
