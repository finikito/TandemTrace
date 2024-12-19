export const fetchData = async () => {
    const response = await fetch(`http://localhost:5000/api/data`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    
    return response.json();
  };