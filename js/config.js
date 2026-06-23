// js/config.js

// Configuración completa para Nubes Emocionales
export const config = {
  // Moderación de contenido
  MODERATION: {
    HF_API_TOKEN: import.meta.env.VITE_HF_API_KEY || '',
    HF_API_URL: 'https://api-inference.huggingface.co/models/martin-ha/toxic-comment-model',
    TOXICITY_THRESHOLD: 0.5,
    ENABLED: true,
    DISPLAY_IF_FLAGGED: false
  },
  
  // Google Sheets
  GOOGLE_SHEETS_WEB_APP_URL: 'https://script.google.com/macros/s/AKfycbxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/exec',
  
  // Claves de almacenamiento en localStorage
  STORAGE_KEYS: {
    CUSTOM_MESSAGES: 'nubes_custom_messages',
    FLAGGED_CONTENT: 'nubes_flagged_content',
    OFFLINE_DATA: 'nubes_offline_data'
  },
  
  // Configuración de nubes
  MAX_CLOUDS: 50,
  AVAILABLE_FONTS: ['Rubik Distressed', 'Permanent Marker', 'Shadows Into Light', 'Caveat', 'Righteous', 'Bungee', 'Creepster', 'Fredoka One'],
  
  // Configuración de triple click
  TRIPLE_CLICK_WINDOW: 500, // ms
  TRIPLE_CLICK_MESSAGES: {
    default: '¡Gracias por compartir!',
    special: ['¡Sos increíble!', '¡Tu voz importa!', '¡Gracias por confiar!']
  },
  
  // Panel de administración
  ADMIN: {
    SECRET_KEY_COMBO: 'admin2024',
    SESSION_DURATION: 3600000, // 1 hora en ms
    STORAGE_KEY: 'nubes_admin_session'
  },
  
  // Límites de texto
  TEXT_MAX_LENGTH: 500,
  
  // Respuestas de ejemplo para nubes iniciales
  SAMPLE_RESPONSES: [
    { feeling: 'Feliz', reason: 'Por el sol de la mañana' },
    { feeling: 'Esperanzado', reason: 'Por nuevos comienzos' },
    { feeling: 'Tranquilo', reason: 'Después de meditar' },
    { feeling: 'Emocionado', reason: 'Por un proyecto nuevo' },
    { feeling: 'Agradecido', reason: 'Por tener amigos increíbles' }
  ]
};

// Variables legacy para compatibilidad (opcional)
export const HF_API_KEY = config.MODERATION.HF_API_TOKEN;
export const HF_MODEL = 'martin-ha/toxic-comment-model';
export const GOOGLE_SHEET_ID = '1BxiMvs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms';
export const SUPABASE_URL = '';
export const SUPABASE_ANON_KEY = '';
export const USE_BACKEND = false;

// Función de utilidad para verificar configuración
export function checkConfig() {
  if (!config.MODERATION.HF_API_TOKEN) {
    console.warn('⚠️ AVISO: No se encontró VITE_HF_API_KEY. La moderación de contenido no funcionará hasta que la configures en Vercel/Netlify.');
  }
  if (!config.GOOGLE_SHEETS_WEB_APP_URL || config.GOOGLE_SHEETS_WEB_APP_URL.includes('XXXXXXXX')) {
    console.warn('⚠️ AVISO: Configura tu GOOGLE_SHEETS_WEB_APP_URL en el código o variables de entorno.');
  }
  return true;
}