// // src/api/theme_api.jsx

// /**
//  * Fetches the active theme colors from Frappe
//  * @returns {Promise<Object>} Theme colors and name
//  */
// export const fetchActiveTheme = async () => {
//   try {
//     const response = await fetch(
//       '/api/resource/Website Theme Color?' + new URLSearchParams({
//         filters: JSON.stringify([['active', '=', 1]]),
//         fields: JSON.stringify(['primary', 'secondary', 'accent1', 'accent2', 'theme_name']),
//         limit_page_length: 1
//       }),
//       {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         }
//       }
//     );

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const result = await response.json();
    
//     // Return the theme data or default if none found
//     if (result.data && result.data.length > 0) {
//       const activeTheme = result.data[0];
//       return {
//         success: true,
//         data: {
//           colors: {
//             primary: activeTheme.primary || '#0F0F0F',
//             secondary: activeTheme.secondary || '#232D3F',
//             accent1: activeTheme.accent1 || '#005B41',
//             accent2: activeTheme.accent2 || '#008170'
//           },
//           themeName: activeTheme.theme_name || 'Custom Theme'
//         }
//       };
//     } else {
//       // Return default theme
//       return {
//         success: true,
//         data: {
//           colors: {
//             primary: '#0F0F0F',
//             secondary: '#232D3F',
//             accent1: '#005B41',
//             accent2: '#008170'
//           },
//           themeName: 'Default'
//         },
//         message: 'No active theme found, using default colors'
//       };
//     }
//   } catch (error) {
//     console.error('Error fetching theme colors:', error);
//     return {
//       success: false,
//       error: error.message,
//       data: {
//         colors: {
//           primary: '#0F0F0F',
//           secondary: '#232D3F',
//           accent1: '#005B41',
//           accent2: '#008170'
//         },
//         themeName: 'Default (Fallback)'
//       }
//     };
//   }
// };

// /**
//  * Default theme colors (export for direct use if needed)
//  */
// export const defaultThemeColors = {
//   primary: '#0F0F0F',
//   secondary: '#232D3F',
//   accent1: '#005B41',
//   accent2: '#008170'
// };

// /**
//  * Theme API object with multiple methods
//  */
// const themeApi = {
//   getActiveTheme: fetchActiveTheme,
  
//   /**
//    * Get theme by name
//    * @param {string} themeName 
//    */
//   getThemeByName: async (themeName) => {
//     try {
//       const response = await fetch(
//         '/api/resource/Website Theme Color?' + new URLSearchParams({
//           filters: JSON.stringify([['theme_name', '=', themeName]]),
//           fields: JSON.stringify(['primary', 'secondary', 'accent1', 'accent2', 'theme_name', 'active']),
//           limit_page_length: 1
//         }),
//         {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//           }
//         }
//       );

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const result = await response.json();
      
//       if (result.data && result.data.length > 0) {
//         const theme = result.data[0];
//         return {
//           success: true,
//           data: {
//             colors: {
//               primary: theme.primary || defaultThemeColors.primary,
//               secondary: theme.secondary || defaultThemeColors.secondary,
//               accent1: theme.accent1 || defaultThemeColors.accent1,
//               accent2: theme.accent2 || defaultThemeColors.accent2
//             },
//             themeName: theme.theme_name,
//             isActive: theme.active || false
//           }
//         };
//       } else {
//         return {
//           success: false,
//           error: 'Theme not found',
//           data: {
//             colors: defaultThemeColors,
//             themeName: 'Default'
//           }
//         };
//       }
//     } catch (error) {
//       console.error('Error fetching theme by name:', error);
//       return {
//         success: false,
//         error: error.message,
//         data: {
//           colors: defaultThemeColors,
//           themeName: 'Default (Fallback)'
//         }
//       };
//     }
//   },

//   /**
//    * Get all themes
//    */
//   getAllThemes: async () => {
//     try {
//       const response = await fetch(
//         '/api/resource/Website Theme Color?' + new URLSearchParams({
//           fields: JSON.stringify(['theme_name', 'primary', 'secondary', 'accent1', 'accent2', 'active']),
//           limit_page_length: 100
//         }),
//         {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//           }
//         }
//       );

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const result = await response.json();
      
