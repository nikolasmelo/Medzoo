import { createClient } from '@supabase/supabase-js';

const rawUrl = (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_SUPABASE_URL) || 'https://hidpvqydeddtjhlfcjkv.supabase.co';
const supabaseUrl = rawUrl.replace(/\/rest\/v1\/?$/, '').replace(/\/+$/, '');
const supabaseAnonKey = (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_SUPABASE_ANON_KEY) || 'sb_publishable_876UCLQPsOSQC2su47JJYA_fWCFb7nr';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
