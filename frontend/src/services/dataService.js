import Papa from 'papaparse';

export const loadData = async (filePath) => {
  return new Promise((resolve, reject) => {
    Papa.parse(filePath, {
      header: true,
      download: true,
      complete: (results) => resolve(results.data),
      error: (err) => reject(err),
    });
  });
};
