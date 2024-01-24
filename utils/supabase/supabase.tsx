// supabase.js
import { createClient } from '@supabase/supabase-js';

const NEXT_PUBLIC_SUPABASE_URL1= "https://tvjhpizmtgylohkzsotr.supabase.co"
const NEXT_PUBLIC_SUPABASE_ANON_KEY1="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2amhwaXptdGd5bG9oa3pzb3RyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU5NDcxMDYsImV4cCI6MjAyMTUyMzEwNn0.LRZ7m-ffoBrnTlfn2kvutj2CM2WUNpp5znEjAHZvnt4"

const supabaseUrl = NEXT_PUBLIC_SUPABASE_URL1;
const supabaseAnonKey = NEXT_PUBLIC_SUPABASE_ANON_KEY1;

export const supabase = createClient(supabaseUrl!, supabaseAnonKey!);
