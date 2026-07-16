// hooks/useClients.js
import { useState, useEffect, useCallback } from 'react';

const useClients = () => {
  const [clientsData, setClientsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchClients = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      // First try authenticated request
      let response = await fetch("/api/resource/Clients?fields=[\"company_name\",\"company_logo\"]&limit_page_length=50", {
        method: "GET",
        headers: { 
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      // If 403, try public endpoint
      if (!response.ok && response.status === 403) {
        response = await fetch("/api/resource/Clients?fields=[\"company_name\",\"company_logo\"]&limit_page_length=50", {
          method: "GET",
          headers: { 
            "Content-Type": "application/json",
          },
        });
      }

      if (!response.ok) {
        throw new Error("Failed to fetch clients data");
      }

      const result = await response.json();
      console.log("API Response:", result); // Debug log
      
      // Handle different response formats
      let clients = [];
      if (result.data && Array.isArray(result.data)) {
        // Standard Frappe API response
        clients = result.data;
      } else if (Array.isArray(result)) {
        // Direct array response
        clients = result;
      } else if (result.message && Array.isArray(result.message)) {
        // Some versions wrap in message
        clients = result.message;
      }

      if (clients.length > 0) {
        const mappedClients = clients.map(client => ({
          company_name: client.company_name || client.name || 'Unknown',
          company_logo: client.company_logo || null,
        }));
        
        console.log("Mapped clients:", mappedClients); // Debug log
        
        setClientsData({
          clients_badge: "Our Clients",
          clients_title: "Trusted by Industry Leaders",
          clients_subtitle: "We're proud to partner with innovative companies across various industries.",
          items: mappedClients
        });
      } else {
        // If no data, keep null to use defaults
        setClientsData(null);
      }
    } catch (err) {
      console.error("Error fetching clients:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchClients();
  }, [fetchClients]);

  const refreshClients = useCallback(() => {
    fetchClients();
  }, [fetchClients]);

  return {
    clientsData,
    loading,
    error,
    refreshClients
  };
};

export default useClients;