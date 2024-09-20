import {createClient } from '@supabase/supabase-js'


export const supabase = createClient(
    "https://wpxstzssnweyckywojid.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndweHN0enNzbndleWNreXdvamlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYyMDkxMjksImV4cCI6MjA0MTc4NTEyOX0.IDR9_WpND8dK9hWvoEEgcI_kbbb5pSNojlq5Esv-h30"
)