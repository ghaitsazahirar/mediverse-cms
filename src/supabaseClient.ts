import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xdcxhsauitzcxrytmicy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkY3hoc2F1aXR6Y3hyeXRtaWN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQxMDc2MjIsImV4cCI6MjA1OTY4MzYyMn0.nn9Tt9irvY5bsLidCjFwuB_PpakPbPLcfjnKBBF8Fss'; 

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
