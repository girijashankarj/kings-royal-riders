const env = {
  isDevelopment: import.meta.env.VITE_NODE_ENV === 'development',
  useMockData: import.meta.env.VITE_USE_MOCK_DATA === 'true',
  googleSheets: {
    sheetId: import.meta.env.VITE_GOOGLE_SHEET_ID,
    apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
    scriptUrl: import.meta.env.VITE_GOOGLE_SCRIPT_URL,
    secretKey: import.meta.env.VITE_SECRET_KEY,
  },
  api: {
    baseUrl: import.meta.env.VITE_API_BASE_URL || '',
    timeout: parseInt(process.env.REACT_APP_API_TIMEOUT || '5000', 10),
  },
};

export default env;