//       return {
//         success: true,
//         data: result.data || []
//       };
//     } catch (error) {
//       console.error('Error fetching all themes:', error);
//       return {
//         success: false,
//         error: error.message,
//         data: []
//       };
//     }
//   }
// };

// export default themeApi;






// src/api/theme_api.jsx

/**
 * Fetches the active theme colors from Frappe
 * @returns {Promise<Object>} Theme colors and name
 */
export const fetchActiveTheme = async () => {
  try {
    const response = await fetch(
      '/api/resource/Website Theme Color?' + new URLSearchParams({
        filters: JSON.stringify([['active', '=', 1]]),
        fields: JSON.stringify(['primary', 'secondary', 'accent1', 'accent2', 'theme_name']),
        limit_page_length: 1
      }),
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    
    // Return the theme data or default if none found
    if (result.data && result.data.length > 0) {
      const activeTheme = result.data[0];
      return {
        success: true,
        data: {
          colors: {
            primary: activeTheme.primary || '#0F0F0F',
            secondary: activeTheme.secondary || '#232D3F',
            accent1: activeTheme.accent1 || '#005B41',
            accent2: activeTheme.accent2 || '#008170'
          },
          themeName: activeTheme.theme_name || 'Custom Theme'
        }
      };
    } else {
      // Return default theme
      return {
        success: true,
        data: {
          colors: {
            primary: '#0F0F0F',
            secondary: '#232D3F',
            accent1: '#005B41',
            accent2: '#008170'
          },
          themeName: 'Default'
        },
        message: 'No active theme found, using default colors'
      };
    }
  } catch (error) {
    console.error('Error fetching theme colors:', error);
    return {
      success: false,
      error: error.message,
      data: {
        colors: {
          primary: '#0F0F0F',
          secondary: '#232D3F',
          accent1: '#005B41',
          accent2: '#008170'
        },
        themeName: 'Default (Fallback)'
      }
    };
  }
};

/**
 * Default theme colors (export for direct use if needed)
 */
export const defaultThemeColors = {
  primary: '#0F0F0F',
  secondary: '#232D3F',
  accent1: '#005B41',
  accent2: '#008170'
};

/**
 * Theme API object with multiple methods
 */
const themeApi = {
  getActiveTheme: fetchActiveTheme,
  
  /**
   * Get theme by name
   * @param {string} themeName 
   */
  getThemeByName: async (themeName) => {
    try {
      const response = await fetch(
        '/api/resource/Website Theme Color?' + new URLSearchParams({
          filters: JSON.stringify([['theme_name', '=', themeName]]),
          fields: JSON.stringify(['primary', 'secondary', 'accent1', 'accent2', 'theme_name', 'active']),
          limit_page_length: 1
        }),
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      if (result.data && result.data.length > 0) {
        const theme = result.data[0];
        return {
          success: true,
          data: {
            colors: {
              primary: theme.primary || defaultThemeColors.primary,
              secondary: theme.secondary || defaultThemeColors.secondary,
              accent1: theme.accent1 || defaultThemeColors.accent1,
              accent2: theme.accent2 || defaultThemeColors.accent2
            },
            themeName: theme.theme_name,
            isActive: theme.active || false
          }
        };
      } else {
        return {
          success: false,
          error: 'Theme not found',
          data: {
            colors: defaultThemeColors,
            themeName: 'Default'
          }
        };
      }
    } catch (error) {
      console.error('Error fetching theme by name:', error);
      return {
        success: false,
        error: error.message,
        data: {
          colors: defaultThemeColors,
          themeName: 'Default (Fallback)'
        }
      };
    }
  },

  /**
   * Get all themes
   */
  getAllThemes: async () => {
    try {
      const response = await fetch(
        '/api/resource/Website Theme Color?' + new URLSearchParams({
          fields: JSON.stringify(['theme_name', 'primary', 'secondary', 'accent1', 'accent2', 'active']),
          limit_page_length: 100
        }),
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      return {
        success: true,
        data: result.data || []
      };
    } catch (error) {
      console.error('Error fetching all themes:', error);
      return {
        success: false,
        error: error.message,
        data: []
      };
    }
  }
};

export default themeApi;



