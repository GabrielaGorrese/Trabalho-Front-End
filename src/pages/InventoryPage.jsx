import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardStats from '../components/DashboardStats';
import InventoryTable from '../components/InventoryTable';
import { RotateCw } from 'lucide-react';

function InventoryPage({ products, loading, error, onSelectProduct, onRefresh }) {
  return (
    <div className="page-content">
      {error && (
        <div className="error-banner">
          <p>{error}</p>
        </div>
      )}

      {loading ? (
        <div className="loading-container">
          <RotateCw className="spinner" size={40} />
          <p>Carregando produtos...</p>
        </div>
      ) : (
        <>
          <DashboardStats products={products} />
          <div className="refresh-section">
            <button className="refresh-btn" onClick={onRefresh}>
              <RotateCw size={16} />
              Atualizar
            </button>
          </div>
          <InventoryTable products={products} onSelectProduct={onSelectProduct} />
        </>
      )}
    </div>
  );
}

export default InventoryPage;
