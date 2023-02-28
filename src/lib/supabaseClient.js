import { createClient } from '@supabase/supabase-js'
let URL = 'https://rlxxpuhgpevdqsmoybdl.supabase.co'
let API_key_anon = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJseHhwdWhncGV2ZHFzbW95YmRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc1Njg2MzMsImV4cCI6MTk5MzE0NDYzM30.UwIdhXMHJPGS6uDQPKGuGE70OahGbEGoBFWaNwvTY6c'
export const supabase = createClient(URL, API_key_anon)